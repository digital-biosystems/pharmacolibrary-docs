<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V03A&quot;,&quot;href&quot;:&quot;atc/V03A.md&quot;},{&quot;label&quot;:&quot;methylthioninium chloride&quot;}]"></div>

# methylthioninium chloride

- **generic name:** methylthioninium chloride
- **ATC codes:** `V03AB17`, `V04CG05`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Methylthioninium chloride (methylene blue) is used as an antidote and as a diagnostic agent for testing gastric secretion. It is included on the WHO list of essential medicines, indicating broad availability, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q422134](https://www.wikidata.org/wiki/Q422134) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:07 | 3:08 | 0/0/0 | 0/0/0 | 0/0/0 | 43,497/1,895 | ollama / glm-5.3-flash | 4 | 1/2 | 4/0 | 0 |

## Coverage

- **PubMed hits:** 187 matched, 25 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Burrows_1984.pdf` | Burrows GE, Methylene blue: effects and disposition…, Journal of veterinary pharm… (1984) | popPK | 7 | [10.1111/j.1365-2885.1984.tb00904.x](https://doi.org/10.1111/j.1365-2885.1984.tb00904.x) | [6492250](https://pubmed.ncbi.nlm.nih.gov/6492250) | PK disposition parameters (elimination rate constant, half-life) for methylene blue are reported numerically in sheep, though no CL/V values are given. |
| `van_2026.pdf` | van Maanen E et al., Atypical population pharmacokinetics of…, British journal of clinical… (2026) | popPK | 7 | [10.1002/bcp.70539](https://doi.org/10.1002/bcp.70539) | [41917677](https://pubmed.ncbi.nlm.nih.gov/41917677) | Population PK (nonlinear mixed effects) of hydromethylthionine, the active moiety delivered by methylthioninium chloride, but no numeric parameter values (CL, V, etc.) are present in the evidence. |

<sub>queue written 2026-10-07T19:07:33.373383+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bateman_2016 | irrelevant | 0 | 0 | This is a conference abstract listing; the only methylene blue mention (P050) is a clinical effectiveness abstract with no PK parameters or numeric values. |
| popPK | Cairns_1989 | irrelevant | 0 | 0 | Methylene blue is only a pharmacological tool (EDRF inhibitor) in an in-vitro rabbit kidney study; no PK parameters for methylthioninium chloride. |
| popPK | Carter_1981 | irrelevant | 0 | 0 | Methylene blue is only used as a tissue-staining tracer; no PK parameters for methylthioninium chloride are reported. |
| popPK | Choi_2015 | irrelevant | 0 | 0 | A qualitative review of photodynamic therapy for psoriasis; methylene blue is only mentioned as a photosensitizer with no PK parameters. |
| popPK | Guerrero-Muñoz_2014 | irrelevant | 0 | 0 | A review of amyloid therapeutic approaches with no PK parameters for methylthioninium chloride or any numeric disposition data. |
| popPK | Kotani_2025 | irrelevant | 0 | 0 | This is a narrative review of septic shock haemodynamic management; methylene blue is only mentioned as a vasoactive agent with no PK parameters reported. |
| popPK | Kozaki_1981 | irrelevant | 0 | 0 | The evidence contains no usable text — only a GROBID header — so no PK parameters for methylthioninium chloride are present. |
| popPK | Kubes_1993 | irrelevant | 0 | 0 | Methylene blue is only used as a pharmacological tool (guanylate cyclase inhibitor) with no PK parameters reported. |
| popPK | Ledowski_2006 | irrelevant | 0 | 0 | Methylene blue is only used as a tracer dye to measure mucus transport; no PK parameters for methylthioninium chloride are reported. |
| popPK | Milani_1992 | irrelevant | 3 | 6 | Methylene blue is used as a diagnostic tracer for ascites dynamics, not as a subject drug PK study; some numeric values (volume, clearance) are present but describe peritoneal dilution, not systemic disposition. |
| popPK | Milani_1994 | irrelevant | 0 | 0 | Methylene blue is only a dilution tracer for measuring ascites volume; no PK parameters for methylthioninium chloride are reported. |
| popPK | Milani_1995 | irrelevant | 0 | 0 | Methylene blue is only a dilution tracer for measuring ascites volume; no PK parameters for methylthioninium chloride are reported. |
| popPK | Neef_1975 | irrelevant | 0 | 0 | Methylene blue is only a dye marker for infarct borders in dogs; no PK parameters for methylthioninium chloride are reported. |
| PGx | Souslova_2013 | not_relevant | 2 | 1 | General review of personalized psychiatry; no specific gene variant effect on methylthioninium chloride PK/PD reported. |
| popPK | Veerman_2023 | irrelevant | 0 | 0 | Methylene blue is only used as an antidote; the reported PK parameters (Vd 1.5 L/kg, half-life 10–50 h) belong to dapsone, not methylthioninium chloride. |
| popPK | Workum_2019 | irrelevant | 1 | 0 | Case report of nitrite overdose; methylthioninium chloride is only mentioned as treatment with no quantitative PK parameters reported. |
| popPK | Xia_2020 | irrelevant | 0 | 0 | This is an in vitro nanoparticle adsorption/release study of myricetin; methylthioninium chloride (methylene blue) is only mentioned as a cytotoxicity assay reagent, with no PK parameters. |
| popPK | el-Yazigi_1989 | irrelevant | 0 | 0 | Methylene blue is only an internal standard in an analytical assay for mitoxantrone; no PK parameters for methylthioninium chloride are reported. |
| popPK | van_2026 | relevant | 7 | 2 | Population PK (nonlinear mixed effects) of hydromethylthionine, the active moiety delivered by methylthioninium chloride, but no numeric parameter values (CL, V, etc.) are present in the evidence. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
