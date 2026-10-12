<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;niraparib&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Niraparib_Gaffney2026_reference&quot;,&quot;label&quot;:&quot;Gaffney_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_niraparib/Niraparib_Gaffney2026_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Niraparib_Quesada2025_reference&quot;,&quot;label&quot;:&quot;Quesada_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_niraparib/Niraparib_Quesada2025_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# niraparib

- **generic name:** niraparib
- **ATC codes:** `L01XK02`, `L01XK52`
- **DrugBank:** [DB11793](https://go.drugbank.com/drugs/DB11793) · **PubChem:** [CID 24958200](https://pubchem.ncbi.nlm.nih.gov/compound/24958200)
- **molar mass:** 320.396 g/mol (C19H20N4O) — DrugBank
- **groups:** approved, investigational

## About

Niraparib is a PARP inhibitor anticancer medicine used to treat ovarian, fallopian tube, and peritoneal cancers. It is authorised in the European Union and is an approved drug, used in cancer care.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q25326660](https://www.wikidata.org/wiki/Q25326660) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| niraparib | parent | 320.396 | C19H20N4O | DrugBank | [24958200](https://pubchem.ncbi.nlm.nih.gov/compound/24958200) | Gaffney_2026 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 21:11 | 1:54 | 2/2/0 | 0/0/1 | 0/0/0 | 162,627/11,182 | einfracz / qwen3.8-27b | 5 | 2/3 | 4/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.552). Primary extraction retained.">cross-check: disputed</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub> | [Gaffney_2026_reference](drugs/drug_niraparib/Niraparib_Gaffney2026_reference.md) | ▶ model + simulator | 1-compartment, oral | 7 (+6 cov.) | Gaffney A et al., Population Pharmacokinetic Modeling of…, Journal of clinical pharmac… (2026) | [10.1002/jcph.70210](https://doi.org/10.1002/jcph.70210) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.889). Primary extraction retained.">cross-check: partial</span> | [Quesada_2025_reference](drugs/drug_niraparib/Niraparib_Quesada2025_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Quesada S et al., Exposure-response relationship of nirap…, ESMO open (2025) | [10.1016/j.esmoop.2025.105054](https://doi.org/10.1016/j.esmoop.2025.105054) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Chryssafidis_2022_reference](drugs/drug_niraparib/Niraparib_Chryssafidis2022_reference.md) | — | 1-compartment (no model) | 0 | Chryssafidis P et al., Re-writing Oral Pharmacokinetics Using…, Pharmaceutical research (2022) | [10.1007/s11095-022-03230-0](https://doi.org/10.1007/s11095-022-03230-0) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Monk_2024_reference](drugs/drug_niraparib/Niraparib_Monk2024_reference.md) | — | 1-compartment (no model) | 0 | Monk BJ et al., Niraparib Population Pharmacokinetics a…, Clinical therapeutics (2024) | [10.1016/j.clinthera.2024.06.001](https://doi.org/10.1016/j.clinthera.2024.06.001) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed</span> | [Monk_2024_PFS](drugs/drug_niraparib/pd_Monk_2024_PFS.md) | progression-free survival ← niraparib · time-to-event model | — | Monk BJ et al., Niraparib Population Pharmacokinetics a…, Clinical therapeutics (2024) | [10.1016/j.clinthera.2024.06.001](https://doi.org/10.1016/j.clinthera.2024.06.001) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.375). Primary extraction retained.">cross-check: disputed</span> | [Monk_2024_grade_3_thrombocytopenia](drugs/drug_niraparib/pd_Monk_2024_grade_3_thrombocytopenia.md) | grade ≥ 3 thrombocytopenia ← niraparib · categorical (graded) response model | — | Monk BJ et al., Niraparib Population Pharmacokinetics a…, Clinical therapeutics (2024) | [10.1016/j.clinthera.2024.06.001](https://doi.org/10.1016/j.clinthera.2024.06.001) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 4  ·  extracted 2  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Russu_2025.pdf` | Russu A et al., Population Pharmacokinetics of Nirapari…, Advances in therapy (2025) | popPK | 9 | [10.1007/s12325-025-03104-y](https://doi.org/10.1007/s12325-025-03104-y) | [40016438](https://pubmed.ncbi.nlm.nih.gov/40016438) | The paper describes a population PK model for niraparib in humans, but specific numeric parameter values (CL, V, etc.) are not provided in the text. |
| `Zhang_2020.pdf` | Zhang J et al., Phase I Pharmacokinetic Study of Nirapa…, The oncologist (2020) | popPK | 9 | [10.1634/theoncologist.2019-0565](https://doi.org/10.1634/theoncologist.2019-0565) | [31439812](https://pubmed.ncbi.nlm.nih.gov/31439812) | The study is a Phase I PK study reporting qualitative PK characteristics and a population PK analysis, but specific numeric values for clearance, volume, or inter-individual variability are not present in the provided text. |

<sub>queue written 2026-10-06T21:09:48.013725+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Lewandowski_2026 | irrelevant | 2 | 2 | The study is a clinical pilot investigating glycemic adverse effects, and while it cites standard literature values for Vd and half-life in the introduction, it does not report original pharmacokinetic parameters or models. |
| popPK | Russu_2025 | relevant | 9 | 2 | The paper describes a population PK model for niraparib in humans, but specific numeric parameter values (CL, V, etc.) are not provided in the text. |
| popPK | Zhang_2020 | relevant | 9 | 3 | The study is a Phase I PK study reporting qualitative PK characteristics and a population PK analysis, but specific numeric values for clearance, volume, or inter-individual variability are not present in the provided text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 21:10 UTC</sub>
