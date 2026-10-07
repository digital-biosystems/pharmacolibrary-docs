<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02B&quot;,&quot;href&quot;:&quot;atc/N02B.md&quot;},{&quot;label&quot;:&quot;aminophenazone&quot;}]"></div>

# aminophenazone

- **generic name:** aminophenazone
- **ATC codes:** `N02BB03`
- **DrugBank:** [DB01424](https://go.drugbank.com/drugs/DB01424) · **PubChem:** [CID 6009](https://pubchem.ncbi.nlm.nih.gov/compound/6009)
- **molar mass:** 231.2936 g/mol (C13H17N3O) — DrugBank
- **groups:** approved, withdrawn

## About

Aminophenazone is a pyrazolone drug that was used as an analgesic and antipyretic to relieve pain and fever. It has been withdrawn from use, reportedly because of the risk of serious blood disorders such as agranulocytosis.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q416503](https://www.wikidata.org/wiki/Q416503) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 05:48 | 1:04 | 0/0/0 | 0/0/0 | 0/0/0 | 104,795/4,899 | einfracz / qwen3.8-27b | 15 | 9/6 | 12/3 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=aminophenazone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2C19` substrate, `CYP2C8` substrate, `CYP2C9` substrate, `CYP2D6` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | kidney | `SLC22A6` inhibitor | DrugBank actor |
| — | adrenal gland | `CYP17A1` substrate | DrugBank actor |
| — | testis | `CYP17A1` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CYP2C18 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 244 matched, 89 returned
- **screened:** 2  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Brune_1983.pdf` | Brune K et al., Non-acidic pyrazoles: inhibition of pro…, Agents and actions (1983) | pd | 4 | [10.1007/BF01971489](https://doi.org/10.1007/BF01971489) | [6604402](https://www.ncbi.nlm.nih.gov/pubmed/6604402) | metadata signals extractable PD data (IC50) |
| `Wang_1999.pdf` | Wang H et al., Demethylation capacity of human fetal a…, Zhongguo yao li xue bao = A… (1999) | pd | 4 | not captured | [10452125](https://www.ncbi.nlm.nih.gov/pubmed/10452125) | metadata signals extractable PD data (concentration-effect) |

<sub>queue written 2026-10-07T05:48:16.286775+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Anliker-Ort_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of metamizole (dipyrone) and its metabolites, not aminophenazone. |
| popPK | Araújo-Silva_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of tramadol and metamizole (dipyrone) in donkeys, not aminophenazone. |
| popPK | Arora_1989 | irrelevant | 1 | 0 | Aminopyrine (aminophenazone) is used only as a diagnostic probe drug in a breath test to assess hepatic microsomal function, with no population PK parameters reported. |
| popPK | Asmardi_1985 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of dipyrone and its metabolite MAA, not aminophenazone. |
| popPK | Baan_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetic interaction between metamizole and voriconazole, and does not report any parameters for aminophenazone. |
| popPK | Bianco_1996 | irrelevant | 0 | 0 | The study uses aminophenazone (as the aminopyrine breath test) only as a diagnostic probe to assess liver function and does not report quantitative disposition parameters (CL, V, ka) for aminophenazone itself. |
| popPK | Bilir_2000 | irrelevant | 1 | 1 | The study uses aminophenazone (listed as aminopyrine) as a probe for liver function in a hepatocyte transplantation trial, and the specific clearance values are contained in Figure 1 which is not provided. |
| PD | Bluth_1982 | not_relevant | 3 | 0 | The paper mentions dose-response relationships qualitatively to compare activities but does not provide numeric PD parameters, curves, or specific dose-effect data for aminophenazone in the text. |
| popPK | Bochenek_1971 | irrelevant | 0 | 0 | no_text gate: only 93 chars of text extracted (&lt; 400) |
| popPK | Brinkman_2025 | irrelevant | 0 | 0 | The paper is a review of metamizole (dipyrone) pharmacology and interactions, and does not report quantitative PK parameters for aminophenazone. |
| popPK | Brody_1979 | irrelevant | 1 | 0 | The paper is a review discussing aminopyrine as a general probe for liver function clearance tests and does not report specific quantitative PK parameters for aminopyrine. |
| popPK | Brogden_1986 | irrelevant | 0 | 0 | The paper is a review of pyrazolone derivatives that mentions aminopyrine only in the context of side effects and general biotransformation, without reporting specific quantitative PK parameters for aminophenazone. |
| popPK | Bukowskyj_1984 | irrelevant | 0 | 0 | The study focuses on theophylline pharmacokinetics and only mentions aminopyrine (aminophenazone) in the context of previous literature, without reporting any quantitative disposition parameters for aminophenazone. |
| popPK | Caille_1977 | irrelevant | 0 | 0 | The paper describes an analytical method for lidocaine, and aminopyrine (the intended drug) is only mentioned as an internal standard, not as the subject of PK modeling. |
| popPK | Cang_2019 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of alkaloids from Compound Kushen Injection (matrine, oxymatrine, etc.), and aminophenazone (likely misidentified as aminopyrine in the abstract) is only used as an internal standard, not the subject drug. |
| popPK | Cazottes_1979 | irrelevant | 0 | 0 | The study uses aminopyrine (likely the intended drug, not aminophenazone) as a probe substance to measure gastric mucosal blood flow, rather than determining its pharmacokinetic parameters. |
| popPK | Cuny_1979 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of acetylsalicylic acid (salicylates), not aminophenazone (which is often confused with aminopyrine, but aminophenazone is a different compound). |
| popPK | DArcy_1984 | irrelevant | 1 | 0 | This is a review of vaccine-drug interactions that mentions aminopyrine (aminophenazone) only as an example of a drug with reported interactions, without providing any quantitative pharmacokinetic parameter values. |
| popPK | Davenport_1973 | irrelevant | 0 | 0 | no_text gate: only 87 chars of text extracted (&lt; 400) |
| popPK | Døssing_1985 | irrelevant | 0 | 0 | This is a review of the effect of exercise on drug metabolism that mentions phenazone (aminophenazone) only as a comparator example without reporting any specific quantitative pharmacokinetic parameter values. |
| popPK | Eichelbaum_1976 | irrelevant | 0 | 0 | The paper discusses aminopyrine (not aminophenazone) and is a review/mechanistic discussion without quantitative population PK parameters for the target drug. |
| popPK | Fazakas_2006 | irrelevant | 0 | 0 | The paper is a review on liver function tests (mentioning aminopyrine breath test) and does not report quantitative pharmacokinetic parameters for aminophenazone. |
| popPK | Fichtl_1978 | irrelevant | 1 | 0 | The study reports the fraction of aminophenazone bound to muscle tissue (in vitro) but does not provide standard pharmacokinetic disposition parameters such as clearance, volume of distribution, or half-life. |
| popPK | Forestier_2010 | irrelevant | 0 | 0 | The study uses aminopyrine as a diagnostic probe in a breath test for liver function and does not report population pharmacokinetic parameters (CL, V, etc.) for the drug. |
| popPK | Fux_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of metamizole (dipyrone) and its metabolites (4-MAA, 4-AA), not aminophenazone. |
| popPK | Gaginella_1985 | irrelevant | 0 | 0 | Aminopyrine is used only as a diagnostic marker for gastric blood flow, not as a subject of pharmacokinetic analysis, and no PK parameters are reported. |
| popPK | Goldberg_1987 | irrelevant | 0 | 0 | The paper is a review of biochemical tests for liver disease and does not report quantitative pharmacokinetic parameters for aminophenazone. |
| popPK | Hanew_1984 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for aminopyrine (antipyrine), not aminophenazone (phenazone), which is a different drug. |
| popPK | Harris_1988 | irrelevant | 0 | 0 | The study investigates doxorubicin pharmacokinetics in rabbits, using aminopyrine (a different probe drug) only for hepatic function assessment, with no data for aminophenazone. |
| popPK | Hashimoto_2001 | irrelevant | 0 | 0 | The study uses aminopyrine clearance as a general marker of liver functional capacity, not as a pharmacokinetic study of aminophenazone disposition parameters. |
| popPK | Hashimoto_2005 | irrelevant | 0 | 0 | The study is a veterinary research paper on rat liver regeneration that uses aminopyrine clearance only as a general liver function probe, not as a pharmacokinetic study of aminophenazone's disposition parameters. |
| popPK | Herold_2000 | irrelevant | 0 | 0 | The study uses aminopyrine (likely confused with aminophenazone) as a substrate for a breath test and does not report PK parameters for aminophenazone. |
| popPK | Herold_2001 | irrelevant | 0 | 0 | The study uses aminopyrine (a different drug) as a substrate for a liver function test (breath test) and does not report pharmacokinetic parameters for aminophenazone. |
| popPK | Herold_2003 | irrelevant | 0 | 0 | The study uses the aminopyrine (aminophenazone) breath test to assess liver function in cirrhotic patients but does not report quantitative pharmacokinetic parameters (CL, V, etc.) for the drug. |
| popPK | Herz_1978 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of aminopyrine, not aminophenazone, and does not report any data for the target drug. |
| popPK | Huang_2018 | irrelevant | 0 | 0 | The study investigates the metabolism and distribution of protopine and allocryptopine in rats, not aminophenazone. |
| popPK | Humphries_1987 | irrelevant | 2 | 0 | The paper focuses on famotidine and reports only that it had no effect on the half-life of aminopyrine (not aminophenazone), with no quantitative PK parameter values provided in the evidence. |
| popPK | Humphries_1991 | irrelevant | 0 | 0 | The paper is a review on omeprazole interactions using aminopyrine (not aminophenazone) as a probe, with no specific PK parameter values provided. |
| popPK | Jeyaraman_2024 | irrelevant | 0 | 0 | The paper is a review of metamizole (dipyrone) and does not report pharmacokinetic parameters for aminophenazone. |
| popPK | Juan_1986 | irrelevant | 0 | 0 | The paper focuses on theophylline pharmacokinetics and uses aminopyrine only as a probe for a breath test, with no quantitative PK parameters reported for aminopyrine itself. |
| popPK | Kawasaki_1992 | irrelevant | 0 | 0 | The study measures aminopyrine and antipyrine, not aminophenazone. |
| PD | Khurshid_2021 | not_relevant | 3 | 5 | The paper reports in vitro enzyme inhibition IC50 values for derivatives of aminophenazone, which is a biochemical potency metric rather than a pharmacodynamic (exposure-response) relationship for the drug itself in a biological system. |
| popPK | Klinger_1969 | irrelevant | 0 | 0 | no_text gate: only 98 chars of text extracted (&lt; 400) |
| popPK | Koch_1976 | irrelevant | 0 | 0 | The study measures gastric mucosal blood flow using the aminopyrine clearance method in animals, rather than reporting pharmacokinetic parameters (CL, V, t1/2) for aminophenazone. |
| popPK | Koizumi_1974 | irrelevant | 0 | 0 | The provided evidence contains no scientific content, only software metadata. |
| popPK | Krishnaswamy_1984 | irrelevant | 2 | 0 | Aminopyrine is a distinct drug from aminophenazone and serves as a probe, and no quantitative PK values are provided in the text. |
| popPK | Lane_1988 | irrelevant | 2 | 0 | The paper is a review comparing drug substrates for liver function tests (aminopyrine/aminophenazone, caffeine, methacetin) and does not report original quantitative pharmacokinetic parameters for aminophenazone. |
| popPK | Lau_1997 | irrelevant | 0 | 0 | The study focuses on hepatocellular carcinoma and hepatic function tests (ICG, etc.), with no mention of aminophenazone or its pharmacokinetic parameters. |
| popPK | Leclercq_1999 | irrelevant | 0 | 0 | The study focuses on chlorzoxazone and aminopyrine as CYP probes; aminophenazone is a different drug and is not studied here. |
| popPK | Limlomwongse_1976 | irrelevant | 0 | 0 | The study uses aminopyrine (the probe drug) to assess gastric mucosal blood flow, but does not report pharmacokinetic parameters (CL, V, etc.) for aminophenazone or its metabolites. |
| popPK | Limlomwongse_1979 | irrelevant | 0 | 0 | The study uses aminopyrine (aminophenazone) as a marker for gastric mucosal blood flow, not as the subject of pharmacokinetic modeling. |
| popPK | Lotterer_1992 | irrelevant | 0 | 0 | The paper investigates serum fibrosis markers (PIIINP, laminin) in cirrhosis and does not report any pharmacokinetic parameters for aminophenazone. |
| popPK | Lykke_2019 | irrelevant | 0 | 0 | The study measures aminopyrine (a different drug) breath test results, not aminophenazone pharmacokinetic parameters. |
| PGx | Madro_2002 | not_relevant | 0 | 0 | The study investigates the effect of interferon alpha on CCl4-induced liver injury in rats and uses aminophenazone only as a functional test of liver metabolism; it does not report any gene variant or genotype influencing aminophenazone PK/PD. |
| popPK | Matsumura_1999 | irrelevant | 0 | 0 | The study investigates the interaction between griseofulvin and warfarin in rats, and does not report pharmacokinetic parameters for aminophenazone. |
| popPK | Mehta_1990 | irrelevant | 1 | 1 | Aminophenazone (antipyrine) is used only as a probe drug in a general malnutrition study, and no quantitative disposition parameters for it are reported. |
| popPK | Merkel_1991 | irrelevant | 1 | 0 | The study uses aminophenazone only as a probe drug for the aminopyrine breath test to assess liver function prognosis, and no specific PK parameters (e.g., CL, Vd) for the drug are reported. |
| popPK | Müller-Lissner_1981 | irrelevant | 0 | 0 | The study focuses on aminopyrine, not aminophenazone, and measures gastric clearance/secretion rather than systemic PK parameters for aminophenazone. |
| popPK | Nadai_1998 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of antipyrine (a different drug) and enzyme activities, not aminophenazone. |
| popPK | Noordhoek_1978 | irrelevant | 0 | 0 | no_text gate: only 178 chars of text extracted (&lt; 400) |
| popPK | OMalley_1975 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of antipyrine (a different drug) and the drug fenfluramine, with aminopyrine (a different drug) used only in vitro as a probe. |
| popPK | Ocker_2005 | irrelevant | 0 | 0 | The paper uses aminopyrine as a diagnostic probe for liver function in hepatitis C patients, not to model the pharmacokinetic disposition parameters of aminophenazone. |
| popPK | Ohno_1993 | irrelevant | 0 | 0 | The study uses aminopyrine (a structural analog, not aminophenazone) as a diagnostic probe for hepatic function, not as the subject drug for PK parameter extraction. |
| popPK | Parker_1996 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of mycophenolate mofetil in cirrhotic patients, and aminopyrine is used only as a diagnostic probe for hepatic function, not as the subject of PK analysis. |
| popPK | Pelkonen_1991 | irrelevant | 0 | 0 | The study investigates the effect of medetomidine enantiomers on aminopyrine metabolism, using aminopyrine as a probe substrate rather than studying its intrinsic pharmacokinetics. |
| popPK | Pimstone_1994 | irrelevant | 0 | 0 | The paper is a study of liver function using a technetium-labeled analog, and aminopyrine is only used as a secondary diagnostic test for correlation, not as the subject of PK parameter extraction. |
| popPK | Powell_1983 | irrelevant | 0 | 0 | The paper is a review of H2-antagonist drug interactions and does not report any quantitative pharmacokinetic parameters for aminophenazone. |
| popPK | Regårdh_1986 | irrelevant | 1 | 0 | The study focuses on omeprazole, and aminophenazone (referred to as antipyrine or aminopyrine) is only a comparator agent without reported quantitative parameters. |
| popPK | Ruppin_1984 | irrelevant | 0 | 0 | no_text gate: only 53 chars of text extracted (&lt; 400) |
| popPK | Sato_1986 | irrelevant | 0 | 0 | The study investigates gastric mucosal hemodynamics and uses aminopyrine (a probe drug) only to measure blood flow, not to determine the pharmacokinetic parameters of aminophenazone. |
| popPK | Sato_1994 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for imipramine, not aminophenazone. |
| popPK | Schwenk_1992 | irrelevant | 0 | 0 | The study is an in-vitro isolation and metabolism of crypts using aminopyrine (a different probe), not a pharmacokinetic study of aminophenazone. |
| popPK | Semb_1972 | irrelevant | 0 | 0 | no_text gate: only 124 chars of text extracted (&lt; 400) |
| popPK | Sensing_1983 | irrelevant | 0 | 0 | The study measures the pharmacokinetics of aminopyrine (dimethylaminoantipyrine), which is a different drug from the subject drug aminophenazone. |
| popPK | Sewing_1975 | irrelevant | 0 | 0 | no_text gate: only 43 chars of text extracted (&lt; 400) |
| popPK | Sonnenberg_1980 | irrelevant | 0 | 0 | The study investigates aminopyrine (dimethylaminoantipyrine), not aminophenazone (phenazone). |
| popPK | Stintzing_2009 | irrelevant | 0 | 0 | The study investigates liver function in hepatitis C patients using the aminopyrine breath test (aminopyrine, not aminophenazone) and does not report PK parameters for aminophenazone. |
| PD | Strubelt_1980 | not_relevant | 0 | 0 | The paper reports a dose-response relationship for lanthanides (praseodymium, etc.) and the protective effect of silybin, but aminophenazone is only mentioned as a substrate for a liver enzyme (demethylase) whose activity was measured; no PD or exposure-response relationship for aminophenazone itself is reported. |
| PD | Tarachowski_1991 | not_relevant | 1 | 0 | The text mentions aminophenazone only as a marker for metabolic classification and discusses general forecasting models without providing specific numeric PD parameters or concentration-effect data. |
| popPK | Uetrecht_1995 | irrelevant | 0 | 0 | The study focuses on the in-vitro chemical oxidation mechanism of aminopyrine by hypochlorite and contains no pharmacokinetic parameters. |
| popPK | Van_1987 | irrelevant | 1 | 0 | The study investigates the pharmacokinetics of antipyrine in mice, not aminophenazone, which is a different drug. |
| popPK | Vesell_1976 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of antipyrine and the in-vitro metabolism of aminopyrine (a different compound), with aminophenazone (phenazone) not mentioned or measured. |
| popPK | Volz_1980 | irrelevant | 4 | 5 | The paper provides a review of pharmacokinetic parameters for aminophenazone (aminopyrine) and its metabolites, but it lacks the specific compartmental clearance, volume of distribution, and intercompartmental clearance values required for population-PK modeling, and includes irrelevant content regarding paracetamol. |
| popPK | Wagner_1970 | irrelevant | 0 | 0 | no_text gate: only 79 chars of text extracted (&lt; 400) |
| popPK | Walter-Sack_1996 | irrelevant | 0 | 0 | This is a review article discussing general principles of diet effects on drug metabolism, with no original quantitative pharmacokinetic parameter values reported for aminophenazone. |
| PD | Wang_1999 | not_relevant | 0 | 0 | The paper reports in vitro metabolic capacity (demethylation rates) for aminophenazone, not a pharmacodynamic exposure-response or dose-response relationship. |
| popPK | Watermeyer_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetic interaction between metamizole and quetiapine, and does not report any parameters for aminophenazone. |
| popPK | Werner_1982 | irrelevant | 0 | 0 | no_text gate: only 115 chars of text extracted (&lt; 400) |
| popPK | Windorfer_1973 | irrelevant | 0 | 0 | no_text gate: only 135 chars of text extracted (&lt; 400) |
| popPK | Zysset_1986 | irrelevant | 0 | 0 | no_text gate: only 72 chars of text extracted (&lt; 400) |
| popPK | Zysset_1991 | irrelevant | 0 | 0 | The study examines the pharmacokinetics of caffeine, not aminophenazone (aminopyrine), which is only mentioned as a context for liver function tests. |
| popPK | unknown_1991 | irrelevant | 0 | 0 | no_text gate: only 109 chars of text extracted (&lt; 400) |
| PD | unknown_1991 | not_relevant | 0 | 0 | The provided text is only a header for a conference abstract collection and contains no specific data, results, or PD parameters for aminophenazone. |
| popPK | van_1986 | irrelevant | 2 | 1 | The study focuses on enzyme induction correlations using aminopyrine (often confused with aminophenazone in titles, but distinct here or used as a comparator) and hexobarbital as probe substrates, not the detailed population PK parameter estimation for aminophenazone. |
| PD | von_1980 | not_relevant | 3 | 1 | The paper describes a clinical trial methodology and reports qualitative dose-response findings for aspirin, but it does not provide numeric PD parameters or concentration-effect data for aminophenazone. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
