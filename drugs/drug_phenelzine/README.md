<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;phenelzine&quot;}]"></div>

# phenelzine

- **generic name:** phenelzine
- **ATC codes:** `N06AF03`
- **DrugBank:** [DB00780](https://go.drugbank.com/drugs/DB00780)
- **groups:** approved, investigational

## About

**Description.** Phenelzine, with the formula β-phenylethylhydrazine, is a monoamine oxidase inhibiting antidepressant that is effective in the treatment of panic disorder and social anxiety disorder.[A15753] It was developed by Parke Davis and originally FDA approved on June 9th, 1961. It is currently approved under prescription by the name of Nardil.

**Indication.** Phenelzine is indicated for the treatment of nonendogenous, neurotic or atypical depression for patients that do not tolerate other forms of therapy.[L1356] 

Atypical depression has a high prevalence rate, starts in early life, tends to last longer, is more likely to occur in people with bipolar disorder, has a high comorbidity with anxiety disorder and carries more risk of suicidal behavior. It is important to specify the atypical feature to predict the clinical course of depression and hence generate the best treatment and service. The featuring symptoms of the atypical feature include mood reactivity, two or more of this symptoms: 1) increased appetite, 2) increased sleep, 3) leaden paralysis and 4) interpersonal rejection sensitivity and should not have melancholic or catatonic features of depression.[A31917]

Neurotic depression is a depression of an emotionally unstable person. It is a secondary condition to major personality disorder, neuroses and drug use disorders. Likewise, a primary depression with a family history of depression spectrum disease would fit in this category.[A31922]

