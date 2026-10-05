<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07E&quot;,&quot;href&quot;:&quot;atc/A07E.md&quot;},{&quot;label&quot;:&quot;cromoglicic acid&quot;}]"></div>

# cromoglicic acid

- **generic name:** cromoglicic acid
- **ATC codes:** `A07EB01`, `D11AH03`, `R01AC01`, `R03BC01`, `S01GX01`
- **DrugBank:** [DB01003](https://go.drugbank.com/drugs/DB01003) · **PubChem:** [CID 2882](https://pubchem.ncbi.nlm.nih.gov/compound/2882)
- **molar mass:** 468.3665 g/mol (C23H16O11) — DrugBank
- **groups:** approved, investigational

## About

Cromoglicic acid is an antiallergic drug used to treat conditions such as asthma, conjunctivitis, mastocytosis, food allergy, and inflammatory bowel diseases. It is an approved medicine available in several forms, including inhalers, nasal and eye preparations, skin products, and intestinal anti-inflammatory treatments.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q416427](https://www.wikidata.org/wiki/Q416427) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| cromoglicic_acid | metabolite | 468.366 | C23H16O11 | DrugBank | [2882](https://pubchem.ncbi.nlm.nih.gov/compound/2882) | Neale_1986 |
| sodium cromoglycate | metabolite | 512.334 | C23H14Na2O11 | PubChem | [27503](https://pubchem.ncbi.nlm.nih.gov/compound/27503) | Neale_1986 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 19:35 | 4:20 | 0/0/2 | 0/0/0 | 0/0/0 | 72,111/9,382 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 2/3 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q22 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Fuller_1983_reference](drugs/drug_cromoglicic_acid/CromoglicicAcid_Fuller1983_reference.md) | — | 1-compartment (no model) | 2 | Fuller RW et al., The pharmacokinetic assessment of sodiu…, The Journal of pharmacy and… (1983) | [10.1111/j.2042-7158.1983.tb02936.x](https://doi.org/10.1111/j.2042-7158.1983.tb02936.x) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.857). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Neale_1986_reference](drugs/drug_cromoglicic_acid/CromoglicicAcid_Neale1986_reference.md) | — | 1-compartment (no model) | 2 | Neale MG et al., The pharmacokinetics of sodium cromogly…, British journal of clinical… (1986) | [10.1111/j.1365-2125.1986.tb02905.x](https://doi.org/10.1111/j.1365-2125.1986.tb02905.x) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=cromoglicic_acid) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: HSP90AA1 (inhibitor), S100P (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 95 matched, 61 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 2  ·  extracted 0  ·  needs_review 2  ·  rejected 0  ·  stale 2
- **scholar-agent fallback query used:** True

## Full text wanted

_9 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Fisher_1985.pdf` | Fisher AN et al., The nasal absorption of sodium cromogly…, The Journal of pharmacy and… (1985) | popPK | 10 | [10.1111/j.2042-7158.1985.tb04927.x](https://doi.org/10.1111/j.2042-7158.1985.tb04927.x) | [2858525](https://pubmed.ncbi.nlm.nih.gov/2858525) | The study reports quantitative pharmacokinetic parameters (clearance, elimination rate constant, absorption rate constant) for sodium cromoglycate in rats. |
| `Fuller_1983.pdf` | Fuller RW et al., The pharmacokinetic assessment of sodiu…, The Journal of pharmacy and… (1983) | popPK | 10 | [10.1111/j.2042-7158.1983.tb02936.x](https://doi.org/10.1111/j.2042-7158.1983.tb02936.x) | [6134796](https://pubmed.ncbi.nlm.nih.gov/6134796) | The paper reports quantitative pharmacokinetic parameters (ka, kelim, Vd, CL) for sodium cromoglycate (cromoglicic acid) in humans. |
| `Neale_1986.pdf` | Neale MG et al., The pharmacokinetics of sodium cromogly…, British journal of clinical… (1986) | popPK | 10 | [10.1111/j.1365-2125.1986.tb02905.x](https://doi.org/10.1111/j.1365-2125.1986.tb02905.x) | [3094571](https://pubmed.ncbi.nlm.nih.gov/3094571) | The study reports quantitative pharmacokinetic parameters (absorption rate constants and amounts absorbed) for sodium cromoglycate in humans, with specific numeric values provided in the abstract. |
| `Abd-Elaziz_2020.pdf` | Abd-Elaziz K et al., Improved bioavailability of cromolyn so…, European clinical respirato… (2020) | popPK | 8 | [10.1080/20018525.2020.1809083](https://doi.org/10.1080/20018525.2020.1809083) | [32944204](https://pubmed.ncbi.nlm.nih.gov/32944204) | The study reports quantitative PK parameters (Cmax, AUC, bioavailability) for cromolyn sodium (cromoglicic acid) in humans, though derived parameters like clearance and volume are not explicitly listed. |
| `Joyce_2022.pdf` | Joyce P et al., Chitosan nanoparticles facilitate impro…, International journal of ph… (2022) | popPK | 8 | [10.1016/j.ijpharm.2021.121382](https://doi.org/10.1016/j.ijpharm.2021.121382) | [34919999](https://pubmed.ncbi.nlm.nih.gov/34919999) | The study reports oral pharmacokinetics and bioavailability of cromoglycate in rats, but specific quantitative PK parameters (CL, V, t1/2) are not explicitly listed in the provided text, only relative bioavailability increases. |
| `Richards_1992.pdf` | Richards R et al., Inhaled histamine increases the rate of…, British journal of clinical… (1992) | popPK | 8 | [10.1111/j.1365-2125.1992.tb04048.x](https://doi.org/10.1111/j.1365-2125.1992.tb04048.x) | [1576060](https://pubmed.ncbi.nlm.nih.gov/1576060) | The study reports qualitative changes in absorption rate and total amount absorbed for sodium cromoglycate in humans, but specific quantitative PK parameter values (e.g., ka, CL, V) are not explicitly listed in the provided text. |
| `Taylor_1989.pdf` | Taylor KM et al., The influence of liposomal encapsulatio…, Pharmaceutical research (1989) | popPK | 8 | [10.1023/a:1015917918130](https://doi.org/10.1023/a:1015917918130) | [2508078](https://pubmed.ncbi.nlm.nih.gov/2508078) | The study reports pharmacokinetic parameters (absorption rate constants) for cromoglicic acid in humans, but specific numeric values are not present in the provided text. |
| `Yanni_1997.pdf` | Yanni JM et al., Comparative effects of topical ocular a…, Annals of allergy, asthma &… (1997) | pd | 5 | [10.1016/S1081-1206(10)63063-3](https://doi.org/10.1016/S1081-1206(10)63063-3) | [9433371](https://www.ncbi.nlm.nih.gov/pubmed/9433371) | metadata signals extractable PD data (IC50) |
| `Lawton_1995.pdf` | Lawton GP et al., Adrenergic and cromolyn sodium modulati…, The Journal of surgical res… (1995) | pd | 4 | [10.1006/jsre.1995.1016](https://doi.org/10.1006/jsre.1995.1016) | [7530310](https://www.ncbi.nlm.nih.gov/pubmed/7530310) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-04T19:32:54.618247+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahrens_1984 | irrelevant | 0 | 0 | The paper is a review of albuterol pharmacokinetics and only mentions cromolyn (cromoglicic acid) as a comparator for maintenance therapy without providing any quantitative PK parameters for it. |
| popPK | Alhadrami_2021 | irrelevant | 0 | 0 | The paper is an in-silico and in-vitro mechanistic study on SARS-CoV-2 MPro inhibition, reporting no pharmacokinetic parameters for cromoglicic acid. |
| PD | Alhadrami_2021 | not_relevant | 2 | 2 | The paper reports single-point IC50 and Ki values for enzyme inhibition, which are potency metrics rather than a pharmacodynamic exposure-response or dose-response curve with parameters like Emax or slope. |
| popPK | Behrend-Keim_2023 | irrelevant | 0 | 0 | The study focuses on the formulation and aerosol performance of gelatin microspheres for pulmonary delivery, not on the pharmacokinetic disposition parameters (CL, V, etc.) of cromoglicic acid. |
| popPK | Bernstein_1985 | irrelevant | 0 | 0 | The paper is a clinical review of cromolyn sodium's therapeutic use in asthma and does not report quantitative pharmacokinetic parameters such as clearance, volume, or half-life. |
| PD | Bernstein_1985 | not_relevant | 1 | 0 | The text is a qualitative review that mentions dose-response effects exist but provides no numeric PD parameters, curves, or specific exposure-response data. |
| popPK | Bigby_1993 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effect of nedocromil sodium on bronchomotor response, not the pharmacokinetics of cromoglicic acid. |
| PD | Bigby_1993 | not_relevant | 4 | 2 | The study reports a dose-response relationship for nedocromil sodium (not cromoglicic acid) and provides only qualitative/summary results (p-values) without numeric PD parameters or detailed effect-vs-dose data. |
| popPK | Briffa_2011 | irrelevant | 0 | 0 | The study is a clinical trial assessing the bronchoprotective effect of sodium cromoglycate on airway reactivity to mannitol, not a pharmacokinetic study. |
| popPK | Bruderman_1990 | irrelevant | 0 | 0 | The study focuses on bronchial hyperreactivity and clinical response to cromolyn sodium, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| PD | Bruderman_1990 | not_relevant | 3 | 2 | The paper reports a qualitative change in bronchial hyperreactivity (BHR) after treatment but does not provide numeric dose-response parameters (e.g., PC20 values) or concentration-effect curves for cromoglicic acid. |
| popPK | Bryson_1992 | irrelevant | 0 | 0 | The paper is a review of fluticasone propionate, and cromoglicic acid is only mentioned as a comparator agent without any pharmacokinetic data. |
| PD | Bryson_1992 | not_relevant | 0 | 0 | The paper is a review of fluticasone propionate and does not report any pharmacodynamic or exposure-response data for cromoglicic acid. |
| PGx | Choi_2015 | not_relevant | 0 | 0 | The paper investigates the anti-fibrotic efficacy of cromolyn sodium in vitro but does not report any pharmacogenomic effects (gene variants) on its pharmacokinetic or pharmacodynamic parameters. |
| popPK | Clissold_1984 | irrelevant | 0 | 0 | The paper is a review of budesonide, and cromoglicic acid is only mentioned as a comparator agent without any pharmacokinetic data. |
| PD | Clissold_1984 | not_relevant | 0 | 0 | The paper is a review of budesonide and does not report any pharmacodynamic or exposure-response data for cromoglicic acid. |
| popPK | Cockcroft_2005 | irrelevant | 0 | 0 | The paper is a clinical review of asthma management guidelines focusing on beta2-agonists, with no pharmacokinetic data for cromoglicic acid. |
| PD | Cockcroft_2005 | not_relevant | 0 | 0 | The text is a clinical review of beta2-agonist usage guidelines and mentions cromones only as a class of anti-inflammatory agents without providing any pharmacodynamic data, exposure-response analysis, or numeric parameters for cromoglicic acid. |
| popPK | Fouke_1988 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effect of cromolyn sodium on ozone-induced airway resistance in baboons, not its pharmacokinetic parameters. |
| PD | Fouke_1988 | not_relevant | 1 | 0 | The paper reports a qualitative protective effect of cromolyn sodium on ozone-induced airway resistance but provides no concentration-effect data, dose-response curve, or numeric PD parameters (e.g., Emax, EC50) for the drug. |
| popPK | Friedrich_1984 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cloxacepride on mast cells, with cromoglicic acid (cromolyn sodium) serving only as an inactive reference compound, and no pharmacokinetic parameters are reported. |
| PD | Friedrich_1984 | not_relevant | 0 | 0 | The paper reports PD parameters for cloxacepride, not cromoglicic acid (cromolyn sodium is only mentioned as an inactive reference compound). |
| popPK | Gallo_2017 | irrelevant | 0 | 0 | The study focuses on the formulation and in vitro characterization of microparticles for pulmonary delivery, reporting no quantitative pharmacokinetic parameters (CL, V, ka, etc.) for cromoglicic acid. |
| PGx | García-Marcos_2003 | not_relevant | 0 | 0 | The paper discusses antileukotrienes and mentions cromoglicic acid only as a comparator for efficacy, without reporting any pharmacogenomic effects on its PK or PD parameters. |
| popPK | Georgopoulos_1989 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of bronchospasm protection and does not report any pharmacokinetic parameters for cromolyn sodium. |
| PD | Georgopoulos_1989 | not_relevant | 2 | 1 | The study reports qualitative findings (no protective effect) and aggregate dose-response curve metrics (AUC) for cromolyn sodium but does not provide numeric PD parameters (e.g., EC50, Emax) or individual concentration-effect data for the drug. |
| popPK | Grant_1990 | irrelevant | 0 | 0 | The paper is a review of ketotifen, and cromoglicic acid is only mentioned as a comparator agent without any pharmacokinetic data provided. |
| PD | Grant_1990 | not_relevant | 0 | 0 | The text is a review of ketotifen and only qualitatively mentions cromoglicic acid as a comparator without providing any pharmacodynamic data, exposure-response analysis, or numeric PD parameters for it. |
| popPK | Hornby_1996 | irrelevant | 0 | 0 | The paper is a review of pulmonary pharmacology in pregnancy and mentions cromolyn only qualitatively without providing any quantitative pharmacokinetic parameters. |
| popPK | Horstman_1986 | irrelevant | 0 | 0 | The study investigates airway sensitivity to sulfur dioxide in asthmatics and does not report pharmacokinetic parameters for cromoglicic acid. |
| PD | Horstman_1986 | not_relevant | 0 | 0 | The study investigates the dose-response relationship to sulfur dioxide (SO2), not cromoglicic acid; cromolyn sodium is only mentioned as an excluded medication. |
| popPK | Johnson_1979 | irrelevant | 0 | 0 | The paper describes in vitro mechanistic studies on mast cells and cholinergic stimulation, containing no pharmacokinetic parameters for cromoglicic acid. |
| PD | Johnson_1979 | not_relevant | 3 | 1 | The text describes a qualitative biphasic dose-response mechanism involving cholinergic stimulation but provides no numeric PD parameters, concentration-effect curves, or quantitative data. |
| popPK | Joyce_2022 | relevant | 8 | 2 | The study reports oral pharmacokinetics and bioavailability of cromoglycate in rats, but specific quantitative PK parameters (CL, V, t1/2) are not explicitly listed in the provided text, only relative bioavailability increases. |
| popPK | Juniper_1986 | irrelevant | 0 | 0 | The study is a pharmacodynamic trial measuring airway responsiveness and does not report any pharmacokinetic parameters for cromoglicic acid. |
| popPK | Koenig_1988 | irrelevant | 0 | 0 | The study is a pharmacodynamic dose-response assessment of bronchoconstriction inhibition, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Köhler_2003 | irrelevant | 2 | 2 | The study uses sodium cromoglycate as a marker for lung deposition and reports absorption half-life, but does not provide a compartmental PK model or standard disposition parameters (CL, V) for the drug itself. |
| popPK | Lawton_1995 | irrelevant | 0 | 0 | no_text gate: only 73 chars of text extracted (&lt; 400) |
| popPK | Leonardi_2003 | irrelevant | 0 | 0 | The study is a clinical efficacy trial comparing anti-allergic effects in a conjunctival challenge model and does not report pharmacokinetic parameters. |
| PD | Leonardi_2003 | not_relevant | 2 | 1 | The study reports clinical efficacy comparisons (p-values) in a challenge model but does not provide concentration-effect data, PK/PD modeling, or numeric PD parameters (e.g., Emax, EC50) for cromoglicic acid. |
| popPK | McTavish_1989 | irrelevant | 0 | 0 | The paper is a review of azelastine, and cromoglicic acid is only mentioned as a comparator agent without any pharmacokinetic parameters reported for it. |
| PD | McTavish_1989 | not_relevant | 0 | 0 | The text is a review of azelastine and only mentions cromoglicic acid as a comparator in clinical efficacy studies, without providing any pharmacodynamic or exposure-response data for cromoglicic acid. |
| popPK | McTavish_1990 | irrelevant | 0 | 0 | The paper is a review of terfenadine, and cromoglicic acid is only mentioned as a co-administered agent without any pharmacokinetic parameters reported. |
| PD | McTavish_1990 | not_relevant | 0 | 0 | The paper is a review of terfenadine and does not report any pharmacodynamic or exposure-response data for cromoglicic acid. |
| popPK | Parish_1993 | irrelevant | 0 | 0 | no_text gate: only 41 chars of text extracted (&lt; 400) |
| popPK | Peng_2023 | irrelevant | 0 | 0 | The study investigates mast cell biology and lymphatic function in mice using cromolyn sodium as a pharmacological tool, but does not report any pharmacokinetic parameters for cromoglicic acid. |
| popPK | Porcelli_1981 | irrelevant | 0 | 0 | The study is a mechanistic investigation of pulmonary vascular tone using cromolyn sodium as a mast-cell stabilizer, not a pharmacokinetic study reporting disposition parameters for cromoglicic acid. |
| PD | Porcelli_1981 | not_relevant | 1 | 0 | The paper describes qualitative effects of cromolyn sodium on histamine responsiveness in an animal model but does not provide numeric PD parameters or extractable concentration-effect curves. |
| popPK | Richards_1988 | irrelevant | 2 | 0 | The study reports AUC and correlation with efficacy but does not provide specific quantitative disposition parameters like clearance, volume, or half-life. |
| popPK | Richards_1992 | relevant | 8 | 2 | The study reports qualitative changes in absorption rate and total amount absorbed for sodium cromoglycate in humans, but specific quantitative PK parameter values (e.g., ka, CL, V) are not explicitly listed in the provided text. |
| popPK | Shoup_2021 | irrelevant | 0 | 0 | The study focuses on the mechanism of action (Aβ clearance) and PET imaging of fluorinated derivatives, not the pharmacokinetic disposition parameters (CL, V, t1/2) of cromoglicic acid. |
| popPK | Taburet_1990 | irrelevant | 0 | 0 | The paper is a review that explicitly states "Little is known regarding the pharmacokinetics of cromoglycate" and provides no quantitative PK parameters for the drug. |
| popPK | Taylor_1989 | relevant | 8 | 2 | The study reports pharmacokinetic parameters (absorption rate constants) for cromoglicic acid in humans, but specific numeric values are not present in the provided text. |
| popPK | Vidgren_1991 | irrelevant | 2 | 2 | The study reports pulmonary clearance half-lives (55 min, &lt;10 min) for inhaled particles, which are local deposition/clearance kinetics rather than systemic population pharmacokinetic parameters (CL, V, ka) for the drug. |
| popPK | Wilson_2018 | irrelevant | 0 | 0 | The paper describes a computational method (PathFX) for drug safety and efficacy analysis and does not report any pharmacokinetic parameters for cromoglicic acid. |
| PD | Wilson_2018 | not_relevant | 0 | 0 | The paper describes a computational method (PathFX) for identifying drug-disease associations via protein interaction networks and does not report any pharmacokinetic or pharmacodynamic data, exposure-response relationships, or numeric PD parameters for cromoglicic acid or any other drug. |
| popPK | Wright_1990 | irrelevant | 0 | 0 | The study investigates the bronchial response to inhaled sodium metabisulfite and does not report pharmacokinetic parameters for cromoglicic acid. |
| popPK | Yanni_1997 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on mast cells, not a pharmacokinetic study reporting quantitative disposition parameters for cromoglicic acid. |
| PD | Yanni_1997 | not_relevant | 0 | 0 | The paper focuses on the comparative effects of topical ocular anti-allergy drugs on human conjunctival mast cells and does not report a pharmacokinetic or pharmacodynamic exposure-response relationship for cromoglicic acid with numeric PD parameters. |
| popPK | Yasmeen_2020 | irrelevant | 0 | 0 | The study investigates in-vitro binding interactions between cromolyn sodium and BSA using spectroscopic and computational methods, reporting no pharmacokinetic parameters. |
| PD | Yasmeen_2020 | not_relevant | 0 | 0 | The paper investigates the molecular binding interaction between cromolyn sodium and bovine serum albumin using spectroscopic and computational methods, reporting no pharmacodynamic, exposure-response, or dose-response data. |
| popPK | Yoshimi_1992 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding cromoglicic acid pharmacokinetics. |
| popPK | Zhang_2017 | irrelevant | 0 | 0 | The study investigates the role of mast cells and IL-9 in vein graft disease, using cromolyn (cromoglicic acid) only as a therapeutic agent to test a hypothesis, without reporting any pharmacokinetic parameters. |
| popPK | Zhang_2023 | irrelevant | 0 | 0 | The study investigates the mechanism of uric acid-induced renal injury and the therapeutic effect of sodium cromoglycate, but does not report pharmacokinetic parameters for cromoglicic acid. |
| popPK | Zhou_2022 | irrelevant | 0 | 0 | The study focuses on the nephrotoxicity of adefovir, and cromoglicic acid (sodium cromoglycate) is used only as a therapeutic agent to ameliorate fibrosis, not as the subject of pharmacokinetic analysis. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-04 19:33 UTC</sub>
