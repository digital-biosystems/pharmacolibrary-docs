<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02C&quot;,&quot;href&quot;:&quot;atc/N02C.md&quot;},{&quot;label&quot;:&quot;rizatriptan&quot;}]"></div>

# rizatriptan

- **generic name:** rizatriptan
- **ATC codes:** `N02CC04`
- **DrugBank:** [DB00953](https://go.drugbank.com/drugs/DB00953) · **PubChem:** [CID 5078](https://pubchem.ncbi.nlm.nih.gov/compound/5078)
- **molar mass:** 269.3449 g/mol (C15H19N5) — DrugBank
- **groups:** approved, investigational

## About

Rizatriptan is a serotonin receptor agonist used to treat migraine attacks. It is an approved antimigraine medicine, classified as a selective serotonin agonist, and is widely used for acute migraine treatment.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q212171](https://www.wikidata.org/wiki/Q212171) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 06:39 | 1:35 | 0/0/0 | 2/0/1 | 0/0/0 | 135,681/5,896 | einfracz / qwen3.8-27b | 10 | 4/6 | 9/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Edvinsson_2005_vasocontractile_responses](drugs/drug_rizatriptan/pd_Edvinsson_2005_vasocontractile_responses.md) | vasocontractile responses ← rizatriptan · direct Emax (saturable) effect | — | Edvinsson L et al., Triptan-induced contractile (5-HT1B rec…, Clinical science (London, E… (2005) | [10.1042/CS20050016](https://doi.org/10.1042/CS20050016) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [MaassenVanDenBrink_1998_Contraction](drugs/drug_rizatriptan/pd_MaassenVanDenBrink_1998_Contraction.md) | Coronary artery contraction ← rizatriptan · direct Emax (saturable) effect | — | MaassenVanDenBrink A et al., Coronary side-effect potential of curre…, Circulation (1998) | [10.1161/01.cir.98.1.25](https://doi.org/10.1161/01.cir.98.1.25) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 0.00).">in vitro</span> | [Longmore_1996_coronary_contraction](drugs/drug_rizatriptan/pd_Longmore_1996_coronary_contraction.md) | coronary artery contraction ← rizatriptan · direct sigmoid Emax (Hill) effect | — | Longmore J et al., 5-HT1D receptor agonists and human coro…, British journal of clinical… (1996) | [10.1046/j.1365-2125.1996.04217.x](https://doi.org/10.1046/j.1365-2125.1996.04217.x) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=rizatriptan) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | brain | `CYP2D6` inhibitor, `MAOA` substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` inhibitor, `MAOA` substrate | DrugBank actor |
| metabolism | small intestine | `MAOA` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: HTR1A (target), HTR1B (target), HTR1D (target), HTR1E (target), HTR1F (target), HTR7 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 76 matched, 80 returned
- **screened:** 10  ·  **relevant:** 6
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_13 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lee_1998.pdf` | Lee Y et al., Pharmacokinetics and tolerability of in…, Biopharmaceutics & drug dis… (1998) | popPK | 10 | [10.1002/(sici)1099-081x(199812)19:9&lt;577::aid-bdd136&gt;3.0.co;2-w](https://doi.org/10.1002/(sici)1099-081x(199812)19:9<577::aid-bdd136>3.0.co;2-w) | [9872339](https://pubmed.ncbi.nlm.nih.gov/9872339) | The abstract reports specific numeric values for clearance, half-life, and urinary excretion for intravenous rizatriptan in healthy females. |
| `Lee_1999.pdf` | Lee Y et al., Pharmacokinetics and tolerability of or…, British journal of clinical… (1999) | popPK | 10 | [10.1046/j.1365-2125.1999.00917.x](https://doi.org/10.1046/j.1365-2125.1999.00917.x) | [10233200](https://pubmed.ncbi.nlm.nih.gov/10233200) | The study reports quantitative PK parameters (AUC, clearance, renal clearance) for rizatriptan in humans, with values explicitly provided in the text. |
| `Vyas_2000.pdf` | Vyas KP et al., Disposition and pharmacokinetics of the…, Drug metabolism and disposi… (2000) | popPK | 10 | not captured | [10611145](https://pubmed.ncbi.nlm.nih.gov/10611145) | The evidence provides explicit numeric values for plasma clearance (CL), renal clearance (CLr), and bioavailability for rizatriptan in humans. |
| `Chen_2005.pdf` | Chen J et al., Evaluation of the bioequivalence and ph…, Arzneimittel-Forschung (2005) | popPK | 9 | [10.1055/s-0031-1296872](https://doi.org/10.1055/s-0031-1296872) | [16080273](https://pubmed.ncbi.nlm.nih.gov/16080273) | The study reports rizatriptan pharmacokinetic parameters, but the evidence provides only bioequivalence ratios and confidence intervals, not specific absolute values for clearance, volume, or half-life. |
| `Chokshi_2019.pdf` | Chokshi A et al., Intranasal spray formulation containing…, International journal of ph… (2019) | popPK | 8 | [10.1016/j.ijpharm.2019.118702](https://doi.org/10.1016/j.ijpharm.2019.118702) | [31593810](https://pubmed.ncbi.nlm.nih.gov/31593810) | Study reports rizatriptan PK in dogs (Cmax, Tmax) but lacks full disposition parameters like CL or V in the text. |
| `Sciberras_1997.pdf` | Sciberras DG et al., Initial human experience with MK-462 (r…, British journal of clinical… (1997) | popPK | 8 | [10.1111/j.1365-2125.1997.tb00032.x](https://doi.org/10.1111/j.1365-2125.1997.tb00032.x) | [9056052](https://pubmed.ncbi.nlm.nih.gov/9056052) | The study is a Phase I pharmacokinetic trial of rizatriptan in humans, but the extracted text only reports tmax and qualitative observations, lacking specific quantitative parameters like CL, V, or AUC. |
| `Wang_2007.pdf` | Wang C et al., Uptake and biodistribution of rizatript…, International journal of ph… (2007) | popPK | 8 | [10.1016/j.ijpharm.2006.12.039](https://doi.org/10.1016/j.ijpharm.2006.12.039) | [17267150](https://pubmed.ncbi.nlm.nih.gov/17267150) | The study reports quantitative PK parameters (Tmax, AUC, bioavailability) for rizatriptan in rats, though specific clearance and volume values are not explicitly detailed in the provided abstract. |
| `Fraser_2012.pdf` | Fraser IP et al., Pharmacokinetics and tolerability of ri…, Headache (2012) | popPK | 7 | [10.1111/j.1526-4610.2011.02069.x](https://doi.org/10.1111/j.1526-4610.2011.02069.x) | [22289113](https://pubmed.ncbi.nlm.nih.gov/22289113) | Study reports rizatriptan PK parameters (AUC, Cmax) but lacks compartmental model estimates (CL, V, ka) required for population PK extraction. |
| `Goldberg_2001.pdf` | Goldberg MR et al., Influence of beta-adrenoceptor antagoni…, British journal of clinical… (2001) | popPK | 7 | [10.1046/j.0306-5251.2001.01417.x](https://doi.org/10.1046/j.0306-5251.2001.01417.x) | [11453892](https://pubmed.ncbi.nlm.nih.gov/11453892) | The study investigates rizatriptan PK, but the provided text only reports relative percentage changes (e.g., AUC increased by 67%) rather than absolute quantitative parameter values (CL, V, half-life) for rizatriptan alone. |
| `Musson_2001.pdf` | Musson DG et al., Pharmacokinetics of rizatriptan in heal…, International journal of cl… (2001) | popPK | 7 | not captured | [11680669](https://pubmed.ncbi.nlm.nih.gov/11680669) | The study reports key disposition parameters including half-life (1.8 h), renal clearance (197 ml/min), and exposure metrics (AUC, Cmax) for rizatriptan in humans, although total body clearance and volume of distribution are not explicitly listed. |
| `Barrish_1996.pdf` | Barrish A et al., The use of stable isotope labeling and…, Rapid communications in mas… (1996) | popPK | 6 | [10.1002/(SICI)1097-0231(19960715)10:9&lt;1033::AID-RCM616&gt;3.0.CO;2-4](https://doi.org/10.1002/(SICI)1097-0231(19960715)10:9<1033::AID-RCM616>3.0.CO;2-4) | [8755236](https://pubmed.ncbi.nlm.nih.gov/8755236) | The paper is a pharmacokinetic study of rizatriptan in dogs, but the provided evidence is only the abstract which mentions clearance and bioavailability are measured without providing the actual numeric values. |
| `Pauwels_1998.pdf` | Pauwels PJ et al., Pharmacological analysis of G-protein a…, British journal of pharmaco… (1998) | pd | 5 | [10.1038/sj.bjp.0701584](https://doi.org/10.1038/sj.bjp.0701584) | [9484854](https://www.ncbi.nlm.nih.gov/pubmed/9484854) | metadata signals extractable PD data (Emax) |
| `Longmore_1998.pdf` | Longmore J et al., Comparison of the vasoconstrictor effec…, British journal of clinical… (1998) | pd | 4 | [10.1046/j.1365-2125.1998.00821.x](https://doi.org/10.1046/j.1365-2125.1998.00821.x) | [9862247](https://www.ncbi.nlm.nih.gov/pubmed/9862247) | metadata signals extractable PD data (concentration-effect) |

<sub>queue written 2026-10-07T06:39:00.458043+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adelman_2001 | irrelevant | 1 | 0 | The paper is a qualitative review discussing clinical efficacy and general pharmacokinetic characteristics of various triptans without providing original quantitative PK parameter values for rizatriptan. |
| popPK | Ahmed_2017 | irrelevant | 1 | 0 | The study develops an analytical method for four triptans but only reports pharmacokinetics for zolmitriptan, not rizatriptan. |
| popPK | Al-Nimry_2024 | irrelevant | 2 | 0 | The study reports relative bioavailability and AUC ratios for a transdermal formulation but does not provide quantitative compartmental PK parameters (CL, V, ka) for rizatriptan. |
| popPK | Amundsen_2021 | irrelevant | 1 | 0 | The study reports relative infant doses and milk concentrations for lactation safety assessment, not compartmental pharmacokinetic parameters (CL, V, ka) for rizatriptan. |
| popPK | Barrish_1996 | relevant | 6 | 1 | The paper is a pharmacokinetic study of rizatriptan in dogs, but the provided evidence is only the abstract which mentions clearance and bioavailability are measured without providing the actual numeric values. |
| popPK | Belvis_2014 | irrelevant | 1 | 0 | The paper is a general review on migraine treatment and drug selection, lacking original quantitative population-pharmacokinetic data for rizatriptan. |
| PD | Belvis_2014 | not_relevant | 1 | 0 | The text is a general review of migraine treatment and triptan selection, mentioning rizatriptan only in the context of drug profiles without providing any specific numeric PD parameters or exposure-response data. |
| popPK | Belvís_2009 | irrelevant | 1 | 0 | The paper is a narrative review discussing triptan selection in migraine therapy and does not report original quantitative pharmacokinetic parameters or population-PK models for rizatriptan. |
| PD | Belvís_2009 | not_relevant | 1 | 0 | The text is a qualitative review of triptan selection and does not report any specific numeric PD parameters or exposure-response data for rizatriptan. |
| popPK | Bhagawati_2016 | irrelevant | 4 | 7 | The study reports standard pharmacokinetic parameters (Cmax, Tmax, AUC, t1/2) for a formulation comparison in humans, but it lacks the compartmental modeling parameters (CL, V, Q, ka) required for population-PK extraction. |
| PGx | Capi_2016 | not_relevant | 0 | 0 | The paper reviews the efficacy and safety of eletriptan, not rizatriptan, and does not report pharmacogenomic effects on PK/PD parameters. |
| popPK | Chen_2005 | relevant | 9 | 3 | The study reports rizatriptan pharmacokinetic parameters, but the evidence provides only bioequivalence ratios and confidence intervals, not specific absolute values for clearance, volume, or half-life. |
| popPK | Chokshi_2019 | relevant | 8 | 4 | Study reports rizatriptan PK in dogs (Cmax, Tmax) but lacks full disposition parameters like CL or V in the text. |
| popPK | Cutler_1999 | irrelevant | 0 | 0 | no_text gate: only 75 chars of text extracted (&lt; 400) |
| popPK | Dahlof_1999 | irrelevant | 1 | 0 | The text is a clinical efficacy review that mentions qualitative PK properties (shorter Tmax, greater bioavailability) but does not report quantitative disposition parameters (CL, V, ka, etc.) for rizatriptan. |
| popPK | Deleu_2000 | irrelevant | 2 | 0 | The paper is a comparative review of triptans and does not provide original quantitative pharmacokinetic parameter values in the evidence provided. |
| popPK | Delva_2021 | irrelevant | 0 | 0 | This is a clinical case report on the treatment of airplane headache, not a pharmacokinetic study; it only cites general half-life and Tmax values for dosing timing without reporting original PK parameter estimates. |
| popPK | Edvinsson_2005 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vasoconstrictor potency (EC50) and receptor expression, not a pharmacokinetic study reporting disposition parameters like clearance or volume for rizatriptan. |
| popPK | Fox_2000 | irrelevant | 1 | 0 | The paper is a comparative tolerability review that discusses exposure metrics like Cmax and bioavailability qualitatively or via rank order, but does not report quantitative pharmacokinetic disposition parameters (CL, V, ka, t1/2) for rizatriptan. |
| PD | Fox_2000 | not_relevant | 2 | 1 | The paper reports qualitative rank orders and correlation coefficients (R values) between exposure/lipophilicity and adverse events, but does not provide numeric PD parameters (e.g., Emax, EC50) or a specific dose-response curve for rizatriptan. |
| popPK | Fraser_2012 | relevant | 7 | 2 | Study reports rizatriptan PK parameters (AUC, Cmax) but lacks compartmental model estimates (CL, V, ka) required for population PK extraction. |
| popPK | Färkkilä_2005 | irrelevant | 0 | 0 | The paper is a review of eletriptan, not rizatriptan, and contains no quantitative pharmacokinetic parameters for the subject drug. |
| popPK | Gijsman_1997 | irrelevant | 0 | 0 | The paper is a clinical efficacy study for acute migraine treatment and does not report any pharmacokinetic parameters or quantitative disposition data for rizatriptan. |
| PD | Girotra_2017 | not_relevant | 1 | 0 | The paper focuses on formulation optimization and reports qualitative anti-migraine efficacy and brain uptake ratios, but does not provide numeric concentration-effect or dose-response PD parameters (e.g., Emax, EC50) for rizatriptan. |
| PD | Goldberg_1999 | not_relevant | 0 | 0 | The study reports a lack of interaction with qualitative safety endpoints (BP, HR, mood) but provides no numeric concentration-effect or dose-response data or PD parameters. |
| popPK | Goldberg_2000 | irrelevant | 3 | 0 | The paper describes a pharmacokinetic study but the provided evidence contains only qualitative descriptions of metabolite profiles and qualitative statements about accumulation, lacking specific numeric values for clearance, volume, half-life, or rate constants. |
| popPK | Goldberg_2001 | relevant | 7 | 2 | The study investigates rizatriptan PK, but the provided text only reports relative percentage changes (e.g., AUC increased by 67%) rather than absolute quantitative parameter values (CL, V, half-life) for rizatriptan alone. |
| PD | Goldberg_2001 | not_relevant | 0 | 0 | The study focuses exclusively on pharmacokinetic interactions (AUC, Cmax) and in vitro metabolism, reporting no pharmacodynamic or exposure-response data for rizatriptan. |
| popPK | Hokama_2007 | irrelevant | 2 | 0 | The study investigates the effect of rizatriptan on valproic acid pharmacokinetics (making rizatriptan the interacting agent/probe rather than the subject of PK parameter estimation), and no quantitative PK values for rizatriptan itself are reported. |
| popPK | Jhee_2001 | irrelevant | 2 | 0 | This is a comparative review that cites general pharmacokinetic properties (half-life) but lacks original quantitative disposition parameters like clearance, volume, or compartmental model parameters for rizatriptan. |
| PD | Jhee_2001 | not_relevant | 1 | 0 | The text is a qualitative comparative review of pharmacokinetic properties and general efficacy, lacking any specific numeric PD parameters or concentration-effect analysis for rizatriptan. |
| popPK | Kassem_2016 | irrelevant | 1 | 0 | This is a review article on formulation approaches for triptans and does not provide original quantitative pharmacokinetic parameter values for rizatriptan. |
| popPK | Khokhlov_2023 | irrelevant | 3 | 0 | The study reports bioequivalence metrics (AUC, Cmax ratios) and variability but lacks quantitative disposition parameters (CL, V, ka, t1/2) required for PK modeling. |
| popPK | Lines_2001 | irrelevant | 2 | 0 | The paper is a clinical review comparing efficacy and safety, reporting only T_max and bioavailability percentages without quantitative compartmental PK parameters like clearance or volume. |
| popPK | Longmore_1996 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of coronary artery contraction (receptor agonism), not a pharmacokinetic study, and reports no disposition parameters (CL, V, etc.) for rizatriptan. |
| popPK | Longmore_1998 | irrelevant | 0 | 0 | no_text gate: only 180 chars of text extracted (&lt; 400) |
| popPK | MaassenVanDenBrink_1998 | irrelevant | 0 | 0 | The paper is an in vitro pharmacodynamics study of coronary artery contraction and does not report pharmacokinetic parameters (CL, V, ka) for rizatriptan. |
| popPK | Major_2003 | irrelevant | 0 | 0 | The paper is a systematic review discussing clinical effectiveness and safety, and explicitly states that pharmacokinetics are not established or provided for the drugs discussed. |
| popPK | Masuo_2017 | relevant | 4 | 4 | The study reports in-vitro hepatic intrinsic clearance (CLint) values for rizatriptan, providing quantitative disposition parameters despite being a mechanistic/ex-vivo model rather than a standard population PK study. |
| popPK | Matthaei_2016 | irrelevant | 0 | 0 | The study focuses on sumatriptan pharmacokinetics and transporter mechanisms, mentioning rizatriptan only as a co-transported substrate without reporting specific PK parameters. |
| PGx | Matthaei_2016 | not_relevant | 3 | 2 | The paper reports PK changes for sumatriptan, and only notes that OCT1 transports rizatriptan, without reporting specific PK data or quantitative effects for rizatriptan. |
| popPK | Milano_2017 | irrelevant | 0 | 0 | This is a clinical case report on serotonin syndrome involving codeine, venlafaxine, and rizatriptan, with no pharmacokinetic parameter estimation or quantitative disposition data for rizatriptan. |
| popPK | Nair_2021 | irrelevant | 0 | 0 | no_text gate: only 88 chars of text extracted (&lt; 400) |
| popPK | Oldman_2001 | irrelevant | 0 | 0 | The paper is a systematic review of clinical efficacy (NNT) for acute migraine treatment and does not report any pharmacokinetic parameters. |
| PD | Oldman_2001 | not_relevant | 2 | 1 | The paper is a systematic review that qualitatively notes a dose-response relationship but does not provide numeric PD parameters, concentration-effect curves, or a formal PK/PD model. |
| popPK | Oldman_2007 | irrelevant | 0 | 0 | The paper is a clinical efficacy review of rizatriptan for migraine treatment and does not report any pharmacokinetic parameters. |
| PD | Oldman_2007 | not_relevant | 2 | 1 | The paper is a systematic review that qualitatively notes a dose-response relationship but does not provide numeric PD parameters, concentration-effect curves, or a formal PK/PD model. |
| popPK | Pascual_2007 | irrelevant | 0 | 0 | This is a systematic review of clinical efficacy and tolerability trials, not a pharmacokinetic study, and contains no quantitative PK parameters (CL, V, t1/2, etc.) for rizatriptan. |
| popPK | Pauwels_1998 | irrelevant | 0 | 0 | no_text gate: only 163 chars of text extracted (&lt; 400) |
| PD | Pauwels_1998 | not_relevant | 0 | 0 | The paper analyzes 5-HT1B receptor pharmacology in guinea-pig cells and does not mention rizatriptan or report any exposure-response or dose-response data for it. |
| PGx | Rahman_2024 | not_relevant | 0 | 0 | The paper investigates the efficacy of migraine drugs in a mouse model of motion sickness and does not report any pharmacogenomic analysis or gene-variant interactions affecting the PK or PD of rizatriptan. |
| popPK | Roon_1999 | irrelevant | 0 | 0 | This is an in vitro pharmacodynamic study measuring receptor potency and efficacy on isolated arteries, not a pharmacokinetic study of drug disposition. |
| popPK | Sanford_2012 | irrelevant | 0 | 0 | The paper is a review of frovatriptan where rizatriptan is only mentioned as a comparator in clinical trials, with no PK parameters reported for rizatriptan. |
| popPK | Schoenen_1997 | irrelevant | 0 | 0 | The paper is a narrative review of acute migraine therapy that discusses rizatriptan qualitatively but does not report any quantitative pharmacokinetic parameters. |
| popPK | Sciberras_1997 | relevant | 8 | 2 | The study is a Phase I pharmacokinetic trial of rizatriptan in humans, but the extracted text only reports tmax and qualitative observations, lacking specific quantitative parameters like CL, V, or AUC. |
| PD | Sciberras_1997 | not_relevant | 3 | 2 | The paper reports qualitative dose-response observations (maximal BP elevation of 5-10 mmHg) but does not provide numeric PD parameters (Emax, EC50) or a fitted concentration-effect curve. |
| popPK | Shadle_2000 | irrelevant | 0 | 0 | Rizatriptan is a co-administered agent in a study measuring the pharmacokinetics of oral contraceptives (EE and NET), not the subject of PK parameter reporting. |
| popPK | Shah_2022 | relevant | 4 | 2 | The study reports animal PK parameters (AUC, Cmax, Tmax) for rizatriptan, but lacks specific clearance, volume, or rate constants required for population PK modeling. |
| popPK | Sharma_2016 | irrelevant | 0 | 0 | The study focuses on the mucociliary clearance and nasal residence time of microspheres, not on systemic pharmacokinetic parameters (CL, V, ka) of rizatriptan. |
| popPK | Sternieri_2006 | irrelevant | 2 | 0 | The paper is a review discussing drug-drug interactions and metabolism mechanisms of triptans, including rizatriptan, but it does not report original quantitative pharmacokinetic parameter values (CL, V, etc.) for rizatriptan. |
| PGx | Sternieri_2006 | not_relevant | 1 | 0 | The paper is a review of drug-drug interactions and general pharmacokinetics for headache medications, but it does not report any pharmacogenomic effects (gene variant/genotype) on rizatriptan PK/PD. |
| popPK | Sun_2013 | irrelevant | 2 | 0 | This is a systematic review that qualitatively describes pharmacokinetic profiles as "statistically similar" but does not report specific quantitative disposition parameters (CL, V, etc.) for rizatriptan in the provided text. |
| popPK | Tellone_2020 | irrelevant | 2 | 0 | The study is a bioequivalence trial reporting only exposure metrics (AUC, Cmax) and ratios, lacking the specific disposition parameters (CL, V, ka, t1/2) required for population PK modeling. |
| PGx | Tepper_2001 | not_relevant | 0 | 0 | The text discusses general safety and drug-drug interactions for triptans but does not report any pharmacogenomic effects (gene variants) on PK/PD parameters. |
| popPK | Tfelt-Hansen_2000 | irrelevant | 2 | 1 | This is a comparative review of efficacy and general pharmacology, providing only qualitative PK comparisons (e.g., "faster absorption") and therapeutic gains rather than quantitative disposition parameters (CL, V, ka) for rizatriptan. |
| PD | Tfelt-Hansen_2000 | not_relevant | 2 | 1 | The text is a comparative review that lists clinical efficacy outcomes (therapeutic gain percentages) and PK parameters (bioavailability, half-life) but does not report a pharmacodynamic model, concentration-effect curve, or numeric PD parameters (e.g., Emax, EC50) for rizatriptan. |
| popPK | Tfelt-Hansen_2019 | irrelevant | 1 | 0 | This is a review article analyzing the delay of therapeutic effect in migraine trials, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, ka) for rizatriptan. |
| PD | Tfelt-Hansen_2019 | not_relevant | 2 | 1 | The paper is a review that qualitatively discusses the delay of effect and compares time to maximum effect (Emax) with Tmax, but it does not provide a concentration-effect curve, dose-response model, or numeric PD parameters (like EC50 or slope) for rizatriptan. |
| popPK | Van_1999 | irrelevant | 3 | 0 | The study is a pharmacokinetic interaction study that reports only relative fold-changes in AUC and Cmax, without providing absolute quantitative disposition parameters (CL, V, ka) or a compartmental model. |
| popPK | Vishwanathan_2000 | irrelevant | 0 | 0 | The paper describes an analytical method (LC/MS/MS) for quantifying rizatriptan in serum but does not report any pharmacokinetic parameter values (CL, V, ka, etc.). |
| popPK | Wainscott_1998 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological assay measuring receptor binding affinity and efficacy, not pharmacokinetic disposition parameters. |
| popPK | Wang_2007 | relevant | 8 | 4 | The study reports quantitative PK parameters (Tmax, AUC, bioavailability) for rizatriptan in rats, though specific clearance and volume values are not explicitly detailed in the provided abstract. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