A nonendogenous depression is characterized by a disturbance in mood and general outlook. The physical symptoms tend to be less severe and it often occurs in response to stressful life events that keep occurring over a large period of time generating a continuous stress in the daily living.[A31924]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-24 04:01 | 18:17 | 0/0/0 | 0/0/0 | 0/0/0 | 83,679/6,238 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 2/3 | 3/2 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=phenelzine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>“…Phenelzine is rapidly absorbed from the gastrointestinal tract. The decay of the drug acti…”</sub> | prose |
| metabolism | brain | `CYP2D6` inhibitor, `MAOA` substrate/target, `MAOB` substrate/target | DrugBank actor |
| metabolism | kidney | `CYP3A5` inhibitor | DrugBank actor |
| metabolism | liver | `CYP2C19` inhibitor, `CYP2C8` inhibitor, `CYP2D6` inhibitor, `CYP2E1` inducer, `CYP3A4` inhibitor, `CYP3A5` inhibitor, `CYP3A7` inhibitor, `MAOA` substrate/target | DrugBank actor |
| metabolism | platelet | `MAOB` substrate/target | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor, `CYP3A5` inhibitor, `MAOA` substrate/target | DrugBank actor |
| excretion | kidney | <sub>“…nylacetic acid that constitute 79% of the dose found in the urine in the first 96 hours.[A…”</sub> | prose |

<sub>Actors without a tissue in the table: ABAT (inhibitor), AOC3 (inhibitor), GAD65 (inhibitor), GPT (inhibitor), GPT2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 55 matched, 50 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_10 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Dyck_1986.pdf` | Dyck LE et al., Inhibition of aromatic L-amino acid dec…, Journal of neurochemistry (1986) | pd | 4 | [10.1111/j.1471-4159.1986.tb08511.x](https://doi.org/10.1111/j.1471-4159.1986.tb08511.x) | [2871132](https://www.ncbi.nlm.nih.gov/pubmed/2871132) | metadata signals extractable PD data (IC50) |
| `Fan_1994.pdf` | Fan P, Effects of antidepressants on the inwar…, British journal of pharmaco… (1994) | pd | 4 | [10.1111/j.1476-5381.1994.tb13140.x](https://doi.org/10.1111/j.1476-5381.1994.tb13140.x) | [7522857](https://www.ncbi.nlm.nih.gov/pubmed/7522857) | metadata signals extractable PD data (IC50) |
| `Hrdina_1987.pdf` | Hrdina PD, Regulation of high- and low-affinity [3…, European journal of pharmac… (1987) | pd | 4 | [10.1016/0014-2999(87)90429-8](https://doi.org/10.1016/0014-2999(87)90429-8) | [3040430](https://www.ncbi.nlm.nih.gov/pubmed/3040430) | metadata signals extractable PD data (IC50) |
| `Li_2019.pdf` | Li ZR et al., Experience-based discovery (EBD) of ary…, European journal of medicin… (2019) | pd | 4 | [10.1016/j.ejmech.2019.01.075](https://doi.org/10.1016/j.ejmech.2019.01.075) | [30739825](https://www.ncbi.nlm.nih.gov/pubmed/30739825) | metadata signals extractable PD data (IC50) |
| `ODonnell_1985.pdf` | O'Donnell JM et al., Effects of clenbuterol and antidepressa…, The Journal of pharmacology… (1985) | pd | 4 | not captured | [2989510](https://www.ncbi.nlm.nih.gov/pubmed/2989510) | metadata signals extractable PD data (IC50) |
| `Pandey_2018.pdf` | Pandey P et al., Interactions of endocannabinoid virodha…, Biochemical pharmacology (2018) | pd | 4 | [10.1016/j.bcp.2018.06.024](https://doi.org/10.1016/j.bcp.2018.06.024) | [29958841](https://www.ncbi.nlm.nih.gov/pubmed/29958841) | metadata signals extractable PD data (IC50) |
| `Yu_1989.pdf` | Yu PH et al., Deuterium isotope effect of phenelzine…, Biochemical pharmacology (1989) | pd | 4 | [10.1016/0006-2952(89)90522-4](https://doi.org/10.1016/0006-2952(89)90522-4) | [2597196](https://www.ncbi.nlm.nih.gov/pubmed/2597196) | metadata signals extractable PD data (IC50) |
| `Ziance_1977.pdf` | Ziance RJ et al., Influence of MAO inhibitors on uptake a…, Archives internationales de… (1977) | pd | 4 | not captured | [921400](https://www.ncbi.nlm.nih.gov/pubmed/921400) | metadata signals extractable PD data (IC50) |
| `Nirogi_2015.pdf` | Nirogi R et al., Evaluation of metabolism dependent inhi…, Chemico-biological interact… (2015) | pgx | 7 | [10.1016/j.cbi.2015.01.028](https://doi.org/10.1016/j.cbi.2015.01.028) | [25656918](https://www.ncbi.nlm.nih.gov/pubmed/25656918) | metadata signals extractable PGX data (CYP2B6, PK/PD-context) |
| `Polasek_2006.pdf` | Polasek TM et al., An evaluation of potential mechanism-ba…, British journal of clinical… (2006) | pgx | 7 | [10.1111/j.1365-2125.2006.02627.x](https://doi.org/10.1111/j.1365-2125.2006.02627.x) | [16669850](https://www.ncbi.nlm.nih.gov/pubmed/16669850) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |

<sub>queue written 2026-09-24T03:58:31.245549+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahmad_2012 | irrelevant | 0 | 0 | The study reports in-vitro enzyme inhibition (IC50) values for phenelzine, not pharmacokinetic disposition parameters. |
| PGx | Anari_1997 | not_relevant | 0 | 0 | The paper investigates the metabolic activation of phenelzine by hydroperoxides in hepatocytes but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Atkinson_2015 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of phenylephrine, not phenelzine, which is only mentioned as a co-administered monoamine oxidase inhibitor in a case report context. |
| PD | Atkinson_2015 | not_relevant | 0 | 0 | The paper models the PD of phenylephrine, not phenelzine; phenelzine is only mentioned qualitatively as a potentiating agent (MAOI). |
| popPK | Baker_1991 | irrelevant | 0 | 0 | The study focuses on the neurochemical effects of phenelzine on GABA levels in rats, not on pharmacokinetic disposition parameters. |
| popPK | Beaudry_1985 | irrelevant | 0 | 0 | The study focuses on clonazepam for panic attacks, and phenelzine is only mentioned as a comparator without any pharmacokinetic data. |
| PD | Beaudry_1985 | not_relevant | 0 | 0 | The paper reports a clinical trial of clonazepam and only mentions phenelzine in the introduction as a known efficacious drug, providing no pharmacodynamic or exposure-response data for phenelzine. |
| popPK | Blanco_2010 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial for social anxiety disorder and does not report any pharmacokinetic parameters for phenelzine. |
| popPK | Chen_2011 | irrelevant | 0 | 0 | The paper is a review of herb-drug interactions where phenelzine is mentioned only as a comparator in a case report of ginseng-induced mania, with no quantitative pharmacokinetic parameters reported. |
| PD | Chen_2011 | not_relevant | 1 | 0 | The paper is a qualitative review of herb-drug interactions that mentions phenelzine only in the context of a case report of mania induced by ginseng, without providing any numeric pharmacodynamic parameters or exposure-response data. |
| popPK | Collier_1968 | irrelevant | 0 | 0 | The paper is a pharmacodynamic study on bronchoconstriction in guinea pigs where phenelzine is only mentioned as a comparator agent with activity, and no pharmacokinetic parameters are reported. |
| PD | Collier_1968 | not_relevant | 0 | 0 | The paper focuses on fenamates and only qualitatively mentions phenelzine's activity without providing any numeric dose-response data or PD parameters for it. |
| popPK | Dollery_1983 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of tyramine with cimoxatone, mentioning phenelzine only as a comparator for pressor effect sensitivity without providing any PK parameters for phenelzine. |
| popPK | Dyck_1986 | irrelevant | 1 | 0 | The study focuses on enzyme inhibition mechanisms (IC50 values) and neurochemical effects rather than reporting quantitative pharmacokinetic disposition parameters like clearance or volume of distribution. |
| PGx | EVANS_1964 | not_relevant | 0 | 0 | The paper discusses acetylation polymorphisms generally and does not report pharmacogenomic effects on phenelzine PK/PD parameters. |
| popPK | Fan_1994 | irrelevant | 0 | 0 | no_text gate: only 108 chars of text extracted (&lt; 400) |
| PD | Fan_1994 | not_relevant | 0 | 0 | The paper investigates the effects of antidepressants on 5-HT3 receptors in rat neurons but does not mention phenelzine or report any pharmacodynamic parameters for it. |
| popPK | Holt_1995 | irrelevant | 0 | 0 | The study focuses on the metabolism of agmatine by diamine oxidase, using phenelzine only as an inhibitor to determine its IC50, rather than reporting pharmacokinetic parameters for phenelzine itself. |
| PD | Holt_1995 | not_relevant | 3 | 5 | The paper reports an IC50 for phenelzine inhibiting DAO enzyme activity in vitro, which is a pharmacodynamic parameter, but it is not an exposure-response or dose-response relationship for the drug's clinical effect in a subject or population. |
| popPK | Hrdina_1987 | irrelevant | 0 | 0 | no_text gate: only 124 chars of text extracted (&lt; 400) |
| PD | Hrdina_1987 | not_relevant | 0 | 0 | The paper focuses on the regulation of imipramine binding sites by antidepressants and does not report pharmacodynamic or exposure-response data for phenelzine. |
| popPK | Hu_2005 | irrelevant | 0 | 0 | The paper is a literature review of herb-drug interactions where phenelzine is mentioned only as a comparator in a case report of mania, with no quantitative pharmacokinetic parameters reported. |
| PD | Hu_2005 | not_relevant | 1 | 0 | The paper is a qualitative literature review of herb-drug interactions that mentions phenelzine only in the context of a case report of mania induced by ginseng, without providing any numeric PD parameters or exposure-response data. |
| popPK | Inan_2020 | irrelevant | 0 | 0 | The paper is a systematic review of novel phenethylamines (4-FA and 2C-B) and their interactions, where phenelzine is only mentioned as a comparator antidepressant, and no quantitative PK parameters for phenelzine are reported. |
| PD | Inan_2020 | not_relevant | 1 | 0 | The paper is a systematic review of potential drug interactions and contains no original data, numeric PD parameters, or exposure-response curves for phenelzine. |
| PGx | Izzo_2009 | not_relevant | 0 | 0 | The paper reports herbal drug interactions (e.g., ginseng with phenelzine) but does not report pharmacogenomic effects (gene variants) on PK/PD parameters. |
| popPK | Kan_1988 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of SR 95191, using phenelzine only as a comparator agent to demonstrate MAO-A inhibition, and does not report any pharmacokinetic parameters for phenelzine. |
| popPK | Kruse_1977 | irrelevant | 0 | 0 | The study focuses on the pharmacological and biochemical properties of nomifensine metabolites, using phenelzine only as a comparator agent in behavioral tests, and reports no pharmacokinetic parameters for phenelzine. |
| PD | Kruse_1977 | not_relevant | 0 | 0 | The paper studies nomifensine metabolites; phenelzine is only used as a tool drug to induce twitching, and no exposure-response or dose-response relationship for phenelzine itself is reported. |
| popPK | Li_2019 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on LSD1 inhibitors where phenelzine is used only as a starting scaffold/comparator, with no pharmacokinetic parameters reported. |
| PD | Li_2019 | not_relevant | 0 | 0 | The paper focuses on the discovery of a new LSD1 inhibitor (D8) using phenelzine as a scaffold; it reports an IC50 for the new compound but does not provide a pharmacodynamic or exposure-response analysis for phenelzine itself. |
| popPK | Meyer_1982 | irrelevant | 0 | 0 | The paper is a review discussing genetic polymorphisms and mentions phenelzine only as an example of a drug metabolized by N-acetyltransferase, without providing any quantitative pharmacokinetic parameters. |
| PD | Meyer_1982 | not_relevant | 1 | 0 | The text is a qualitative review mentioning phenelzine in the context of genetic polymorphisms affecting metabolism, but it provides no numeric PD parameters, concentration-effect data, or dose-response curves. |
| PGx | Meyer_1982 | not_relevant | 2 | 0 | The text mentions phenelzine only as an example of a drug metabolized by N-acetyltransferase in a general review of pharmacogenomics, without reporting specific PK/PD data or effect sizes for phenelzine. |
| popPK | Miller_1998 | irrelevant | 0 | 0 | The paper is a review of drug-herb interactions and mentions phenelzine only as a drug with potential interactions, providing no pharmacokinetic parameters. |
| PD | Miller_1998 | not_relevant | 1 | 0 | The text is a qualitative review of drug-herb interactions that mentions phenelzine only in the context of a potential adverse interaction with ginseng, without providing any numeric PD parameters or exposure-response data. |
| popPK | Modi_2024 | irrelevant | 0 | 0 | The paper is a review on mitochondria-targeted antioxidants for traumatic brain injury and does not contain pharmacokinetic data for phenelzine. |
| PD | Modi_2024 | not_relevant | 0 | 0 | The paper is a review of mitochondria-targeted antioxidants for TBI and does not mention phenelzine or report any pharmacodynamic or exposure-response data. |
| popPK | Nirogi_2015 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of CYP2B6 inhibition and does not report pharmacokinetic disposition parameters (CL, V, t1/2) for phenelzine. |
| PD | Nirogi_2015 | not_relevant | 3 | 2 | The study reports in vitro enzyme inactivation parameters (KI, kinact) and predicted DDI fold-changes, which are pharmacokinetic/toxicological metrics, not pharmacodynamic exposure-response or dose-response relationships for the drug's therapeutic effect. |
| PGx | Nirogi_2015 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (CYP2B6 inhibition) in vitro, not pharmacogenomic effects of gene variants on phenelzine PK/PD. |
| popPK | Noyes_1997 | irrelevant | 0 | 0 | The study is a clinical efficacy trial for moclobemide, and phenelzine is mentioned only as a background comparator without any pharmacokinetic data. |
| PD | Noyes_1997 | not_relevant | 1 | 0 | The paper is a clinical trial of moclobemide (not phenelzine) and reports only qualitative dose-response trends without numeric PD parameters or concentration-effect data. |
| popPK | ODonnell_1985 | irrelevant | 0 | 0 | The study is a mechanistic investigation of beta-adrenergic receptor coupling in rat brain tissue, not a pharmacokinetic study, and phenelzine is only a comparator drug with no PK parameters reported. |
| PD | ODonnell_1985 | not_relevant | 0 | 0 | The paper reports that phenelzine did not affect receptor/N-protein coupling, providing no numeric PD parameters or exposure-response relationship for phenelzine. |
| popPK | ODonnell_1990 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment in rats where phenelzine is used only as a comparator agent to test receptor independence, with no pharmacokinetic parameters reported. |
| PD | ODonnell_1990 | not_relevant | 1 | 0 | The paper mentions phenelzine only to state that its behavioral effects were unaltered by beta-2 down-regulation, without providing any dose-response data, concentration-effect curves, or numeric PD parameters for phenelzine. |
| PGx | Otton_1990 | not_relevant | 0 | 0 | The paper studies the metabolism of propranolol, not phenelzine; phenelzine is only mentioned as an inhibitor of monoamine oxidase in the in vitro assay. |
| popPK | Oualha_2025 | irrelevant | 0 | 0 | The paper studies the antileishmanial activity of tranylcypromine in vitro and does not report pharmacokinetic parameters for phenelzine. |
| PD | Oualha_2025 | not_relevant | 0 | 0 | not captured |
| popPK | Pandey_2018 | irrelevant | 0 | 0 | The study focuses on the in-vitro inhibition of MAO by endocannabinoids and does not report pharmacokinetic parameters for phenelzine. |
| PD | Pandey_2018 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition kinetics (IC50, Ki) for virodhamine, not a pharmacodynamic exposure-response or dose-response relationship for phenelzine. |
| PGx | Polasek_2004 | not_relevant | 0 | 0 | The paper describes in vitro mechanism-based inactivation of CYP2C8 by phenelzine but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Polasek_2006 | not_relevant | 0 | 0 | The paper investigates mechanism-based inactivation of CYP enzymes by phenelzine in vitro, not the effect of genetic variants on phenelzine's pharmacokinetics or pharmacodynamics. |
| popPK | Popp_2022 | irrelevant | 0 | 0 | The paper is a systematic review of ivermectin for COVID-19 and contains no information regarding phenelzine pharmacokinetics. |
| PD | Popp_2022 | not_relevant | 0 | 0 | The paper is a systematic review of ivermectin for COVID-19 and contains no pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters for phenelzine. |
| PGx | Sakata_2013 | not_relevant | 2 | 5 | The paper reports behavioral and neurobiological outcomes (PD) in a specific mouse genotype, but does not report pharmacokinetic parameters or standard quantitative pharmacodynamic effect sizes (e.g., EC50, Kd) for phenelzine. |
| popPK | Sherry-McKenna_1994 | irrelevant | 0 | 0 | The study investigates the effect of phenelzine on brain tryptophan levels (pharmacodynamics/mechanism) and does not report pharmacokinetic parameters such as clearance, volume, or half-life. |
| PD | Sherry-McKenna_1994 | not_relevant | 4 | 2 | The abstract describes a dose-response study for phenelzine but only provides qualitative results (elevation only at high doses) without reporting specific numeric PD parameters or concentration-effect data in the provided text. |
| popPK | Truong_2025 | irrelevant | 0 | 0 | The paper is a review of caffeine interactions with antidepressants, and phenelzine is only mentioned as a comparator MAOI regarding hypertension risk, with no quantitative PK parameters reported for it. |
| PD | Truong_2025 | not_relevant | 1 | 0 | The paper is a narrative review of caffeine-antidepressant interactions and mentions phenelzine only qualitatively regarding hypertension risk, without providing any numeric PD parameters or concentration-effect data. |
| popPK | Warrington_1991 | irrelevant | 0 | 0 | The study focuses on the pharmacology of moclobemide, with phenelzine serving only as a comparator for pharmacodynamic effects (tyramine threshold) without reporting quantitative PK parameters for phenelzine. |
| PD | Warrington_1991 | not_relevant | 2 | 1 | The paper focuses on moclobemide and only provides a qualitative comparison of tyramine threshold potentiation between moclobemide and phenelzine, without reporting numeric PD parameters or concentration-effect curves for phenelzine. |
| popPK | Yagiela_1985 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of drug interactions in dogs, reporting cardiovascular dose-response curves rather than pharmacokinetic disposition parameters for phenelzine. |
| popPK | Yamada_1993 | irrelevant | 0 | 0 | The study investigates neurochemical effects of iproniazid and nialamide, with phenelzine mentioned only as a qualitative comparator, and contains no pharmacokinetic parameters. |
| PD | Yamada_1993 | not_relevant | 0 | 0 | The paper investigates iproniazid and nialamide, not phenelzine, and only mentions phenelzine qualitatively as a comparator without providing any numeric PD parameters or exposure-response data for it. |
| popPK | Yu_1989 | irrelevant | 0 | 0 | no_text gate: only 110 chars of text extracted (&lt; 400) |
| popPK | Zhao_2016 | irrelevant | 0 | 0 | The paper is a computational study on drug-drug interaction extraction using neural networks and contains no pharmacokinetic data for phenelzine. |
| PD | Zhao_2016 | not_relevant | 0 | 0 | The paper describes a machine learning method for extracting drug-drug interactions from text and does not contain any pharmacodynamic data or analysis for phenelzine. |
| popPK | Ziance_1977 | irrelevant | 0 | 0 | no_text gate: only 89 chars of text extracted (&lt; 400) |
| PD | Ziance_1977 | not_relevant | 0 | 0 | The paper describes in vitro mechanisms of MAO inhibitors on norepinephrine uptake/release in rat brain, not a pharmacokinetic/pharmacodynamic exposure-response or dose-response analysis for phenelzine. |
| popPK | Zimmer_1990 | irrelevant | 0 | 0 | The paper is a pharmacodynamic study comparing MAO inhibition and tyramine pressor effects, not a pharmacokinetic study reporting quantitative disposition parameters for phenelzine. |
| PD | Zimmer_1990 | not_relevant | 3 | 2 | The paper provides qualitative comparisons and relative potency factors (e.g., 1/7th to 1/10th) for phenelzine compared to other drugs, but does not report specific numeric PD parameters (like EC50, Emax, or absolute effect values) or a concentration-effect curve for phenelzine itself. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
