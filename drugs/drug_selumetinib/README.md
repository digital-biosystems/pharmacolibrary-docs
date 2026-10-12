<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;selumetinib&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Selumetinib_Patel2018_reference&quot;,&quot;label&quot;:&quot;Patel_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_selumetinib/Selumetinib_Patel2018_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Selumetinib_Tong2019_reference&quot;,&quot;label&quot;:&quot;Tong_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_selumetinib/Selumetinib_Tong2019_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# selumetinib

- **generic name:** selumetinib
- **ATC codes:** `L01EE04`
- **DrugBank:** [DB11689](https://go.drugbank.com/drugs/DB11689) · **PubChem:** [CID 10127622](https://pubchem.ncbi.nlm.nih.gov/compound/10127622)
- **molar mass:** 457.68 g/mol (C17H15BrClFN4O3) — DrugBank
- **groups:** approved, investigational

## About

Selumetinib is a MEK inhibitor anticancer drug used to treat neurofibromatosis 1 and has been studied for low-grade serous carcinoma. It is authorised in the European Union for neurofibromatosis 1 and is also under investigation for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7448840](https://www.wikidata.org/wiki/Q7448840) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| selumetinib | parent | 457.68 | C17H15BrClFN4O3 | DrugBank | [10127622](https://pubchem.ncbi.nlm.nih.gov/compound/10127622) | Köllő_2026, Patel_2017, Patel_2018, Tong_2019 |
| N-desmethyl-selumetinib (N-desmethyl selumetinib) | metabolite | 443.657 | C16H13BrClFN4O3 | PubChem | [10238358](https://pubchem.ncbi.nlm.nih.gov/compound/10238358) | Patel_2017, Patel_2018, Tong_2019 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 06:54 | 5:29 | 0/4/0 | 0/0/0 | 0/0/0 | 105,185/25,310 | openai / gpt-6-luna | 4 | 1/3 | 3/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.8). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Köllő_2026_reference](drugs/drug_selumetinib/Selumetinib_Kll2026_reference.md) | — | 1-compartment (no model) | 0 | Köllő Z et al., A Nonparametric Population Pharmacokine…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70156](https://doi.org/10.1002/psp4.70156) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.138). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Patel_2017_reference](drugs/drug_selumetinib/Selumetinib_Patel2017_reference.md) | — | parent + metabolite (no model) | 12 | Patel YT et al., Population Pharmacokinetics of Selumeti…, CPT: pharmacometrics & syst… (2017) | [10.1002/psp4.12175](https://doi.org/10.1002/psp4.12175) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.833). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: T3_output_variable</sub><br><sub>blocking: T3_topology_template</sub><br><sub>route_to: `engineer`</sub> | [Patel_2018_reference](drugs/drug_selumetinib/Selumetinib_Patel2018_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Patel P et al., Population pharmacokinetics of the MEK…, British journal of clinical… (2018) | [10.1111/bcp.13404](https://doi.org/10.1111/bcp.13404) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by qwen3.8-27b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: T3_output_variable</sub><br><sub>blocking: T3_topology_template</sub><br><sub>route_to: `engineer`</sub> | [Tong_2019_reference](drugs/drug_selumetinib/Selumetinib_Tong2019_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Tong X et al., Population Pharmacokinetic and Exposure…, Journal of clinical pharmac… (2019) | [10.1002/jcph.1295](https://doi.org/10.1002/jcph.1295) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=selumetinib).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| distribution | blood | `ALB` carrier, `ORM1` carrier | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2C19` substrate, `CYP2C8` substrate, `CYP2C9` substrate, `CYP2E1` substrate, `CYP3A4` substrate, `CYP3A5` substrate, `UGT1A1` substrate, `UGT1A3` unknown | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` substrate, `UGT1A1` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: MAP2K1 (inhibitor), MAP2K2 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 4  ·  extracted 0  ·  needs_review 0  ·  rejected 4  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Patel_2018.pdf` | Patel P et al., Population pharmacokinetics of the MEK…, British journal of clinical… (2018) | popPK | 10 | [10.1111/bcp.13404](https://doi.org/10.1111/bcp.13404) | [28833380](https://pubmed.ncbi.nlm.nih.gov/28833380) | The human population-PK model reports numeric selumetinib clearance and central volume estimates. |
| `Tong_2019.pdf` | Tong X et al., Population Pharmacokinetic and Exposure…, Journal of clinical pharmac… (2019) | popPK | 10 | [10.1002/jcph.1295](https://doi.org/10.1002/jcph.1295) | [30102413](https://pubmed.ncbi.nlm.nih.gov/30102413) | Human population-PK model reports numeric selumetinib clearance and central volume in the evidence. |
| `Zuo_2024.pdf` | Zuo P et al., A Population Pharmacokinetic Assessment…, Clinical pharmacology in dr… (2024) | popPK | 10 | [10.1002/cpdd.1400](https://doi.org/10.1002/cpdd.1400) | [38591154](https://pubmed.ncbi.nlm.nih.gov/38591154) | The human population-PK models are described, but numeric disposition parameter values are not provided. |

<sub>queue written 2026-10-07T06:49:13.778770+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Campagne_2021 | irrelevant | 2 | 1 | This review gives an approximate half-life but no original quantitative disposition or population-PK parameter values. |
| popPK | Schalkwijk_2021 | relevant | 8 | 0 | The evidence suggests a compartmental model for selumetinib’s metabolite, but includes no readable numeric parameter values. |
| popPK | Zhou_2016 | irrelevant | 0 | 0 | This is an exposure–QTc analysis and reports no quantitative selumetinib disposition parameters. |
| popPK | Zuo_2024 | relevant | 10 | 2 | The human population-PK models are described, but numeric disposition parameter values are not provided. |
| popPK | unknown_2017 | relevant | 9 | 0 | This is a corrigendum to a human population-PK study, but no numeric parameter values are present in the provided evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 06:50 UTC</sub>
