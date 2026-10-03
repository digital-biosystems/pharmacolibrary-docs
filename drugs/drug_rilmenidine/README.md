<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02A&quot;,&quot;href&quot;:&quot;atc/C02A.md&quot;},{&quot;label&quot;:&quot;rilmenidine&quot;}]"></div>

# rilmenidine

- **generic name:** rilmenidine
- **ATC codes:** `C02AC06`
- **DrugBank:** [DB11738](https://go.drugbank.com/drugs/DB11738) · **PubChem:** [CID 68712](https://pubchem.ncbi.nlm.nih.gov/compound/68712)
- **molar mass:** 180.251 g/mol (C10H16N2O) — DrugBank
- **groups:** approved, withdrawn

## About

**Description.** Rilmenidine has been used in trials studying the treatment of Hypertension and Chronic Kidney Disease.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-30 05:51 | 2:40 | 0/0/0 | 1/0/0 | 0/0/0 | 13,293/856 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 1/3 | 3/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rat</span> | [Kim_2009_MPE](drugs/drug_rilmenidine/pd_Kim_2009_MPE.md) | mechanical withdrawal threshold (%MPE) ← morphine, brimonidine, rilmenidine (intrathecal dose) · direct log-linear effect | — | Kim YK et al., Comparison of antiallodynic effect of i…, Korean journal of anesthesi… (2009) | [10.4097/kjae.2009.56.4.425](https://doi.org/10.4097/kjae.2009.56.4.425) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=rilmenidine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: ADRA2A (unknown), ADRA2C (modulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 76 matched, 72 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_12 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Genissel_1988.pdf` | Genissel P et al., Pharmacokinetics of rilmenidine in heal…, The American journal of car… (1988) | popPK | 10 | [10.1016/0002-9149(88)90465-1](https://doi.org/10.1016/0002-9149(88)90465-1) | [2894158](https://pubmed.ncbi.nlm.nih.gov/2894158) | The text explicitly reports quantitative pharmacokinetic parameters for rilmenidine, including volume of distribution (5 l/kg), clearance (450 ml/min), and half-life (8 hours). |
| `Genissel_1989.pdf` | Genissel P et al., Pharmacokinetics of rilmenidine, The American journal of med… (1989) | popPK | 10 | [10.1016/0002-9343(89)90500-7](https://doi.org/10.1016/0002-9343(89)90500-7) | [2782323](https://pubmed.ncbi.nlm.nih.gov/2782323) | The text explicitly reports quantitative pharmacokinetic parameters for rilmenidine, including volume of distribution (5 L/kg), clearance (450 ml/min), and half-life (8 hours). |
| `Aparicio_1994.pdf` | Aparicio M et al., Pharmacokinetics of rilmenidine in pati…, The American journal of car… (1994) | popPK | 9 | [10.1016/0002-9149(94)90041-8](https://doi.org/10.1016/0002-9149(94)90041-8) | [7998585](https://pubmed.ncbi.nlm.nih.gov/7998585) | The study reports quantitative pharmacokinetic parameters for rilmenidine, including specific values for terminal half-life (30-42 hours), renal clearance (330 mL/min in healthy volunteers), and hemodialysance (85 mL/min). |
| `Singlas_1988.pdf` | Singlas E et al., Pharmacokinetics of rilmenidine, The American journal of car… (1988) | popPK | 9 | [10.1016/0002-9149(88)90466-3](https://doi.org/10.1016/0002-9149(88)90466-3) | [2894159](https://pubmed.ncbi.nlm.nih.gov/2894159) | The paper is a relevant PK study for rilmenidine, but the evidence only provides relative percentage changes (e.g., -50% clearance) rather than absolute quantitative parameter values (e.g., L/h, L). |
| `Dollery_1988.pdf` | Dollery CT et al., Dose and concentration-effect relations…, The American journal of car… (1988) | pd | 5 | not captured | [2894161](https://www.ncbi.nlm.nih.gov/pubmed/2894161) | metadata signals extractable PD data (concentration-effect) |
| `Wethmar_2001.pdf` | Wethmar U et al., Interactions of ligands at angiotensin…, Japanese journal of pharmac… (2001) | pd | 5 | [10.1254/jjp.85.167](https://doi.org/10.1254/jjp.85.167) | [11286399](https://www.ncbi.nlm.nih.gov/pubmed/11286399) | metadata signals extractable PD data (IC50) |
| `de_2002.pdf` | de Visser SJ et al., Concentration-effect relationships of t…, Clinical pharmacology and t… (2002) | pd | 5 | [10.1067/mcp.2002.127638](https://doi.org/10.1067/mcp.2002.127638) | [12386644](https://www.ncbi.nlm.nih.gov/pubmed/12386644) | metadata signals extractable PD data (Concentration-effect) |
| `Avellar_1996.pdf` | Avellar MC et al., Are imidazoline receptors involved in s…, General pharmacology (1996) | pd | 4 | [10.1016/s0306-3623(96)00038-9](https://doi.org/10.1016/s0306-3623(96)00038-9) | [8981080](https://www.ncbi.nlm.nih.gov/pubmed/8981080) | metadata signals extractable PD data (concentrationeffect) |
| `Evans_1994.pdf` | Evans RG et al., Characterization of binding sites for […, Clinical and experimental p… (1994) | pd | 4 | [10.1111/j.1440-1681.1994.tb02566.x](https://doi.org/10.1111/j.1440-1681.1994.tb02566.x) | [7813124](https://www.ncbi.nlm.nih.gov/pubmed/7813124) | metadata signals extractable PD data (IC50) |
| `Hosseini_1997.pdf` | Hosseini AR et al., [3H]2-(2-Benzofuranyl)-2-imidazoline, a…, Naunyn-Schmiedeberg's archi… (1997) | pd | 4 | [10.1007/pl00004911](https://doi.org/10.1007/pl00004911) | [9007853](https://www.ncbi.nlm.nih.gov/pubmed/9007853) | metadata signals extractable PD data (IC50) |
| `Pineda_1993.pdf` | Pineda J et al., Stimulatory effects of clonidine, ciraz…, Naunyn-Schmiedeberg's archi… (1993) | pd | 4 | [10.1007/BF00164789](https://doi.org/10.1007/BF00164789) | [7901773](https://www.ncbi.nlm.nih.gov/pubmed/7901773) | metadata signals extractable PD data (Emax) |
| `Ruiz-Ortega_1995.pdf` | Ruiz-Ortega JA et al., The stimulatory effect of clonidine thr…, Naunyn-Schmiedeberg's archi… (1995) | pd | 4 | [10.1007/BF00176764](https://doi.org/10.1007/BF00176764) | [7477433](https://www.ncbi.nlm.nih.gov/pubmed/7477433) | metadata signals extractable PD data (Emax) |

<sub>queue written 2026-09-30T05:51:23.895696+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Avellar_1996 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of receptor mechanisms in rat vas deferens and does not report any pharmacokinetic parameters for rilmenidine. |
| PD | Avellar_1996 | not_relevant | 0 | 0 | The paper investigates the role of imidazoline receptors in rat vas deferens and does not report pharmacodynamic or exposure-response data for rilmenidine. |
| popPK | Bauduceau_2000 | irrelevant | 0 | 0 | The study is a clinical efficacy trial comparing antihypertensive effects and microalbuminuria, reporting no pharmacokinetic parameters for rilmenidine. |
| popPK | Brüss_2003 | irrelevant | 0 | 0 | The paper is a molecular biology study on the rabbit alpha2A-adrenoceptor gene sequence and contains no pharmacokinetic data for rilmenidine. |
| PD | Brüss_2003 | not_relevant | 0 | 0 | The paper focuses on the molecular cloning and sequencing of the rabbit alpha2A-adrenoceptor and discusses qualitative pharmacological differences, but it does not report any numeric PD parameters, concentration-effect curves, or dose-response data for rilmenidine. |
| popPK | Chan_1996 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of receptor mechanisms in rabbits and does not report any pharmacokinetic parameters for rilmenidine. |
| popPK | Chan_1996_2 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of receptor mechanisms in rabbits and does not report any pharmacokinetic parameters for rilmenidine. |
| PD | Chan_1996_2 | not_relevant | 3 | 2 | The study describes receptor-mediated dose-response curves and antagonist reversal but does not report numeric PD parameters (e.g., EC50, Emax) or concentration-effect relationships for rilmenidine. |
| popPK | Chan_2007 | irrelevant | 0 | 0 | The study is a mechanistic investigation of receptor mediation in the brainstem and does not report pharmacokinetic parameters for rilmenidine. |
| popPK | Chirila_2026 | irrelevant | 0 | 0 | The paper is a machine learning study for HIV-1 drug repurposing and does not contain any pharmacokinetic data or parameters for rilmenidine. |
| PD | Chirila_2026 | not_relevant | 0 | 0 | The paper is a computational study on machine learning for HIV drug repurposing and does not contain any pharmacodynamic or exposure-response data for rilmenidine. |
| popPK | Civiletto_2018 | irrelevant | 0 | 0 | The paper is a mechanistic study on mitochondrial myopathy where rilmenidine is used as a comparator agent, and no pharmacokinetic parameters are reported. |
| popPK | Colucci_1998 | irrelevant | 0 | 0 | The study is a pharmacological investigation of receptor mechanisms in guinea-pig ileum and does not report any pharmacokinetic parameters for rilmenidine. |
| popPK | Dinh_1988 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of bronchial responses to histamine and does not report any pharmacokinetic parameters for rilmenidine. |
| PD | Dinh_1988 | not_relevant | 2 | 1 | The study reports qualitative changes in bronchial responsiveness (histamine dose-response curves) but does not provide numeric PD parameters (e.g., EC50, Emax) or concentration-effect data for rilmenidine. |
| popPK | Dollery_1988 | irrelevant | 2 | 0 | The paper is a dose-response study focusing on hemodynamic effects and does not report quantitative pharmacokinetic parameters like clearance or volume of distribution. |
| popPK | Esnault_2008 | irrelevant | 0 | 0 | The study is a clinical trial comparing amlodipine and enalapril for renal outcomes, where rilmenidine is only mentioned as a permitted add-on medication, and no pharmacokinetic parameters are reported. |
| popPK | Evans_1994 | irrelevant | 0 | 0 | The paper is an in-vitro receptor binding study in dog kidney membranes, not a pharmacokinetic study, and rilmenidine is only used as a displacement agent. |
| PD | Evans_1994 | not_relevant | 0 | 0 | The paper reports in vitro receptor binding affinities (KD, Bmax, Ki) for various ligands, including rilmenidine, but does not report a pharmacodynamic exposure-response or dose-response relationship for the drug's physiological effect. |
| popPK | Fauvel_1999 | irrelevant | 0 | 0 | The study focuses on hemodynamic and renal functional effects (blood pressure, GFR, sodium handling) rather than pharmacokinetic disposition parameters. |
| popPK | Feldman_1990 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of central hypotensive effects in rabbits and does not report any pharmacokinetic parameters for rilmenidine. |
| popPK | Galli_2025 | irrelevant | 0 | 0 | The paper is a high-throughput screening study for anthelmintic activity in ruminants and does not involve rilmenidine or pharmacokinetic parameters. |
| PD | Galli_2025 | not_relevant | 0 | 0 | The paper reports in vitro anthelmintic activity (EC50) for flavonoids and other compounds, but does not mention rilmenidine or report any pharmacodynamic parameters for it. |
| popPK | Hosseini_1997 | irrelevant | 0 | 0 | The paper is an in-vitro receptor binding study characterizing a radioligand, not a pharmacokinetic study, and rilmenidine is only used as a comparator ligand. |
| PD | Hosseini_1997 | not_relevant | 0 | 0 | The paper describes in vitro radioligand binding studies for I2-imidazoline receptors in rabbit kidney membranes and does not report pharmacodynamic or exposure-response data for rilmenidine. |
| popPK | Häuser_1995 | irrelevant | 0 | 0 | The study investigates the mechanism of action (catecholamine release) of rilmenidine in rats and does not report any pharmacokinetic parameters. |
| PD | Häuser_1995 | not_relevant | 4 | 2 | The paper describes dose-dependent effects and dose-response curves for rilmenidine but does not provide specific numeric PD parameters (e.g., EC50, Emax) or quantitative data points in the provided text. |
| popPK | Kemme_2003 | irrelevant | 0 | 0 | The study focuses on moxonidine (a different drug) and reports pharmacodynamic effects (CNS, blood pressure) rather than pharmacokinetic parameters for rilmenidine. |
| PD | Kemme_2003 | not_relevant | 0 | 0 | The paper studies moxonidine, not rilmenidine, and reports only group-level mean differences in CNS effects and blood pressure without any concentration-effect modeling or numeric PD parameters. |
| popPK | Kennedy_2006 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of receptor subtypes in rat tail arteries and does not report any pharmacokinetic parameters for rilmenidine. |
| PD | Kennedy_2006 | not_relevant | 0 | 0 | The paper reports that rilmenidine caused no contraction in the rat-tail artery assay, providing no numeric PD parameters or dose-response relationship for the drug. |
| popPK | Kim_2009 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment measuring antiallodynic effects (ED50) in rats, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Kline_1993 | irrelevant | 0 | 0 | The study focuses on renal physiology and hemodynamics (GFR, RBF, excretion) rather than systemic pharmacokinetic disposition parameters (CL, V, ka) for rilmenidine. |
| popPK | Kline_1994 | irrelevant | 0 | 0 | The study focuses on renal physiology and natriuretic effects, not pharmacokinetic disposition parameters like clearance or volume of distribution. |
| popPK | Kotanko_2006 | irrelevant | 0 | 0 | The paper is a review discussing the pathophysiology of sympathetic hyperactivity in chronic kidney disease and mentions rilmenidine only as a therapeutic option, without reporting any pharmacokinetic parameters. |
| popPK | Kudo_1999 | irrelevant | 0 | 0 | The study is a mechanistic investigation of water permeability in rat collecting ducts, not a pharmacokinetic study, and contains no PK parameters for rilmenidine. |
| popPK | Leary_1989 | irrelevant | 0 | 0 | The study assesses renal excretory actions (pharmacodynamics) rather than pharmacokinetic disposition parameters, and no PK values are reported. |
| PD | Leary_1989 | not_relevant | 1 | 0 | The paper reports only qualitative findings (no effect on water/electrolyte balance) for a single dose of rilmenidine without any numeric concentration-effect data, dose-response curve, or PD parameters. |
| popPK | Li_1994 | irrelevant | 0 | 0 | The study investigates renal physiological effects (natriuresis/diuresis) rather than pharmacokinetic disposition parameters. |
| popPK | Licata_1993 | irrelevant | 0 | 0 | The study evaluates clinical and renal hemodynamic effects (BP, GFR, RVR) rather than pharmacokinetic disposition parameters (CL, V, t1/2). |
| popPK | Lins_1989 | irrelevant | 2 | 0 | The study reports qualitative observations of plasma concentration stability and steady state timing but does not provide quantitative pharmacokinetic parameters (CL, V, t1/2) or numeric concentration values in the evidence. |
| popPK | Molderings_2003 | irrelevant | 0 | 0 | The paper focuses on pharmacodynamic receptor mechanisms (agonism/antagonism) and contains no pharmacokinetic parameters or quantitative disposition data for rilmenidine. |
| PD | Molderings_2003 | not_relevant | 1 | 0 | The text is a qualitative discussion of receptor pharmacology (agonism vs. antagonism) and species differences, containing no numeric PD parameters, concentration-effect curves, or PK/PD modeling data. |
| popPK | Nowak_2005 | irrelevant | 0 | 0 | The study evaluates the effect of rilmenidine on plasma adiponectin levels and blood pressure, not pharmacokinetic parameters. |
| popPK | Penner_1997 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of hemodynamic and renal effects in rats, reporting no pharmacokinetic parameters for rilmenidine. |
| popPK | Perera_2018 | irrelevant | 0 | 0 | The paper is a mechanistic study on autophagy in ALS mouse models and does not report any pharmacokinetic parameters for rilmenidine. |
| popPK | Perera_2021 | irrelevant | 0 | 0 | The paper is a mechanistic study on autophagy in mice and does not report any pharmacokinetic parameters for rilmenidine. |
| popPK | Pineda_1993 | irrelevant | 0 | 0 | The study is a mechanistic electrophysiology investigation of receptor interactions in rats and does not report any pharmacokinetic parameters for rilmenidine. |
| popPK | Pinthong_2004 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects of imidazolines on platelet aggregation and does not report any pharmacokinetic parameters for rilmenidine. |
| popPK | Raasch_1999 | irrelevant | 0 | 0 | The paper is an in-vitro/in-vivo mechanistic study on MAO inhibition and does not report pharmacokinetic parameters for rilmenidine. |
| PD | Raasch_1999 | not_relevant | 3 | 4 | The paper reports in vitro IC50 values for MAO inhibition, which is a biochemical enzyme assay rather than a pharmacodynamic exposure-response relationship for the drug's clinical effect. |
| popPK | Radwanska_2009 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of imidazoline receptor effects on isolated rat heart atria and does not report any pharmacokinetic parameters for rilmenidine. |
| popPK | Roux-Marson_2020 | irrelevant | 0 | 0 | The paper is a cross-sectional study on medication burden and inappropriate prescribing in CKD patients, not a pharmacokinetic study, and contains no PK parameters for rilmenidine. |
| popPK | Ruiz-Ortega_1995 | irrelevant | 0 | 0 | The paper is a neuropharmacological study on imidazoline receptor mechanisms in rats, not a pharmacokinetic study, and rilmenidine is only mentioned as a comparator drug without any PK parameters. |
| PD | Ruiz-Ortega_1995 | not_relevant | 1 | 0 | The paper reports dose-response parameters (ED50, Emax) for clonidine, not rilmenidine; rilmenidine is only mentioned as a related drug in the introduction. |
| popPK | Schiller_2016 | irrelevant | 0 | 0 | The study investigates renal nerve regulation of blood flow in rabbits and does not involve rilmenidine or pharmacokinetic parameters. |
| PD | Schiller_2016 | not_relevant | 0 | 0 | The paper investigates renal nerve regulation of blood flow in rabbits and does not mention rilmenidine or report any pharmacodynamic or exposure-response data. |
| popPK | Singlas_1988 | relevant | 9 | 2 | The paper is a relevant PK study for rilmenidine, but the evidence only provides relative percentage changes (e.g., -50% clearance) rather than absolute quantitative parameter values (e.g., L/h, L). |
| popPK | Smyth_1995 | irrelevant | 0 | 0 | The study investigates renal pharmacodynamics (natriuresis) in rats and does not report any pharmacokinetic parameters for rilmenidine. |
| popPK | Smyth_1998 | irrelevant | 0 | 0 | The study investigates the mechanism of natriuresis (pharmacodynamics) in rats and does not report any pharmacokinetic parameters for rilmenidine. |
| popPK | Urban_1994 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic mechanism of action (receptor mediation) in rabbits and does not report pharmacokinetic parameters such as clearance or volume of distribution. |
| popPK | Urban_1995 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of sympathetic tone in rabbits and does not report any pharmacokinetic parameters for rilmenidine. |
| popPK | Wethmar_2001 | irrelevant | 0 | 0 | The paper is an in-vitro receptor binding study focusing on ligand specificity and does not report any pharmacokinetic parameters for rilmenidine. |
| PD | Wethmar_2001 | not_relevant | 0 | 0 | The provided text is only a title regarding receptor interactions and contains no data, analysis, or numeric parameters for rilmenidine. |
| popPK | Yu_2005 | irrelevant | 0 | 0 | The study is a pharmacodynamic receptor characterization (mydriasis model) and does not report any pharmacokinetic parameters for rilmenidine. |
| popPK | de_2001 | irrelevant | 2 | 0 | The study focuses on concentration-effect (PK/PD) relationships and side effects rather than reporting quantitative disposition parameters like clearance, volume, or half-life. |
| popPK | de_2002 | irrelevant | 2 | 0 | The study focuses on concentration-effect (PD) relationships and infusion rates rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, ka) for rilmenidine. |
| popPK | van_2004 | irrelevant | 2 | 0 | The study focuses on pharmacodynamic tolerance (CNS effects) and mentions PK measurements but provides no quantitative PK parameter values (CL, V, etc.) in the evidence. |
| popPK | van_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of para-aminosalicylic acid (PAS), not rilmenidine. |
| PD | van_2022 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of para-aminosalicylic acid (PAS), not rilmenidine, and does not report any pharmacodynamic or exposure-response parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
