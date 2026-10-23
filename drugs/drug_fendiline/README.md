<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C08E&quot;,&quot;href&quot;:&quot;atc/C08E.md&quot;},{&quot;label&quot;:&quot;fendiline&quot;}]"></div>

# fendiline

- **generic name:** fendiline
- **ATC codes:** `C08EA01`
- **DrugBank:** [DB08980](https://go.drugbank.com/drugs/DB08980) · **PubChem:** [CID 3336](https://pubchem.ncbi.nlm.nih.gov/compound/3336)
- **molar mass:** 315.4513 g/mol (C23H25N) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Fendiline is a non-selective calcium channel blocker of the phenylalkylamine type, once used for cardiovascular conditions such as angina and high blood pressure. It is no longer in use, having been withdrawn from the market.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q999767](https://www.wikidata.org/wiki/Q999767) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Cheng_2001_Ca2_i](drugs/drug_fendiline/pd_Cheng_2001_Ca2_i.md) | intracellular free Ca2+ levels ← fendiline · direct Emax (saturable) effect | — | Cheng JS et al., Effects of the antianginal drug fendili…, Human & experimental toxico… (2001) | [10.1191/096032701680350523](https://doi.org/10.1191/096032701680350523) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Cheng_2001_2_Ca2_i](drugs/drug_fendiline/pd_Cheng_2001_2_Ca2_i.md) | intracellular free Ca2+ levels ← fendiline · direct Emax (saturable) effect | — | Cheng JS et al., Fendiline mobilizes intracellular Ca2+…, Clinical and experimental p… (2001) | [10.1046/j.1440-1681.2001.03510.x](https://doi.org/10.1046/j.1440-1681.2001.03510.x) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Lin_2002_Ca_2_i](drugs/drug_fendiline/pd_Lin_2002_Ca_2_i.md) | intracellular free Ca(2+) levels ← fendiline · direct Emax (saturable) effect | — | Lin MC et al., The anti-anginal drug fendiline elevate…, Life sciences (2002) | [10.1016/s0024-3205(02)01797-6](https://doi.org/10.1016/s0024-3205(02)01797-6) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=fendiline).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: HTR2B (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 05:00 | 1:57 | 0/0/0 | 0/3/0 | 0/0/0 | 41,026/2,224 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 37 matched, 35 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kukovetz_1982.pdf` | Kukovetz WR et al., Single dose pharmacokinetics of fendili…, European journal of drug me… (1982) | popPK | 9 | [10.1007/BF03188726](https://doi.org/10.1007/BF03188726) | [7117293](https://pubmed.ncbi.nlm.nih.gov/7117293) | The study reports quantitative PK parameters (half-life, excretion percentages) for fendiline in humans, but specific values for clearance (CL) and volume (V) are not explicitly listed in the provided text. |
| `Weyhenmeyer_1987.pdf` | Weyhenmeyer R et al., Tolerance and pharmacokinetics of oral…, Arzneimittel-Forschung (1987) | popPK | 8 |  | [3566858](https://pubmed.ncbi.nlm.nih.gov/3566858) | The study reports qualitative PK findings (half-life ~20h, Tmax ~4h) and concentration ranges, but lacks specific quantitative parameters like clearance (CL) or volume of distribution (V) values. |
| `Shridi_1988.pdf` | Shridi F et al., The influence of calcium channel blocke…, Pharmacological research co… (1988) | pd | 4 | [10.1016/s0031-6989(88)80603-9](https://doi.org/10.1016/s0031-6989(88)80603-9) | [2836871](https://www.ncbi.nlm.nih.gov/pubmed/2836871) | metadata signals extractable PD data (IC50) |
| `Tripathi_1993.pdf` | Tripathi O et al., Fendiline inhibits L-type calcium chann…, British journal of pharmaco… (1993) | pd | 4 | [10.1111/j.1476-5381.1993.tb13479.x](https://doi.org/10.1111/j.1476-5381.1993.tb13479.x) | [8485628](https://www.ncbi.nlm.nih.gov/pubmed/8485628) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-07 04:59 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Baker_1983 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of calcium channel blockers on isolated rat hearts, reporting dose-response curves for protein leakage rather than pharmacokinetic parameters. |
| popPK | Baunack_1991 | irrelevant | 0 | 0 | The paper is a review of pharmacodynamic effects on esophageal motility and does not report quantitative pharmacokinetic parameters for fendiline. |
| PD | Baunack_1991 | not_relevant | 2 | 0 | The text is a review summary that qualitatively mentions a correlation between nifedipine plasma concentration and esophageal motility but provides no numeric PD parameters, curves, or specific data for fendiline. |
| popPK | Bayer_1987 | irrelevant | 1 | 0 | The paper is a review that qualitatively describes pharmacokinetics (slow onset, long half-life) but provides no quantitative disposition parameters (CL, V, ka) or compartmental model values. |
| PD | Bayer_1987 | not_relevant | 1 | 0 | The text is a qualitative review of pharmacological properties and clinical efficacy without reporting specific numeric PD parameters or concentration-effect curves. |
| popPK | Chen_2005 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology experiment assessing receptor modulation, not a pharmacokinetic study, and reports no disposition parameters for fendiline. |
| popPK | Cheng_2001 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of calcium signaling in hepatoma cells and does not report pharmacokinetic parameters. |
| popPK | Cheng_2001_2 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of intracellular calcium mobilization in Chang liver cells, not a pharmacokinetic study. |
| popPK | Förstermann_1990 | irrelevant | 0 | 0 | The paper is a mechanistic in-vitro study using fendiline as a calmodulin antagonist, not a pharmacokinetic study of fendiline. |
| PD | Förstermann_1990 | not_relevant | 3 | 3 | The paper reports a single IC50 value (80 microM) for fendiline in an in vitro cell assay, which is a static potency metric rather than a pharmacodynamic exposure-response or dose-response relationship with a defined effect curve or model parameters. |
| popPK | Kerr_2002 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of GABA(B) receptor modulation and does not report any pharmacokinetic parameters for fendiline. |
| popPK | Kukovetz_1982 | relevant | 9 | 3 | The study reports quantitative PK parameters (half-life, excretion percentages) for fendiline in humans, but specific values for clearance (CL) and volume (V) are not explicitly listed in the provided text. |
| popPK | Lin_1995 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of calmodulin antagonists on phosphoinositide breakdown in C6 glioma cells, not a pharmacokinetic study of fendiline. |
| popPK | Lin_2002 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of intracellular calcium signaling in rabbit corneal cells and does not report any pharmacokinetic parameters. |
| popPK | Liu_2024 | irrelevant | 0 | 0 | The paper is a computational study of Ebola virus protein assembly and does not report any pharmacokinetic parameters for fendiline. |
| PD | Liu_2024 | not_relevant | 2 | 1 | The paper is a computational modeling study of viral protein assembly that qualitatively discusses the effect of fendiline concentration on VLP production but does not report a pharmacodynamic model or extractable numeric PD parameters (e.g., Emax, EC50) for the drug. |
| popPK | Lo_2001 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of calcium signaling in smooth muscle cells, not a pharmacokinetic study. |
| popPK | Ong_2005 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological and radioligand release assay in rat brain slices, reporting pharmacodynamic potency (EC50) rather than pharmacokinetic disposition parameters. |
| popPK | Reimão_2016 | irrelevant | 0 | 0 | no_text gate: only 134 chars of text extracted (&lt; 400) |
| PD | Reimão_2016 | not_relevant | 0 | 0 | The paper investigates calcium channel blockers and their interference with Leishmania metabolism, with no mention of fendiline or any pharmacodynamic/exposure-response analysis. |
| popPK | Schreibmayer_1992 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of calcium channel kinetics, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Shridi_1988 | irrelevant | 0 | 0 | no_text gate: only 62 chars of text extracted (&lt; 400) |
| PD | Shridi_1988 | not_relevant | 0 | 0 | The paper discusses calcium channel blockers and superoxide anions, with no mention of fendiline or any pharmacodynamic modeling. |
| popPK | Soulère_2010 | irrelevant | 0 | 0 | The paper is a mechanistic study on quorum sensing inhibition and does not report any pharmacokinetic parameters for fendiline. |
| PD | Soulère_2010 | not_relevant | 1 | 0 | The paper identifies fendiline as a hit compound via virtual screening but does not report any numeric PD parameters (e.g., IC50, Emax) or concentration-effect data for it, only providing an IC50 for a different compound (calmidazolium). |
| popPK | Spedding_1982 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological assessment of calcium antagonist effects in guinea-pig smooth muscle and does not report pharmacokinetic parameters for fendiline. |
| popPK | Tripathi_1993 | irrelevant | 0 | 0 | no_text gate: only 109 chars of text extracted (&lt; 400) |
| popPK | Werner_1991 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of calcium channel ligands on isolated tissues, not a pharmacokinetic study, and reports no disposition parameters for fendiline. |
| PD | Werner_1991 | not_relevant | 4 | 3 | The paper reports concentration-response curves and EC50 values for calcium channel ligands, but explicitly states that neuraminidase had no effect on fendiline's potency, implying no specific numeric PD parameters or unique exposure-response relationship for fendiline are provided or derivable beyond a lack of change. |
| popPK | Weyhenmeyer_1987 | relevant | 8 | 3 | The study reports qualitative PK findings (half-life ~20h, Tmax ~4h) and concentration ranges, but lacks specific quantitative parameters like clearance (CL) or volume of distribution (V) values. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfendiline%5D&body=Drug%3A%20fendiline%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_fendiline/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
