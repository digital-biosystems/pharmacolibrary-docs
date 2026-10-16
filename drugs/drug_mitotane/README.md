<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;mitotane&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Mitotane_Cazaubon2019_reference&quot;,&quot;label&quot;:&quot;Cazaubon_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_mitotane/Mitotane_Cazaubon2019_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Mitotane_Kerkhofs2015_reference&quot;,&quot;label&quot;:&quot;Kerkhofs_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_mitotane/Mitotane_Kerkhofs2015_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# mitotane

- **generic name:** mitotane
- **ATC codes:** `L01XX23`
- **DrugBank:** [DB00648](https://go.drugbank.com/drugs/DB00648) · **PubChem:** [CID 4211](https://pubchem.ncbi.nlm.nih.gov/compound/4211)
- **molar mass:** 320.041 g/mol (C14H10Cl4) — DrugBank
- **groups:** approved, investigational

## About

Mitotane is an antineoplastic drug used to treat adrenal cortex cancer and Cushing's syndrome. It is authorised in the European Union for adrenal cortex tumours and remains in clinical use, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q417465](https://www.wikidata.org/wiki/Q417465) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| mitotane | parent | 320.041 | C14H10Cl4 | DrugBank | [4211](https://pubchem.ncbi.nlm.nih.gov/compound/4211) | Arshad_2018, Cazaubon_2019, Kerkhofs_2015, Yin_2021 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 21:07 | 1:28 | 2/2/1 | 0/0/0 | 0/0/0 | 114,886/6,688 | einfracz / qwen3.8-27b | 3 | 0/3 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span> | [Cazaubon_2019_reference](drugs/drug_mitotane/Mitotane_Cazaubon2019_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 | Cazaubon Y et al., Population Pharmacokinetics Modelling a…, Pharmaceutics (2019) | [10.3390/pharmaceutics11110566](https://doi.org/10.3390/pharmaceutics11110566) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | [Kerkhofs_2015_reference](drugs/drug_mitotane/Mitotane_Kerkhofs2015_reference.md) | ▶ model + simulator | 1-compartment, IV | 3 | Kerkhofs TM et al., Development of a pharmacokinetic model…, Therapeutic drug monitoring (2015) | [10.1097/FTD.0000000000000102](https://doi.org/10.1097/FTD.0000000000000102) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Arshad_2018_reference](drugs/drug_mitotane/Mitotane_Arshad2018_reference.md) | — | 1-compartment (no model) | 1 | Arshad U et al., Enzyme autoinduction by mitotane suppor…, European journal of endocri… (2018) | [10.1530/EJE-18-0342](https://doi.org/10.1530/EJE-18-0342) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Yin_2021_basic_model](drugs/drug_mitotane/Mitotane_Yin2021_basic_model.md) | — | 2-compartment (no model) | 5 | Yin A et al., Population Pharmacokinetic and Pharmaco…, Clinical pharmacokinetics (2021) | [10.1007/s40262-020-00913-y](https://doi.org/10.1007/s40262-020-00913-y) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.733). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Yin_2021_final](drugs/drug_mitotane/Mitotane_Yin2021_final.md) | — | 3-compartment (no model) | 7 (+2 cov.) | Yin A et al., Population Pharmacokinetic and Pharmaco…, Clinical pharmacokinetics (2021) | [10.1007/s40262-020-00913-y](https://doi.org/10.1007/s40262-020-00913-y) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=mitotane).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor | DrugBank actor |
| metabolism | kidney | `CYP3A5` inducer | DrugBank actor |
| metabolism | liver | `CYP3A4` inducer, `CYP3A5` inducer, `CYP3A7` inducer | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer, `CYP3A5` inducer | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| — | adrenal gland | `CYP11B1` inducer | DrugBank actor |
| — | prostate gland | `AR` target | DrugBank actor |

<sub>Actors without a tissue in the table: ESR1 (binder), FDX1 (unknown), PGR (target), SERPINA6 (upregulator), SERPINA7 (upregulator), SHBG (upregulator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 5  ·  extracted 2  ·  needs_review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Arshad_2018.pdf` | Arshad U et al., Enzyme autoinduction by mitotane suppor…, European journal of endocri… (2018) | popPK | 10 | [10.1530/EJE-18-0342](https://doi.org/10.1530/EJE-18-0342) | [30087117](https://pubmed.ncbi.nlm.nih.gov/30087117) | The study reports a population PK model for mitotane with specific numeric values for volume of distribution and variability in the abstract, though full clearance and half-life values may require the full text or tables not fully detailed in the snippet. |
| `Kerkhofs_2015.pdf` | Kerkhofs TM et al., Development of a pharmacokinetic model…, Therapeutic drug monitoring (2015) | popPK | 10 | [10.1097/FTD.0000000000000102](https://doi.org/10.1097/FTD.0000000000000102) | [24887633](https://pubmed.ncbi.nlm.nih.gov/24887633) | The abstract explicitly provides quantitative population PK parameters (clearance 0.94 ± 0.37 L/h, Vss 161 ± 68 L/kg) for mitotane in a 3-compartment model. |

<sub>queue written 2026-10-06T21:06:29.743432+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Creemers_2019 | irrelevant | 0 | 0 | The study investigates the effect of MDR1 inhibition on cell sensitivity to mitotane and other drugs in vitro, rather than reporting pharmacokinetic disposition parameters. |
| popPK | Paci_2014 | irrelevant | 2 | 0 | The paper is a general review of therapeutic drug monitoring for anticancer drugs and only mentions mitotane in passing as an agent for which TDM might be useful; it provides no original quantitative PK parameters for mitotane. |
| popPK | Sbiera_2019 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study of Hsp90 inhibitors and mitotane on cell lines, not a pharmacokinetic study. |
| popPK | Weigand_2020 | irrelevant | 0 | 0 | The study investigates the mechanism of cell death (ferroptosis) in adrenal cancer cells and does not report pharmacokinetic parameters for mitotane. |
| popPK | van_2020 | irrelevant | 1 | 0 | This is an in vitro efficacy study reporting EC50 values for cytotoxicity and cortisol inhibition, not pharmacokinetic disposition parameters (CL, V, half-life). |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 21:06 UTC</sub>
