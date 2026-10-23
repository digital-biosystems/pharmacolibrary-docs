<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01B&quot;,&quot;href&quot;:&quot;atc/C01B.md&quot;},{&quot;label&quot;:&quot;lorcainide&quot;}]"></div>

# lorcainide

- **generic name:** lorcainide
- **ATC codes:** `C01BC07`
- **DrugBank:** [DB13653](https://go.drugbank.com/drugs/DB13653) · **PubChem:** not captured
- **molar mass:** 370.916 g/mol (C22H27ClN2O) — DrugBank
- **groups:** experimental

## About

Lorcainide is a class Ic antiarrhythmic agent developed for treating heart rhythm disorders. It is no longer in routine clinical use and is regarded as an experimental drug.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q6678811](https://www.wikidata.org/wiki/Q6678811) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| lorcainide | parent | 370.916 | C22H27ClN2O | DrugBank | — | Kates_1983, Klotz_1980 |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 60.9 ‡ | L/h | 14.5 mL/min/kg | patients with ventricular arrhythmias | &gt;=14 | human | <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> | [Kates_1983_reference](drugs/drug_lorcainide/Lorcainide_Kates1983_reference.md) |
| CL | CL | 510.3 ‡ | L/h | 121.5 ml/min/kg | rats |  | rat | <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> | [Klotz_1980_reference](drugs/drug_lorcainide/Lorcainide_Klotz1980_reference.md) |
| V | V | — | L | 5.51 1/kg | patients with ventricular arrhythmias | &gt;=14 | human | <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> | [Kates_1983_reference](drugs/drug_lorcainide/Lorcainide_Kates1983_reference.md) |
| t½ | t1/2z | 0.48 | h | 0.48 h | rats |  | rat | <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> | [Klotz_1980_reference](drugs/drug_lorcainide/Lorcainide_Klotz1980_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. ‡ given per kg in the paper; shown for a 70 kg adult. — the reported unit did not convert; the value is listed as reported. Rejected records are left out.</sub>

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="CL across studies"><text x="190" y="14" font-size="12" font-weight="600">CL (L/h, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">10</text><line x1="365.0" y1="18" x2="365.0" y2="58" stroke="#ddd"/><text x="365.0" y="72" font-size="10" text-anchor="middle">100</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">1000</text><text x="184" y="34.0" font-size="11" text-anchor="end">Kates_1983 · CL ·/kg</text><circle cx="327.3" cy="30.0" r="4" fill="#ef6c00"><title>Kates_1983 · CL ·/kg: 60.9 L/h</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Klotz_1980 · CL ·/kg</text><circle cx="488.9" cy="46.0" r="4" fill="#ef6c00"><title>Klotz_1980 · CL ·/kg: 510.3 L/h</title></circle></svg></div>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Needs review</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q61 — no SI value to build from</sub> | [Kates_1983_reference](drugs/drug_lorcainide/Lorcainide_Kates1983_reference.md) | — | 1-compartment (no model) | 2 | Kates RE et al., Lorcainide disposition kinetics in arrh…, Clinical pharmacology and t… (1983) | [10.1038/clpt.1983.4](https://doi.org/10.1038/clpt.1983.4) |
| <span class="pk-rf" hidden data-species="rat" data-age="unknown" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span><br><sub>stale — current check: Needs review</sub><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub> | [Klotz_1980_reference](drugs/drug_lorcainide/Lorcainide_Klotz1980_reference.md) | — | 1-compartment (no model) | 2 | Klotz U et al., The pharmacokinetics and tissue distrib…, Arzneimittel-Forschung (1980) | — |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span> | [Li_2021_Kv](drugs/drug_lorcainide/pd_Li_2021_Kv.md) | Kv current ← lorcainide · direct sigmoid Emax (Hill) effect | — | Li H et al., Inhibition of voltage-dependent K, European journal of pharmac… (2021) | [10.1016/j.ejphar.2021.174158](https://doi.org/10.1016/j.ejphar.2021.174158) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Sakuta_1993_KRN2391_induced_K_current](drugs/drug_lorcainide/pd_Sakuta_1993_KRN2391_induced_K_current.md) | KRN2391-induced K+ current ← lorcainide · direct Emax (saturable) effect | — | Sakuta H et al., Antiarrhythmic drugs, clofilium and cib…, British journal of pharmaco… (1993) | [10.1111/j.1476-5381.1993.tb13655.x](https://doi.org/10.1111/j.1476-5381.1993.tb13655.x) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Sakuta_1993_Y_26763_induced_K_current](drugs/drug_lorcainide/pd_Sakuta_1993_Y_26763_induced_K_current.md) | Y-26763-induced K+ current ← lorcainide · direct Emax (saturable) effect | — | Sakuta H et al., Antiarrhythmic drugs, clofilium and cib…, British journal of pharmaco… (1993) | [10.1111/j.1476-5381.1993.tb13655.x](https://doi.org/10.1111/j.1476-5381.1993.tb13655.x) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-08 19:51 | 3:42 | 0/0/2 | 2/0/0 | 0/0/0 | 21,057/11,635 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 2/0 | 1/1 | 0 |

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 2  ·  extracted 0  ·  needs_review 2  ·  rejected 0  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Klotz_1979.pdf` | Klotz U et al., Disposition and antiarrhythmic effect o…, International journal of cl… (1979) | popPK | 10 | not captured | [376458](https://pubmed.ncbi.nlm.nih.gov/376458) | The study reports quantitative pharmacokinetic parameters (clearance, half-life) for lorcainide in humans, with specific numeric values provided in the text. |
| `Klotz_1980.pdf` | Klotz U et al., The pharmacokinetics and tissue distrib…, Arzneimittel-Forschung (1980) | popPK | 10 | not captured | [7190402](https://pubmed.ncbi.nlm.nih.gov/7190402) | The study reports quantitative PK parameters (half-lives, clearance) for lorcainide in rats, with values explicitly stated in the abstract. |

<sub>queue written 2026-10-08T19:48:11.983209+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Li_2021 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of lorcainide's effect on Kv channels, reporting no pharmacokinetic parameters. |
| popPK | Sakuta_1993 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of K+ channel blockade in Xenopus oocytes, not a pharmacokinetic study, and lorcainide is only one of several drugs tested for its mechanism of action. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-08 19:48 UTC</sub>
