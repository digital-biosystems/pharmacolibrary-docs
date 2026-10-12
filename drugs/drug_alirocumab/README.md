<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C10A&quot;,&quot;href&quot;:&quot;atc/C10A.md&quot;},{&quot;label&quot;:&quot;alirocumab&quot;}]"></div>

# alirocumab

- **generic name:** alirocumab
- **ATC codes:** `C10AX14`
- **DrugBank:** [DB09302](https://go.drugbank.com/drugs/DB09302) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Alirocumab is a monoclonal antibody used to treat dyslipidemias, including conditions such as hyperlipoproteinemia type V and arteriosclerosis. It is authorised in the European Union and is used as a lipid-modifying agent.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4726914](https://www.wikidata.org/wiki/Q4726914) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| alirocumab | parent | 218.053 | C3H9Na2O6P | PubChem | [88214187](https://pubchem.ncbi.nlm.nih.gov/compound/88214187) | Martinez_2019, Nolain_2022 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:04 | 18:02 | 1/1/2 | 2/0/0 | 0/0/0 | 290,340/55,312 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 0/6 | 6/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.667), gpt-oss:120b (not confirmed, agreement 0.538). The first reading is what the record holds.">cross-check: disputed 0/2</span> | [Lunven_2014_reference](drugs/drug_alirocumab/Alirocumab_Lunven2014_reference.md) | — | 1-compartment (no model) | 2 | Lunven C et al., A randomized study of the relative phar…, Cardiovascular therapeutics (2014) | [10.1111/1755-5922.12093](https://doi.org/10.1111/1755-5922.12093) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.071), gpt-oss:120b (not confirmed, agreement 0.074). The first reading is what the record holds.">cross-check: disputed 0/2</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q66 — no SI value to build from</sub><br><sub>blocking: C2_base_Q61 failed (ratio 0.0036)</sub><br><sub>route_to: `human_review`</sub> | [Martinez_2019_reference](drugs/drug_alirocumab/Alirocumab_Martinez2019_reference.md) | — | 1-compartment (no model) | 10 (+2 cov.) | Martinez JM et al., Population Pharmacokinetic Analysis of…, Clinical pharmacokinetics (2019) | [10.1007/s40262-018-0669-y](https://doi.org/10.1007/s40262-018-0669-y) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.438), gpt-oss:120b (not confirmed, agreement 0.412). The first reading is what the record holds.">cross-check: disputed 0/2</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q329 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Nolain_2022_reference](drugs/drug_alirocumab/Alirocumab_Nolain2022_reference.md) | — | general linear (no model) | 6 | Nolain P et al., Combined Semi-mechanistic Target-Mediat…, European journal of drug me… (2022) | [10.1007/s13318-022-00787-4](https://doi.org/10.1007/s13318-022-00787-4) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (confirmed, agreement 1.0), gpt-oss:120b (not confirmed, agreement 0.25). The first reading is what the record holds.">cross-check: disputed 1/2</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Kovalenko_2025_reference](drugs/drug_alirocumab/Alirocumab_Kovalenko2025_reference.md) | — | 1-compartment (no model) | 0 | Kovalenko P et al., Target-Mediated Modeling of Alirocumab…, Clinical pharmacology in dr… (2025) | [10.1002/cpdd.1523](https://doi.org/10.1002/cpdd.1523) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Nolain_2022_LDL_C](drugs/drug_alirocumab/pd_Nolain_2022_LDL_C.md) | low-density lipoprotein cholesterol ← PCSK9 · indirect response — drug inhibits the loss of low-density lipoprotein cholesterol | — | Nolain P et al., Combined Semi-mechanistic Target-Mediat…, European journal of drug me… (2022) | [10.1007/s13318-022-00787-4](https://doi.org/10.1007/s13318-022-00787-4) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.75). The first reading is what the record holds.">cross-check: disputed</span> | [Scherer_2017_LDLc](drugs/drug_alirocumab/pd_Scherer_2017_LDLc.md) | low-density lipoprotein cholesterol ← alirocumab · indirect response — drug inhibits the production of low-density lipoprotein cholesterol | — | Scherer N et al., Alternative Treatment Regimens With the…, Journal of clinical pharmac… (2017) | [10.1002/jcph.866](https://doi.org/10.1002/jcph.866) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=alirocumab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: PCSK9 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 14 matched, 14 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 4  ·  extracted 1  ·  needs_review 2  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Scherer_2017.pdf` | Scherer N et al., Alternative Treatment Regimens With the…, Journal of clinical pharmac… (2017) | popPK | 10 | [10.1002/jcph.866](https://doi.org/10.1002/jcph.866) | [28263403](https://pubmed.ncbi.nlm.nih.gov/28263403) | The paper describes a population PK/PD model for alirocumab, but the specific numeric parameter values are not present in the provided evidence text. |

<sub>queue written 2026-10-07T09:47:45.399793+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Djebli_2017 | relevant | 10 | 2 | The paper describes a population PK model for alirocumab, but the specific numeric parameter estimates (CL, V, Q, etc.) are not present in the provided text, likely residing in tables or supplementary material not included. |
| popPK | Nicolas_2019 | relevant | 8 | 2 | The paper reports a population PK/PD model for alirocumab, but the specific quantitative PK parameters (CL, V, etc.) are referenced as being in "Part I" or supplementary material, while the provided text only contains PD parameters (Kout, Emax, EC50). |
| popPK | Peng_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of a novel antibody SAL003, with alirocumab mentioned only as a background comparator. |
| popPK | Scherer_2017 | relevant | 10 | 0 | The paper describes a population PK/PD model for alirocumab, but the specific numeric parameter values are not present in the provided evidence text. |
| popPK | Schwagerle_2026 | irrelevant | 2 | 0 | The study uses alirocumab as a test case in a porcine model to validate a PBPK prediction method, but the evidence provided contains no quantitative PK parameter values (CL, V, etc.) for alirocumab. |
| popPK | Watts_2020 | irrelevant | 2 | 0 | The study reports kinetic parameters (FCR, PR) for the substrate lipoprotein(a)/apo(a), not for the drug alirocumab itself. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 09:48 UTC</sub>
