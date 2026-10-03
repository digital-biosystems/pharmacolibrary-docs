<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A12C&quot;,&quot;href&quot;:&quot;atc/A12C.md&quot;},{&quot;label&quot;:&quot;zinc sulfate&quot;}]"></div>

# zinc sulfate

- **generic name:** zinc sulfate
- **ATC codes:** `A12CB01`, `B05XA18`
- **DrugBank:** [DB09322](https://go.drugbank.com/drugs/DB09322) · **PubChem:** [CID 24424](https://pubchem.ncbi.nlm.nih.gov/compound/24424)
- **molar mass:** 161.472 g/mol (O4SZn) — DrugBank
- **groups:** approved, investigational

## About

**Description.** Zinc sulfate is the inorganic compound with the formula ZnSO4 and historically known as "white vitriol". It is on the World Health Organization's List of Essential Medicines, a list of the most important medication needed in a basic health system.

**Indication.** This medication is a mineral used to treat or prevent low levels of zinc alone and together with oral rehydration therapy (ORT). It is also used as a topical astringent. Zinc Sulfate Injection, USP is indicated for use as a supplement to intravenous solutions given for TPN.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-30 01:55 | 3:19 | 0/0/0 | 1/1/0 | 0/0/1 | 9,269/1,390 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 2/6 | 3/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Nusetti_2010_Ks](drugs/drug_zinc_sulfate/pd_Nusetti_2010_Ks.md) | taurine transport affinity ← zinc (zinc sulfate) · direct Emax (saturable) effect | — | Nusetti S et al., Effects of zinc ex vivo on taurine upta…, Journal of biomedical scien… (2010) | [10.1186/1423-0127-17-S1-S13](https://doi.org/10.1186/1423-0127-17-S1-S13) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Nusetti_2010_Vmax](drugs/drug_zinc_sulfate/pd_Nusetti_2010_Vmax.md) | taurine uptake (high affinity transport capacity) ← zinc (zinc sulfate) · direct Emax (saturable) effect | — | Nusetti S et al., Effects of zinc ex vivo on taurine upta…, Journal of biomedical scien… (2010) | [10.1186/1423-0127-17-S1-S13](https://doi.org/10.1186/1423-0127-17-S1-S13) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rat</span> | [Chen_2026_EPO](drugs/drug_zinc_sulfate/pd_Chen_2026_EPO.md) | plasma erythropoietin ← zinc · stimulation effect | — | Chen YH et al., Oyster-derived Zinc Exhibits Superior A…, Biological trace element re… (2026) | [10.1007/s12011-026-05073-x](https://doi.org/10.1007/s12011-026-05073-x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rat</span> | [Chen_2026_RBC](drugs/drug_zinc_sulfate/pd_Chen_2026_RBC.md) | red blood cell count ← zinc · stimulation effect | — | Chen YH et al., Oyster-derived Zinc Exhibits Superior A…, Biological trace element re… (2026) | [10.1007/s12011-026-05073-x](https://doi.org/10.1007/s12011-026-05073-x) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">evidence_only</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> | **miR-146a** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Li_2023](drugs/drug_zinc_sulfate/pgx_Li_2023_miR_146a_Q100.md) | Li Y et al., Effect of miR-146a polymorphism on lipo…, Cellular and molecular biol… (2023) | [10.14715/cmb/2023.69.12.7](https://doi.org/10.14715/cmb/2023.69.12.7) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=zinc_sulfate) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>“…absorbed, primarily from the duodenum and ileum…”</sub> | prose |
| excretion | bile duct | <sub>“…Primarily fecal (approximately 90%)…”</sub> | prose |
| excretion | kidney | <sub>“…to a lesser extent in the urine…”</sub> | prose |
| excretion | skin | <sub>“…in perspiration…”</sub> | prose |

<sub>Actors without a tissue in the table: MIR-146A (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 64 matched, 59 returned
- **screened:** 1  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Guillard_1984.pdf` | Guillard O et al., Comparative pharmacokinetics of [65Zn]z…, Journal of pharmaceutical s… (1984) | popPK | 9 | [10.1002/jps.2600731139](https://doi.org/10.1002/jps.2600731139) | [6520772](https://pubmed.ncbi.nlm.nih.gov/6520772) | The paper describes a pharmacokinetic study of zinc sulfate in rabbits using a two-compartment model, but no specific numeric parameter values (CL, V, etc.) are present in the provided evidence. |
| `Cunningham_2020.pdf` | Cunningham B et al., Effects of three zinc-containing sunscr…, Aquatic toxicology (Amsterd… (2020) | pd | 5 | [10.1016/j.aquatox.2019.105355](https://doi.org/10.1016/j.aquatox.2019.105355) | [31790937](https://www.ncbi.nlm.nih.gov/pubmed/31790937) | metadata signals extractable PD data (EC50) |
| `Skornik_1983.pdf` | Skornik WA et al., Relative toxicity of inhaled metal sulf…, The American review of resp… (1983) | pd | 5 | [10.1164/arrd.1983.128.2.297](https://doi.org/10.1164/arrd.1983.128.2.297) | [6309044](https://www.ncbi.nlm.nih.gov/pubmed/6309044) | metadata signals extractable PD data (EC50) |
| `Fani_2020.pdf` | Fani M et al., Zinc Sulfate in Narrow Range as an In V…, Biological trace element re… (2020) | pd | 4 | [10.1007/s12011-019-01728-0](https://doi.org/10.1007/s12011-019-01728-0) | [31028520](https://www.ncbi.nlm.nih.gov/pubmed/31028520) | metadata signals extractable PD data (IC50) |
| `Jorge_2005.pdf` | Jorge RA et al., Use of sodium dodecyl sulfate and zinc…, Ecotoxicology and environme… (2005) | pd | 4 | [10.1016/j.ecoenv.2004.09.005](https://doi.org/10.1016/j.ecoenv.2004.09.005) | [15883100](https://www.ncbi.nlm.nih.gov/pubmed/15883100) | metadata signals extractable PD data (IC50) |
| `Shabbir_2023.pdf` | Shabbir Awan S et al., Ailanthus altissima leaf extract mediat…, Saudi journal of biological… (2023) | pd | 4 | [10.1016/j.sjbs.2022.103487](https://doi.org/10.1016/j.sjbs.2022.103487) | [36387031](https://www.ncbi.nlm.nih.gov/pubmed/36387031) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-30T01:54:34.697519+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Akbaba_2020 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity assessment in plant cells (Allium cepa) and does not report pharmacokinetic parameters for zinc sulfate. |
| popPK | Cao_2013 | irrelevant | 0 | 0 | The paper is a microbiology study on bacterial growth and metal tolerance, not a pharmacokinetic study of zinc sulfate in humans or animals. |
| popPK | Careli_2025 | irrelevant | 0 | 0 | The study is a bioavailability and growth performance trial in pigs, not a pharmacokinetic study, and does not report PK parameters like clearance or volume for zinc sulfate. |
| PD | Careli_2025 | not_relevant | 3 | 2 | The study reports dose-response trends (linear/quadratic) for growth and tissue zinc concentrations but does not provide specific numeric PD parameters (e.g., Emax, EC50) or a fitted concentration-effect curve for zinc sulfate. |
| popPK | Chavant_2021 | irrelevant | 0 | 0 | The study focuses on tacrolimus pharmacokinetics, and zinc sulfate is used only as a reagent for protein precipitation in the sample preparation method. |
| PD | Chavant_2021 | not_relevant | 0 | 0 | The paper describes an analytical method for quantifying tacrolimus and its metabolites; zinc sulfate is used only as a reagent for protein precipitation, and no pharmacodynamic or exposure-response relationship for zinc sulfate is reported. |
| popPK | Chen_2014 | irrelevant | 0 | 0 | The study is a mechanistic investigation of metallothionein expression and protein phosphorylation in cell lines, not a pharmacokinetic study, and reports no disposition parameters for zinc sulfate. |
| PD | Chen_2014 | not_relevant | 2 | 1 | The paper describes a qualitative dose-response relationship for metallothionein expression but focuses on molecular mechanisms (PP2A/MTF-1) and does not provide numeric PD parameters or extractable concentration-effect curves. |
| popPK | Chen_2026 | irrelevant | 0 | 0 | The study focuses on in-vitro bioavailability (Caco-2 transport) and in-vivo anti-anemic efficacy, reporting no pharmacokinetic parameters (CL, V, ka, t1/2) for zinc sulfate. |
| popPK | Cunningham_2020 | irrelevant | 0 | 0 | no_text gate: only 119 chars of text extracted (&lt; 400) |
| PD | Cunningham_2020 | not_relevant | 0 | 0 | The paper studies the toxicological effects of zinc-containing sunscreens on sea urchin embryos, not the pharmacodynamics of zinc sulfate in a clinical or pharmacological context. |
| popPK | Dougherty_2012 | irrelevant | 0 | 0 | The study is a clinical trial assessing vitamin A status and does not report pharmacokinetic parameters for zinc sulfate. |
| PD | Dougherty_2012 | not_relevant | 2 | 1 | The paper reports a clinical trial of vitamin A and zinc sulfate but does not provide a pharmacokinetic-pharmacodynamic model, concentration-effect curve, or specific numeric PD parameters (e.g., EC50, Emax) for zinc sulfate; it only notes a potential dose-response for vitamin A based on group means. |
| popPK | Fani_2020 | irrelevant | 0 | 0 | no_text gate: only 60 chars of text extracted (&lt; 400) |
| popPK | Feldmann_2019 | irrelevant | 0 | 0 | The paper is a clinical trial evaluating the efficacy of zinc supplementation on diarrhea and weight gain in calves, not a pharmacokinetic study, and it does not report quantitative disposition parameters like clearance or volume of distribution. |
| PD | Feldmann_2019 | not_relevant | 2 | 1 | The study reports clinical efficacy (hazard ratios, weight gain differences) for fixed doses but does not model the relationship between measured serum zinc concentrations and the pharmacodynamic effects, nor does it provide a dose-response curve with parameters like Emax or EC50. |
| popPK | Fodil_2024 | irrelevant | 0 | 0 | The study focuses on the synthesis and antibacterial/antioxidant properties of zinc oxide nanoparticles, not the pharmacokinetics of zinc sulfate. |
| PD | Fodil_2024 | not_relevant | 2 | 1 | The study reports IC50 values for antioxidant activity and uses polynomial modeling for antibacterial effects, but it is a materials science/nanoparticle characterization study, not a pharmacodynamic analysis of zinc sulfate as a drug in a biological system. |
| popPK | Georgiou_2022 | irrelevant | 0 | 0 | The study focuses on the behavioral and neural effects of ketamine in mice and does not involve zinc_sulfate or report any pharmacokinetic parameters. |
| PD | Georgiou_2022 | not_relevant | 0 | 0 | The paper investigates the effect of experimenter sex on ketamine response in mice and does not report any pharmacodynamic or exposure-response relationship for zinc sulfate. |
| popPK | Guillard_1984 | relevant | 9 | 0 | The paper describes a pharmacokinetic study of zinc sulfate in rabbits using a two-compartment model, but no specific numeric parameter values (CL, V, etc.) are present in the provided evidence. |
| popPK | Irfan_2026 | irrelevant | 2 | 0 | The study reports longitudinal serum zinc concentrations (pharmacodynamics) rather than pharmacokinetic parameters like clearance or volume of distribution. |
| popPK | Jorge_2005 | irrelevant | 0 | 0 | The paper is an ecotoxicology study on mussels reporting NOEC/IC50 values, not a pharmacokinetic study with disposition parameters for zinc sulfate. |
| popPK | Jäger_2024 | irrelevant | 0 | 0 | The paper investigates the mechanism of action of antifungal drugs (oteseconazole, etc.) on steroidogenesis in vitro and does not involve zinc_sulfate or pharmacokinetic parameters. |
| PD | Jäger_2024 | not_relevant | 0 | 0 | The paper studies oteseconazole and other tetrazole antifungals, not zinc sulfate, and does not report numeric PD parameters for the target drug. |
| popPK | Kalaba_2024 | irrelevant | 0 | 0 | The paper is an in-vitro antimicrobial study using zinc sulfate only as a precursor for synthesizing zinc oxide nanoparticles, and it does not report any pharmacokinetic parameters for zinc sulfate. |
| PD | Kalaba_2024 | not_relevant | 3 | 2 | The paper reports MICs, FIC indices, and cytotoxicity IC50s for a nanoparticle combination, but does not provide a pharmacokinetic-pharmacodynamic (PK/PD) model or exposure-response analysis for zinc sulfate. |
| popPK | Khan_2023 | irrelevant | 0 | 0 | The paper is a materials science study on the synthesis and characterization of metal oxide nanocomposites, not a pharmacokinetic study of zinc sulfate. |
| PD | Khan_2023 | not_relevant | 0 | 0 | The paper reports the synthesis and characterization of a ternary metal oxide nanocomposite, not a pharmacodynamic or exposure-response analysis of zinc sulfate as a drug. |
| popPK | Larson_2016 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of rapamycin in dogs, not zinc_sulfate. |
| PD | Larson_2016 | not_relevant | 0 | 0 | The paper reports only pharmacokinetic parameters (Cmax, AUC, t1/2) for rapamycin in dogs and contains no pharmacodynamic, exposure-response, or dose-response data. |
| popPK | Li_2023_2 | irrelevant | 0 | 0 | The paper focuses on the identification of ACE-inhibitory peptides and their interaction with zinc ions, not on the pharmacokinetics of zinc sulfate. |
| PD | Li_2023_2 | not_relevant | 0 | 0 | The paper reports in vitro enzymatic inhibition (IC50) and chelation properties of a peptide, not a pharmacodynamic exposure-response or dose-response relationship for zinc sulfate in a biological system. |
| popPK | Lin_2021 | irrelevant | 0 | 0 | The paper is a plant physiology study on blueberry budbreak using zinc sulfate as a defoliant, not a pharmacokinetic study of zinc sulfate in humans or animals. |
| PD | Lin_2021 | not_relevant | 2 | 1 | The paper reports a lack of significant dose-response for zinc sulfate and focuses on qualitative phytohormone dynamics rather than extractable numeric PD parameters (e.g., EC50, Emax) for the drug. |
| popPK | Liu_2019 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cyclosporine A, and zinc sulfate is only mentioned as a reagent for sample preparation, not as the subject drug. |
| PD | Liu_2019 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetics of Cyclosporine A and the effect of Baicalin on it; it does not study Zinc Sulfate or report any pharmacodynamic (exposure-response) parameters. |
| popPK | Ma_1989 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vascular smooth muscle contraction, not a pharmacokinetic study, and reports no disposition parameters. |
| PGx | Nagamine_2000 | not_relevant | 0 | 0 | The study evaluates the clinical efficacy of zinc sulfate in hepatitis C patients but does not report any pharmacogenomic effects on the pharmacokinetic or pharmacodynamic parameters of the drug. |
| popPK | Noreikaitė_2017 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of mycophenolate mofetil (MMF) and mycophenolic acid (MPA), not zinc sulfate. |
| PD | Noreikaitė_2017 | not_relevant | 0 | 0 | The paper analyzes the effect of cyclosporine and everolimus on mycophenolate mofetil pharmacokinetics, not the pharmacodynamics of zinc sulfate. |
| popPK | Nusetti_2010 | irrelevant | 0 | 0 | The study is an ex vivo mechanistic investigation of zinc's effect on taurine transport in goldfish retinal cells, not a pharmacokinetic study reporting disposition parameters for zinc sulfate. |
| popPK | Obrador_2026 | irrelevant | 0 | 0 | The paper is a review of radiomitigators for radiation injury and does not contain pharmacokinetic data for zinc sulfate. |
| PD | Obrador_2026 | not_relevant | 0 | 0 | The text is a general review of radiomitigators and does not contain any specific data, analysis, or numeric parameters for zinc sulfate. |
| popPK | Paixão_2008 | irrelevant | 0 | 0 | The paper is a toxicology study on algal bioassays where zinc sulfate is used as a reference toxicant, not a pharmacokinetic study. |
| PD | Paixão_2008 | not_relevant | 4 | 2 | The paper reports EC50 values for zinc sulfate as part of a method validation study, but the specific numeric values are not provided in the abstract, making them non-extractable from the given text. |
| PGx | Rao_2018 | not_relevant | 0 | 0 | The paper is a case report describing the co-occurrence of Wilson disease and oculocutaneous albinism, and while it mentions zinc sulfate treatment, it does not report any pharmacogenomic effects on PK or PD parameters. |
| PGx | Ren_2025 | not_relevant | 0 | 0 | The paper investigates the mechanism of lavender's sleep-promoting effects and uses zinc sulfate only as a tool to block olfactory pathways, not as the primary drug subject to pharmacogenomic analysis. |
| popPK | Richard_2022 | irrelevant | 0 | 0 | The paper investigates brown adipose tissue glucose uptake and microbiome changes in response to diet, with no mention of zinc sulfate or pharmacokinetic parameters. |
| PD | Richard_2022 | not_relevant | 0 | 0 | The paper investigates the effect of high-fructose diet on brown adipose tissue glucose uptake and does not involve zinc sulfate or report any pharmacodynamic parameters. |
| popPK | Ringeling_2022 | irrelevant | 0 | 0 | The paper is a bioanalytical method validation study for vancomycin and clindamycin, where zinc sulfate is used only as a reagent for protein precipitation, not as the subject drug for pharmacokinetic analysis. |
| PD | Ringeling_2022 | not_relevant | 0 | 0 | The paper describes a bioanalytical method for vancomycin and clindamycin; zinc sulfate is used only as a precipitation reagent in sample preparation, and no pharmacodynamic or exposure-response relationship for zinc sulfate is reported. |
| popPK | Saadh_2021 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of enzyme inhibition, not a pharmacokinetic study, and reports no disposition parameters for zinc sulfate. |
| PD | Saadh_2021 | not_relevant | 3 | 2 | The paper reports an IC50 for punicalagin and a qualitative fold-change for the combination with zinc, but does not provide a specific dose-response curve or numeric PD parameters (like Emax or EC50) for zinc sulfate alone or the combination. |
| popPK | Saeed_2015 | irrelevant | 0 | 0 | The study is an ecotoxicological assessment of zinc sulfate in fish embryos, reporting toxicity endpoints (EC50/LC50) rather than pharmacokinetic disposition parameters. |
| popPK | Scott_2003 | irrelevant | 0 | 0 | The paper describes an in-vitro biochemical assay for kinase activity using zinc sulfate as a reagent, not a pharmacokinetic study of zinc sulfate as a drug. |
| PD | Scott_2003 | not_relevant | 0 | 0 | The paper describes a biochemical assay method for kinase activity using zinc sulfate as a reagent, not a pharmacodynamic study of zinc sulfate as a therapeutic agent. |
| popPK | Shabbir_2023 | irrelevant | 0 | 0 | no_text gate: only 135 chars of text extracted (&lt; 400) |
| PD | Shabbir_2023 | not_relevant | 0 | 0 | The paper focuses on the green synthesis of zinc oxide nanoparticles and their antibacterial/antioxidant properties, not on the pharmacokinetics or pharmacodynamics of zinc sulfate in a biological system. |
| PGx | Sharquie_2023 | not_relevant | 0 | 0 | The paper reports clinical outcomes of topical zinc sulfate in Xeroderma Pigmentosum patients but does not investigate pharmacogenomic effects on PK or PD parameters. |
| PGx | Singh_2017 | not_relevant | 0 | 0 | The study investigates the mechanism of zinc-induced neurotoxicity involving nNOS and oxidative stress, but does not report any pharmacogenomic effects (gene variants) on the PK or PD parameters of zinc sulfate. |
| popPK | Skornik_1983 | irrelevant | 0 | 0 | no_text gate: only 74 chars of text extracted (&lt; 400) |
| popPK | Song_2014 | irrelevant | 0 | 0 | The study is a toxicological investigation of element distribution and homeostasis, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, ka, etc.) for zinc sulfate. |
| popPK | Tang_2013 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity and gene expression analysis, not a pharmacokinetic study, and reports no disposition parameters for zinc sulfate. |
| popPK | Tran_2004 | irrelevant | 2 | 0 | The study reports dose-dependent absorption amounts (AZ) and a Hill equation for saturation, but does not provide standard compartmental pharmacokinetic parameters (CL, V, ka, t1/2) for zinc sulfate. |
| popPK | Vietri_2002 | irrelevant | 0 | 0 | The study focuses on the sulfation of apomorphine, and zinc sulfate is used only as a reagent for precipitation, not as the subject drug for pharmacokinetic analysis. |
| PD | Vietri_2002 | not_relevant | 0 | 0 | The paper reports in vitro enzyme kinetics (Km, Vmax, IC50) for apomorphine sulfation and its inhibition, not a pharmacodynamic exposure-response relationship for zinc sulfate. |
| popPK | Wahyuningsih_2026 | irrelevant | 0 | 0 | The paper is a review on nanocarrier delivery of phytochemicals for diabetic wound healing and does not report pharmacokinetic parameters for zinc sulfate. |
| PD | Wahyuningsih_2026 | not_relevant | 0 | 0 | The paper is a review on nanocarrier delivery of phytochemicals for diabetic wound healing and does not report any pharmacodynamic or exposure-response data for zinc sulfate. |
| popPK | Weston_1977 | irrelevant | 0 | 0 | The study focuses on the immunological correction of chemotaxis defects in acrodermatitis enteropathica and does not report any pharmacokinetic parameters for zinc sulfate. |
| popPK | Woillard_2014 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of ciclosporin, not zinc_sulfate. |
| PD | Woillard_2014 | not_relevant | 0 | 0 | The paper focuses exclusively on pharmacokinetic (PK) modeling and Bayesian estimation of Ciclosporin AUC for dose adjustment, with no mention of zinc sulfate or any pharmacodynamic (PD) or exposure-response analysis. |
| PGx | Wu_2003 | not_relevant | 0 | 0 | The paper reports the efficacy of zinc sulfate in Wilson disease patients but does not investigate how specific gene variants affect the pharmacokinetics or pharmacodynamics of the drug. |
| popPK | Wuehler_2008 | irrelevant | 1 | 0 | The study is a clinical trial measuring plasma zinc concentrations and morbidity outcomes, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume of distribution. |
| popPK | Yang_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of oxcarbazepine (MHD), not zinc_sulfate. |
| PD | Yang_2023 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PPK) model for oxcarbazepine's metabolite, not a pharmacodynamic (PD) or exposure-response model, and does not involve zinc sulfate. |
| popPK | de_1992 | irrelevant | 0 | 0 | The study is a mechanistic cell biology investigation using zinc sulfate as an inducer of gene expression, not a pharmacokinetic study of zinc sulfate disposition. |
| PD | de_1992 | not_relevant | 4 | 2 | The paper describes a qualitative dose-response relationship between zinc sulfate-induced ras protein levels and gap junction loss, but does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative concentration-effect curve for the drug itself. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
