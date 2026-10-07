<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;zimeldine&quot;}]"></div>

# zimeldine

- **generic name:** zimeldine
- **ATC codes:** `N06AB02`
- **DrugBank:** [DB04832](https://go.drugbank.com/drugs/DB04832) · **PubChem:** not captured
- **groups:** approved, withdrawn

## About

Zimeldine was an antidepressant of the selective serotonin reuptake inhibitor class, used to treat depression. It was later withdrawn from the market after being linked to serious neurological adverse reactions, so it is no longer used.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q203483](https://www.wikidata.org/wiki/Q203483) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:22 | 0:30 | 0/0/0 | 0/0/0 | 0/0/0 | 15,762/1,058 | ollama / glm-5.3-flash | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=zimeldine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor | DrugBank actor |
| metabolism | brain | `MAOA` inhibitor, `MAOB` inhibitor | DrugBank actor |
| metabolism | liver | `CYP3A4` inhibitor, `MAOA` inhibitor | DrugBank actor |
| metabolism | platelet | `MAOB` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor, `MAOA` inhibitor | DrugBank actor |
| — | brain | `SLC6A4` inhibitor | DrugBank actor |
| — | platelet | `SLC6A4` inhibitor | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 25 matched, 25 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ferry_1985.pdf` | Ferry N et al., Influence of renal failure on the kinet…, European journal of clinica… (1985) | popPK | 8 | [10.1007/BF00544366](https://doi.org/10.1007/BF00544366) | [3161742](https://pubmed.ncbi.nlm.nih.gov/3161742) | Original PK study of zimeldine and its metabolite norzimelidine with numeric half-lives and renal clearances reported directly in the abstract. |
| `Love_1981.pdf` | Love BL et al., Pharmacokinetics of zimelidine in human…, European journal of clinica… (1981) | popPK | 8 | [10.1007/BF00607150](https://doi.org/10.1007/BF00607150) | [6455297](https://pubmed.ncbi.nlm.nih.gov/6455297) | Human PK study of zimelidine with numeric half-lives, bioavailability, and urinary excretion reported in the abstract, though CL/V values are not explicitly given. |
| `McMahon_1987.pdf` | McMahon TF et al., Effects of age on antidepressant kineti…, Pharmacology, biochemistry,… (1987) | popPK | 7 | [10.1016/0091-3057(87)90124-9](https://doi.org/10.1016/0091-3057(87)90124-9) | [2953033](https://pubmed.ncbi.nlm.nih.gov/2953033) | Zimelidine PK (half-life, clearance, volume) was measured in rats, but the abstract gives only qualitative direction of change, no numeric values. |
| `Dehlin_1981.pdf` | Dehlin O et al., Zimelidine to geriatric patients: a pha…, Acta psychiatrica Scandinav… (1981) | popPK | 6 | [10.1111/j.1600-0447.1981.tb00747.x](https://doi.org/10.1111/j.1600-0447.1981.tb00747.x) | [6452803](https://pubmed.ncbi.nlm.nih.gov/6452803) | Human PK study of zimelidine reporting half-lives (15 h, 35 h) and AUCs, but no CL/V or compartmental parameters and no detailed numeric table in the evidence. |
| `Gottfries_1986.pdf` | Gottfries CG et al., Pharmacokinetics of zimeldine in male a…, Acta pharmacologica et toxi… (1986) | popPK | 6 | [10.1111/j.1600-0773.1986.tb00140.x](https://doi.org/10.1111/j.1600-0773.1986.tb00140.x) | [2946168](https://pubmed.ncbi.nlm.nih.gov/2946168) | Human PK study of zimeldine with half-life and AUC reported, but no numeric parameter values appear in the evidence. |
| `Potter_1979.pdf` | Potter WZ et al., Comparative pharmacokinetics of zimelid…, Psychiatry research (1979) | popPK | 6 | [10.1016/0165-1781(79)90009-x](https://doi.org/10.1016/0165-1781(79)90009-x) | [298355](https://pubmed.ncbi.nlm.nih.gov/298355) | Human PK study of zimelidine/norzimelidine, but only qualitative statements (ratio ~3:1, twofold variability) — no CL/V/t½ values in the evidence. |

<sub>queue written 2026-10-07T00:22:32.582999+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aberg-Wistedt_1985 | irrelevant | 0 | 0 | The study is a clinical/biochemical comparison of antidepressant effects and CSF metabolites, not a pharmacokinetic study reporting disposition parameters for zimeldine. |
| PD | Aberg-Wistedt_1985 | not_relevant | 1 | 0 | The study reports qualitative clinical and biochemical changes (MADRS scores, CSF metabolites, platelet uptake) at a fixed dose, but does not provide plasma concentrations or numeric PD parameters (e.g., EC50, Emax) to derive an exposure-response relationship. |
| popPK | Borg_1979 | irrelevant | 0 | 0 | no_text gate: only 186 chars of text extracted (&lt; 400) |
| popPK | Brown_1980 | irrelevant | 0 | 0 | no_text gate: only 105 chars of text extracted (&lt; 400) |
| popPK | Chrétien_2025 | irrelevant | 0 | 0 | The paper is a pharmacovigilance safety signal analysis regarding hypertension and does not report any pharmacokinetic parameters for zimeldine. |
| PD | Chrétien_2025 | not_relevant | 1 | 0 | The paper is a pharmacovigilance disproportionality analysis that explicitly states no dose-response relationship was identified and provides no numeric PD parameters. |
| popPK | Claghorn_1983 | irrelevant | 0 | 0 | The paper is a clinical tolerability study comparing side effects and does not report quantitative pharmacokinetic parameters such as clearance or volume of distribution. |
| PD | Claghorn_1983 | not_relevant | 0 | 0 | The paper reports only qualitative tolerability comparisons and mentions plasma levels were measured, but provides no numeric PD parameters, dose-response curves, or exposure-response analysis. |
| popPK | Cronholm_1979 | irrelevant | 1 | 0 | A review-style discussion of antidepressant pharmacokinetics with no numeric disposition parameters for zimeldine. |
| popPK | Dehlin_1981 | relevant | 6 | 4 | Human PK study of zimelidine reporting half-lives (15 h, 35 h) and AUCs, but no CL/V or compartmental parameters and no detailed numeric table in the evidence. |
| popPK | Dehlin_1984 | irrelevant | 4 | 2 | Reports steady-state plasma concentrations and ratios but no quantitative disposition parameters (CL, V, t½, model); no numeric concentration values are given in the evidence. |
| PD | Dehlin_1984 | not_relevant | 2 | 1 | The study reports PK linearity and clinical improvement but does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative exposure-response model. |
| popPK | Fagan_1984 | irrelevant | 2 | 1 | Zimelidine is only the co-administered probe drug; the pharmacokinetic analysis concerns temazepam, and no zimelidine disposition parameters are reported. |
| popPK | Gottfries_1986 | relevant | 6 | 2 | Human PK study of zimeldine with half-life and AUC reported, but no numeric parameter values appear in the evidence. |
| popPK | Kopanski_1983 | irrelevant | 0 | 0 | Receptor pharmacology study in rat brain slices; zimeldine is only one of many tested drugs, with no PK parameters reported. |
| popPK | Linnoila_1986 | irrelevant | 0 | 0 | Zimelidine is used only as a probe affecting MHPG production; no PK disposition parameters for zimelidine are reported. |
| popPK | Luthman_1997 | irrelevant | 0 | 0 | Zimelidine is only a co-applied uptake inhibitor in a rat serotonin clearance study; no PK disposition parameters for zimelidine are reported. |
| popPK | McMahon_1987 | relevant | 7 | 3 | Zimelidine PK (half-life, clearance, volume) was measured in rats, but the abstract gives only qualitative direction of change, no numeric values. |
| popPK | Melander_1983 | irrelevant | 1 | 0 | Zimelidine is only mentioned as an example drug in a review of food effects on presystemic clearance, with no PK parameter values reported. |
| popPK | Njunge_1991 | irrelevant | 0 | 0 | Behavioral pharmacology study in mice; zimeldine is only a test drug dose, with no PK parameters reported. |
| popPK | Nyström_1986 | irrelevant | 2 | 0 | The study is a clinical trial focusing on treatment outcomes and biochemical predictors, and the provided evidence contains no quantitative pharmacokinetic parameter values (CL, V, etc.) for zimeldine. |
| popPK | Pottage_1983 | irrelevant | 0 | 0 | The paper discusses cardiovascular safety and toxicity of zimeldine, not pharmacokinetic parameters. |
| PD | Pottage_1983 | not_relevant | 1 | 0 | The text is a qualitative review of cardiovascular safety and toxicity, containing no numeric PD parameters, concentration-effect data, or dose-response curves. |
| popPK | Potter_1979 | relevant | 6 | 2 | Human PK study of zimelidine/norzimelidine, but only qualitative statements (ratio ~3:1, twofold variability) — no CL/V/t½ values in the evidence. |
| popPK | Scott_1982 | irrelevant | 3 | 1 | Zimelidine is a co-administered study drug but no quantitative PK parameters for it are reported; only ethanol PK is mentioned, with no numeric values present. |
| popPK | Wallace_1987 | irrelevant | 0 | 0 | Review of protein binding in the elderly; no PK disposition parameters or numeric values for zimeldine. |
| PD | Wallace_1987 | not_relevant | 1 | 0 | The text is a review of plasma protein binding in the elderly and mentions zimeldine only as an example of a drug with altered free fraction, without providing any concentration-effect data, dose-response curves, or numeric PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
