<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C08E&quot;,&quot;href&quot;:&quot;atc/C08E.md&quot;},{&quot;label&quot;:&quot;fendiline&quot;}]"></div>

# fendiline

- **generic name:** fendiline
- **ATC codes:** `C08EA01`
- **DrugBank:** [DB08980](https://go.drugbank.com/drugs/DB08980) · **PubChem:** [CID 3336](https://pubchem.ncbi.nlm.nih.gov/compound/3336)
- **molar mass:** 315.4513 g/mol (C23H25N) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

**Description.** Fendiline is a coronary vasodilator which inhibits calcium function in muscle cells in excitation-contraction coupling. It has been proposed as an antiarrhythmic and antianginal agent. Fendiline is non-selective.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-29 18:49 | 11:12 | 0/0/0 | 0/0/0 | 0/0/0 | 1,644/110 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=fendiline) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: HTR2B (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 37 matched, 35 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kukovetz_1982.pdf` | Kukovetz WR et al., Single dose pharmacokinetics of fendili…, European journal of drug me… (1982) | popPK | 9 | [10.1007/BF03188726](https://doi.org/10.1007/BF03188726) | [7117293](https://pubmed.ncbi.nlm.nih.gov/7117293) | The study reports quantitative PK parameters for fendiline, including terminal half-lives (20-35 h) and excretion percentages, but lacks specific values for clearance, volume of distribution, or absorption rate constants. |
| `Weyhenmeyer_1987.pdf` | Weyhenmeyer R et al., Tolerance and pharmacokinetics of oral…, Arzneimittel-Forschung (1987) | popPK | 8 | not captured | [3566858](https://pubmed.ncbi.nlm.nih.gov/3566858) | The paper reports PK parameters for fendiline, but only provides qualitative descriptions and ranges (Cmax, Cmin, tmax, t1/2) rather than specific compartmental model parameters like CL or V. |
| `Reimão_2016.pdf` | Reimão JQ et al., Investigation of Calcium Channel Blocke…, Evidence-based complementar… (2016) | pd | 4 | [10.1155/2016/1523691](https://doi.org/10.1155/2016/1523691) | [26941821](https://www.ncbi.nlm.nih.gov/pubmed/26941821) | metadata signals extractable PD data (IC50) |
| `Shridi_1988.pdf` | Shridi F et al., The influence of calcium channel blocke…, Pharmacological research co… (1988) | pd | 4 | [10.1016/s0031-6989(88)80603-9](https://doi.org/10.1016/s0031-6989(88)80603-9) | [2836871](https://www.ncbi.nlm.nih.gov/pubmed/2836871) | metadata signals extractable PD data (IC50) |
| `Tripathi_1993.pdf` | Tripathi O et al., Fendiline inhibits L-type calcium chann…, British journal of pharmaco… (1993) | pd | 4 | [10.1111/j.1476-5381.1993.tb13479.x](https://doi.org/10.1111/j.1476-5381.1993.tb13479.x) | [8485628](https://www.ncbi.nlm.nih.gov/pubmed/8485628) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-29T18:49:10.253269+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Baker_1983 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of calcium channel blockers in isolated rat hearts, reporting dose-response curves for protein leakage rather than pharmacokinetic parameters for fendiline. |
| popPK | Baunack_1991 | irrelevant | 0 | 0 | The paper is a review of pharmacodynamic effects on esophageal motility and does not report quantitative pharmacokinetic parameters for fendiline. |
| PD | Baunack_1991 | not_relevant | 2 | 0 | The text is a review summary that qualitatively mentions a correlation between nifedipine plasma concentration and esophageal motility but provides no numeric PD parameters, curves, or specific data for fendiline. |
| popPK | Bayer_1987 | irrelevant | 1 | 0 | The paper is a review that mentions pharmacokinetics qualitatively (slow onset, long half-life) but provides no quantitative disposition parameters or numeric values. |
| PD | Bayer_1987 | not_relevant | 1 | 0 | The text is a qualitative review of pharmacological properties and clinical efficacy without reporting specific numeric PD parameters or concentration-effect curves. |
| popPK | Chen_2005 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology experiment assessing receptor modulation, not a pharmacokinetic study, and reports no disposition parameters for fendiline. |
| popPK | Cheng_2001 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of calcium signaling in hepatoma cells and does not report any pharmacokinetic parameters for fendiline. |
| popPK | Cheng_2001_2 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of intracellular calcium mobilization and does not report any pharmacokinetic parameters. |
| popPK | Förstermann_1990 | irrelevant | 0 | 0 | The paper is a mechanistic in-vitro study using fendiline as a calmodulin antagonist, not a pharmacokinetic study of fendiline. |
| PD | Förstermann_1990 | not_relevant | 3 | 3 | The paper reports a single IC50 value (80 microM) for fendiline in an in vitro cell assay, which is a static potency metric rather than a pharmacodynamic exposure-response or dose-response relationship with a defined effect curve or model parameters. |
| popPK | Kerr_2002 | irrelevant | 0 | 0 | The paper is an in-vitro electrophysiology study on GABA(B) receptor modulation and does not report any pharmacokinetic parameters for fendiline. |
| popPK | Kukovetz_1982 | relevant | 9 | 4 | The study reports quantitative PK parameters for fendiline, including terminal half-lives (20-35 h) and excretion percentages, but lacks specific values for clearance, volume of distribution, or absorption rate constants. |
| popPK | Lin_1995 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on phosphoinositide breakdown in glioma cells and does not report pharmacokinetic parameters for fendiline. |
| popPK | Lin_2002 | irrelevant | 0 | 0 | The study is a mechanistic investigation of intracellular calcium signaling in corneal cells and does not report any pharmacokinetic parameters for fendiline. |
| popPK | Liu_2024 | irrelevant | 0 | 0 | The paper is a computational study on Ebola virus assembly and does not report any pharmacokinetic parameters for fendiline. |
| PD | Liu_2024 | not_relevant | 2 | 1 | The paper is a computational modeling study of viral protein assembly that qualitatively discusses the effect of fendiline concentration on VLP production but does not report a pharmacodynamic model or extractable numeric PD parameters (e.g., Emax, EC50) for the drug. |
| popPK | Lo_2001 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on calcium signaling in smooth muscle cells and does not report any pharmacokinetic parameters for fendiline. |
| popPK | Ong_2005 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological and mechanistic investigation of a fendiline analog's receptor potency, reporting no pharmacokinetic parameters. |
| popPK | Reimão_2016 | irrelevant | 0 | 0 | no_text gate: only 134 chars of text extracted (&lt; 400) |
| PD | Reimão_2016 | not_relevant | 0 | 0 | The paper investigates calcium channel blockers and their interference with Leishmania metabolism, with no mention of fendiline or any pharmacodynamic/exposure-response analysis. |
| popPK | Schreibmayer_1992 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of calcium channel kinetics, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Shridi_1988 | irrelevant | 0 | 0 | no_text gate: only 62 chars of text extracted (&lt; 400) |
| PD | Shridi_1988 | not_relevant | 0 | 0 | The paper discusses calcium channel blockers and superoxide anions, with no mention of fendiline or any pharmacodynamic modeling. |
| popPK | Soulère_2010 | irrelevant | 0 | 0 | The paper is a mechanistic study on quorum sensing inhibition and does not report any pharmacokinetic parameters for fendiline. |
| PD | Soulère_2010 | not_relevant | 1 | 0 | The paper identifies fendiline as a hit compound via virtual screening but does not report any numeric PD parameters (e.g., IC50, Emax) or concentration-effect data for it, only providing an IC50 for a different compound (calmidazolium). |
| popPK | Spedding_1982 | irrelevant | 0 | 0 | The paper is a pharmacodynamic study assessing calcium antagonist effects in smooth muscle and does not report any pharmacokinetic parameters for fendiline. |
| popPK | Tripathi_1993 | irrelevant | 0 | 0 | no_text gate: only 109 chars of text extracted (&lt; 400) |
| popPK | Werner_1991 | irrelevant | 0 | 0 | The study is a mechanistic pharmacological investigation of calcium channel ligands on isolated tissues, not a pharmacokinetic study, and reports no disposition parameters for fendiline. |
| PD | Werner_1991 | not_relevant | 4 | 3 | The paper reports concentration-response curves and EC50 values for calcium channel ligands, but explicitly states that neuraminidase had no effect on fendiline's potency, implying no specific numeric PD parameters or unique exposure-response relationship for fendiline are provided or derivable beyond a lack of change. |
| popPK | Weyhenmeyer_1987 | relevant | 8 | 4 | The paper reports PK parameters for fendiline, but only provides qualitative descriptions and ranges (Cmax, Cmin, tmax, t1/2) rather than specific compartmental model parameters like CL or V. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
