<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;erdafitinib&quot;}]"></div>

# erdafitinib

- **generic name:** erdafitinib
- **ATC codes:** `L01EN01`
- **DrugBank:** [DB12147](https://go.drugbank.com/drugs/DB12147) · **PubChem:** [CID 67462786](https://pubchem.ncbi.nlm.nih.gov/compound/67462786)
- **molar mass:** 446.555 g/mol (C25H30N6O2) — DrugBank
- **groups:** approved, investigational

## About

Erdafitinib is a protein kinase inhibitor used to treat transitional cell carcinoma, a cancer of the urinary tract. It is authorised in the European Union and is also being studied for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27077213](https://www.wikidata.org/wiki/Q27077213) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| erdafitinib | parent | 446.555 | C25H30N6O2 | DrugBank | [67462786](https://pubchem.ncbi.nlm.nih.gov/compound/67462786) | Dosne_2020, Dosne_2022 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:46 | 4:15 | 0/0/2 | 0/1/0 | 0/0/0 | 124,518/21,785 | openai / gpt-6-luna | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.625). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Dosne_2020_reference](drugs/drug_erdafitinib/Erdafitinib_Dosne2020_reference.md) | — | 1-compartment (no model) | 3 | Dosne AG et al., Population Pharmacokinetics of Total an…, Journal of clinical pharmac… (2020) | [10.1002/jcph.1547](https://doi.org/10.1002/jcph.1547) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.4). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q27 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Dosne_2022_reference](drugs/drug_erdafitinib/Erdafitinib_Dosne2022_reference.md) | — | 1-compartment (no model) | 1 | Dosne AG et al., Erdafitinib's effect on serum phosphate…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12727](https://doi.org/10.1002/psp4.12727) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.25). Primary extraction retained.">cross-check: partial</span> | [De_2024_serum_phosphate](drugs/drug_erdafitinib/pd_De_2024_serum_phosphate.md) | serum phosphate · model not identified | — | De Carlo A et al., Reinforcement Learning and PK-PD Models…, Clinical pharmacology and t… (2024) | [10.1002/cpt.3176](https://doi.org/10.1002/cpt.3176) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=erdafitinib).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate | DrugBank actor |
| distribution | blood | `ORM1` binder | DrugBank actor |
| metabolism | liver | `CYP2C9` substrate, `CYP3A4` inducer/inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `SLC22A2` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: CSF1R (substrate), FGFR1 (inhibitor), FGFR2 (inhibitor), FGFR3 (inhibitor), FGFR4 (inhibitor), KDR (substrate), KIT (substrate), PDGFRA (substrate), PDGFRB (substrate), RET (substrate).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Dosne_2020.pdf` | Dosne AG et al., Population Pharmacokinetics of Total an…, Journal of clinical pharmac… (2020) | popPK | 10 | [10.1002/jcph.1547](https://doi.org/10.1002/jcph.1547) | [31742712](https://pubmed.ncbi.nlm.nih.gov/31742712) | The human population-PK study reports numeric apparent clearance and terminal half-life values. |
| `Tosca_2022.pdf` | Tosca EM et al., A translational model-based approach to…, Cancer chemotherapy and pha… (2022) | popPK | 8 | [10.1007/s00280-021-04370-7](https://doi.org/10.1007/s00280-021-04370-7) | [34786600](https://pubmed.ncbi.nlm.nih.gov/34786600) | The paper models erdafitinib pharmacokinetics in animals, but no numeric disposition parameter values are present in the evidence. |
| `Li_2020.pdf` | Li LY et al., Effect of Plasma Protein Binding on the…, Journal of clinical pharmac… (2020) | popPK | 7 | [10.1002/jcph.1529](https://doi.org/10.1002/jcph.1529) | [31602692](https://pubmed.ncbi.nlm.nih.gov/31602692) | Human erdafitinib PK analysis reports quantitative binding estimates, but no numeric clearance or other disposition estimates are shown. |

<sub>queue written 2026-10-06T23:42:22.131227+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | De_2024 | irrelevant | 3 | 0 | It uses a literature PopPK-PD model for virtual patients but reports no erdafitinib disposition parameter values in the provided evidence. |
| popPK | Dosne_2022_2 | irrelevant | 2 | 1 | Human exposure–response analysis uses a previously developed PK-PD model but reports no erdafitinib disposition parameters; model details are cited and some results are in unprovided supplementary material. |
| popPK | Li_2020 | relevant | 7 | 2 | Human erdafitinib PK analysis reports quantitative binding estimates, but no numeric clearance or other disposition estimates are shown. |
| popPK | Tosca_2022 | relevant | 8 | 1 | The paper models erdafitinib pharmacokinetics in animals, but no numeric disposition parameter values are present in the evidence. |
| popPK | Zhu_2024 | irrelevant | 1 | 0 | This human drug-interaction study reports pharmacokinetics of midazolam and metformin, not erdafitinib disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 23:42 UTC</sub>
