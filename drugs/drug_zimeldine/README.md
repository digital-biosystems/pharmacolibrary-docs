<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;zimeldine&quot;}]"></div>

# zimeldine

- **generic name:** zimeldine
- **ATC codes:** `N06AB02`
- **DrugBank:** [DB04832](https://go.drugbank.com/drugs/DB04832)
- **groups:** approved, withdrawn

## About

**Description.** Zimelidine has been banned worldwide due to serious, sometimes fatal, cases of central and/or peripheral neuropathy known as Guillain-Barré syndrome and due to a peculiar hypersensitivity reaction involving many organs including skin exanthema, flu-like symptoms, arthralgias, and sometimes eosinophilia. Additionally, zimelidine was charged to cause an increase in suicidal ideation and/or attempts among depressive patients.

**Indication.** For the treatment of depression.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-24 21:49 | 6:21 | 0/0/0 | 0/0/0 | 0/0/0 | 22,901/2,319 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

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
| metabolism | brain | `MAOA` inhibitor, `MAOB` inhibitor | DrugBank actor |
| metabolism | liver | `CYP3A4` inhibitor, `MAOA` inhibitor | DrugBank actor |
| metabolism | platelet | `MAOB` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor, `MAOA` inhibitor | DrugBank actor |
| target | brain | `SLC6A4` inhibitor | DrugBank actor |
| target | platelet | `SLC6A4` inhibitor | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
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
| `Ferry_1985.pdf` | Ferry N et al., Influence of renal failure on the kinet…, European journal of clinica… (1985) | popPK | 10 | [10.1007/BF00544366](https://doi.org/10.1007/BF00544366) | [3161742](https://pubmed.ncbi.nlm.nih.gov/3161742) | The study reports quantitative PK parameters (half-lives, renal clearance, AUC) for zimeldine in the abstract text. |
| `Gottfries_1986.pdf` | Gottfries CG et al., Pharmacokinetics of zimeldine in male a…, Acta pharmacologica et toxi… (1986) | popPK | 9 | [10.1111/j.1600-0773.1986.tb00140.x](https://doi.org/10.1111/j.1600-0773.1986.tb00140.x) | [2946168](https://pubmed.ncbi.nlm.nih.gov/2946168) | The paper is a relevant PK study for zimeldine, but the provided evidence contains only qualitative descriptions of differences (e.g., "significantly higher") without any specific numeric parameter values. |
| `Love_1981.pdf` | Love BL et al., Pharmacokinetics of zimelidine in human…, European journal of clinica… (1981) | popPK | 9 | [10.1007/BF00607150](https://doi.org/10.1007/BF00607150) | [6455297](https://pubmed.ncbi.nlm.nih.gov/6455297) | The paper reports quantitative PK parameters for zimelidine including half-life (4.7-5.1 h) and bioavailability (50%), though specific clearance and volume values are not explicitly listed in the provided text. |
| `McMahon_1987.pdf` | McMahon TF et al., Effects of age on antidepressant kineti…, Pharmacology, biochemistry,… (1987) | popPK | 9 | [10.1016/0091-3057(87)90124-9](https://doi.org/10.1016/0091-3057(87)90124-9) | [2953033](https://pubmed.ncbi.nlm.nih.gov/2953033) | The study reports qualitative changes in PK parameters (half-life, clearance, volume) for zimelidine in rats, but no specific numeric values are provided in the evidence. |
| `Dehlin_1981.pdf` | Dehlin O et al., Zimelidine to geriatric patients: a pha…, Acta psychiatrica Scandinav… (1981) | popPK | 8 | [10.1111/j.1600-0447.1981.tb00747.x](https://doi.org/10.1111/j.1600-0447.1981.tb00747.x) | [6452803](https://pubmed.ncbi.nlm.nih.gov/6452803) | The study reports quantitative PK parameters (half-lives of 15 h and 35 h) for zimelidine in geriatric patients, but lacks other disposition parameters like clearance or volume. |
| `Potter_1979.pdf` | Potter WZ et al., Comparative pharmacokinetics of zimelid…, Psychiatry research (1979) | popPK | 8 | [10.1016/0165-1781(79)90009-x](https://doi.org/10.1016/0165-1781(79)90009-x) | [298355](https://pubmed.ncbi.nlm.nih.gov/298355) | The paper is a relevant PK study for zimelidine, but the provided evidence contains only qualitative descriptions and ratios without specific numeric values for clearance, volume, or half-life. |

<sub>queue written 2026-09-24T21:49:16.226569+00:00</sub>

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
| popPK | Cronholm_1979 | irrelevant | 0 | 0 | The paper is a general review discussing the pharmacokinetic basis of antidepressants and mentions zimelidine only as an example of a drug with complex metabolite effects, without reporting any quantitative PK parameters. |
| popPK | Dehlin_1981 | relevant | 8 | 4 | The study reports quantitative PK parameters (half-lives of 15 h and 35 h) for zimelidine in geriatric patients, but lacks other disposition parameters like clearance or volume. |
| popPK | Dehlin_1984 | irrelevant | 2 | 0 | The study reports qualitative pharmacokinetic observations (steady-state concentrations, linear dose response, interindividual variation) but does not provide quantitative disposition parameters such as clearance, volume of distribution, or half-life. |
| PD | Dehlin_1984 | not_relevant | 2 | 1 | The study reports PK linearity and clinical improvement but does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative exposure-response model. |
| popPK | Fagan_1984 | irrelevant | 1 | 0 | Zimelidine is a co-administered agent used to test for interactions with temazepam, and no quantitative pharmacokinetic parameters for zimelidine itself are reported. |
| popPK | Gottfries_1986 | relevant | 9 | 0 | The paper is a relevant PK study for zimeldine, but the provided evidence contains only qualitative descriptions of differences (e.g., "significantly higher") without any specific numeric parameter values. |
| popPK | Kopanski_1983 | irrelevant | 0 | 0 | The study is a mechanistic investigation of adrenergic receptor sensitivity in rat brain tissue and does not report quantitative pharmacokinetic parameters for zimeldine. |
| popPK | Linnoila_1986 | irrelevant | 0 | 0 | The study focuses on norepinephrine metabolism and MHPG production rates, using zimelidine only as a comparator agent without reporting zimelidine's own pharmacokinetic parameters. |
| popPK | Luthman_1997 | irrelevant | 0 | 0 | The study measures extracellular serotonin clearance in rat striatum using zimeldine as a mechanistic probe, not zimeldine's own pharmacokinetic parameters. |
| popPK | McMahon_1987 | relevant | 9 | 0 | The study reports qualitative changes in PK parameters (half-life, clearance, volume) for zimelidine in rats, but no specific numeric values are provided in the evidence. |
| popPK | Melander_1983 | irrelevant | 0 | 0 | The paper is a review discussing the general influence of food on presystemic clearance, mentioning zimelidine only as an example of a drug unaffected by food, without providing any quantitative pharmacokinetic parameters. |
| popPK | Njunge_1991 | irrelevant | 0 | 0 | The paper is a behavioral pharmacology study using zimeldine as a test agent in an anxiety model, reporting no pharmacokinetic parameters. |
| popPK | Nyström_1986 | irrelevant | 2 | 0 | The study is a clinical trial focusing on treatment outcomes and biochemical predictors, and the provided evidence contains no quantitative pharmacokinetic parameter values (CL, V, etc.) for zimeldine. |
| popPK | Pottage_1983 | irrelevant | 0 | 0 | The paper discusses cardiovascular safety and toxicity of zimeldine, not pharmacokinetic parameters. |
| PD | Pottage_1983 | not_relevant | 1 | 0 | The text is a qualitative review of cardiovascular safety and toxicity, containing no numeric PD parameters, concentration-effect data, or dose-response curves. |
| popPK | Potter_1979 | relevant | 8 | 2 | The paper is a relevant PK study for zimelidine, but the provided evidence contains only qualitative descriptions and ratios without specific numeric values for clearance, volume, or half-life. |
| popPK | Scott_1982 | irrelevant | 2 | 0 | The study is a pharmacodynamic interaction trial that reports no quantitative pharmacokinetic parameters (CL, V, t1/2) for zimelidine. |
| popPK | Wallace_1987 | irrelevant | 0 | 0 | The paper is a review of plasma protein binding in the elderly and does not report quantitative pharmacokinetic disposition parameters (CL, V, etc.) for zimeldine. |
| PD | Wallace_1987 | not_relevant | 1 | 0 | The text is a review of plasma protein binding in the elderly and mentions zimeldine only as an example of a drug with altered free fraction, without providing any concentration-effect data, dose-response curves, or numeric PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
