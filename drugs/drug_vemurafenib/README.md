<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;vemurafenib&quot;}]"></div>

# vemurafenib

- **generic name:** vemurafenib
- **ATC codes:** `L01EC01`
- **DrugBank:** [DB08881](https://go.drugbank.com/drugs/DB08881) · **PubChem:** [CID 42611257](https://pubchem.ncbi.nlm.nih.gov/compound/42611257)
- **molar mass:** 489.922 g/mol (C23H18ClF2N3O3S) — DrugBank
- **groups:** approved, investigational

## About

Vemurafenib is a BRAF inhibitor used to treat melanoma, including metastatic melanoma, and has also been used for skin cancer, hairy cell leukemia, and Erdheim-Chester disease. It is an approved medicine, authorised in the European Union for melanoma, and is also being investigated for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q423111](https://www.wikidata.org/wiki/Q423111) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:54 | 1:56 | 0/0/0 | 2/1/0 | 0/0/0 | 69,260/7,889 | openai / gpt-6-luna | 3 | 1/2 | 3/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.00).">in vitro</span> | [Basu_2017_cell_proliferation](drugs/drug_vemurafenib/pd_Basu_2017_cell_proliferation.md) | cell proliferation ← vemurafenib · inhibition effect | — | Basu R et al., Growth Hormone Receptor Knockdown Sensi…, Hormones & cancer (2017) | [10.1007/s12672-017-0292-7](https://doi.org/10.1007/s12672-017-0292-7) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Hu_2022_CC50](drugs/drug_vemurafenib/pd_Hu_2022_CC50.md) | cytotoxicity ← vemurafenib · stimulation effect | — | Hu B et al., Vemurafenib Inhibits Enterovirus A71 Ge…, Pharmaceuticals (Basel, Swi… (2022) | [10.3390/ph15091067](https://doi.org/10.3390/ph15091067) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Hu_2022_CPE](drugs/drug_vemurafenib/pd_Hu_2022_CPE.md) | cytopathic effect (CPE) inhibition ← vemurafenib · inhibition effect | — | Hu B et al., Vemurafenib Inhibits Enterovirus A71 Ge…, Pharmaceuticals (Basel, Swi… (2022) | [10.3390/ph15091067](https://doi.org/10.3390/ph15091067) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Fallahi-Sichani_2015_apoptosis](drugs/drug_vemurafenib/pd_Fallahi_Sichani_2015_apoptosis.md) | apoptosis ← vemurafenib · direct Emax (saturable) effect | — | Fallahi-Sichani M et al., Systematic analysis of BRAF(V600E) mela…, Molecular systems biology (2015) | [10.15252/msb.20145877](https://doi.org/10.15252/msb.20145877) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Fallahi-Sichani_2015_viability](drugs/drug_vemurafenib/pd_Fallahi_Sichani_2015_viability.md) | viability ← vemurafenib · direct Emax (saturable) effect | — | Fallahi-Sichani M et al., Systematic analysis of BRAF(V600E) mela…, Molecular systems biology (2015) | [10.15252/msb.20145877](https://doi.org/10.15252/msb.20145877) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=vemurafenib).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| distribution | blood | `ALB` substrate, `ORM1` substrate | DrugBank actor |
| distribution | blood-brain barrier | `ABCC1` inhibitor/substrate | DrugBank actor |
| distribution | lung | `ABCC1` inhibitor/substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | liver | `CYP1A2` inhibitor, `CYP2B6` inducer, `CYP2C8` inhibitor, `CYP2C9` inhibitor, `CYP2D6` inhibitor, `CYP3A4` inducer/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: BRAF (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Puszkiel_2016.pdf` | Puszkiel A et al., Plasma vemurafenib exposure and pre-tre…, Pharmacological research 11… (2016) | popPK | 10 | [10.1016/j.phrs.2016.06.032](https://doi.org/10.1016/j.phrs.2016.06.032) | [27378568](https://pubmed.ncbi.nlm.nih.gov/27378568) | The study uses a population-PK model for vemurafenib, but no numeric disposition parameter values are provided in the evidence. |
| `Wang_2020.pdf` | Wang H et al., Population Pharmacokinetics of Vemurafe…, Journal of clinical pharmac… (2020) | popPK | 10 | [10.1002/jcph.1617](https://doi.org/10.1002/jcph.1617) | [32476174](https://pubmed.ncbi.nlm.nih.gov/32476174) | A pediatric population-PK model is reported, but numeric disposition parameter values are not provided in the evidence. |

<sub>queue written 2026-10-07T08:53:52.937584+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Basu_2017 | irrelevant | 0 | 0 | This is an in-vitro melanoma drug-resistance study and reports no vemurafenib disposition parameters. |
| popPK | Fallahi-Sichani_2015 | irrelevant | 0 | 0 | This in-vitro signaling study reports no quantitative vemurafenib disposition parameters. |
| popPK | Han_2015 | irrelevant | 0 | 0 | The study models cobimetinib, and reports no quantitative vemurafenib PK parameters. |
| popPK | Hong_2015 | irrelevant | 0 | 0 | This is an in-vitro anticancer study and reports no vemurafenib pharmacokinetic parameters. |
| popPK | Hu_2022 | irrelevant | 0 | 0 | This is an in-vitro antiviral study and reports no quantitative vemurafenib disposition parameters. |
| popPK | Kim_2019 | irrelevant | 1 | 0 | This is a review and provides no numeric vemurafenib disposition parameters in the evidence. |
| popPK | Puszkiel_2016 | relevant | 10 | 0 | The study uses a population-PK model for vemurafenib, but no numeric disposition parameter values are provided in the evidence. |
| popPK | Wang_2020 | relevant | 10 | 1 | A pediatric population-PK model is reported, but numeric disposition parameter values are not provided in the evidence. |
| popPK | Zhang_2017 | irrelevant | 2 | 4 | This is a review that summarizes a population-PK half-life (~57 h) but provides no original quantitative model parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
