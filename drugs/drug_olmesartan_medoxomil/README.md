<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09C&quot;,&quot;href&quot;:&quot;atc/C09C.md&quot;},{&quot;label&quot;:&quot;olmesartan medoxomil&quot;}]"></div>

# olmesartan medoxomil

- **generic name:** olmesartan medoxomil
- **ATC codes:** `C09CA08`, `C09DA08`, `C09DB02`
- **DrugBank:** [DB00275](https://go.drugbank.com/drugs/DB00275) · **PubChem:** [CID 158781](https://pubchem.ncbi.nlm.nih.gov/compound/158781)
- **molar mass:** 446.5016 g/mol (C24H26N6O3) — DrugBank
- **groups:** approved, investigational

## About

Olmesartan is an angiotensin II receptor blocker used to treat high blood pressure (arterial hypertension) and has also been used for congestive heart failure. It is an approved medicine, available alone and in fixed combinations with diuretics or calcium channel blockers, and is widely used as an antihypertensive.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q421156](https://www.wikidata.org/wiki/Q421156) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-30 19:06 | 27:37 | 0/0/0 | 0/0/0 | 0/0/0 | 178,430/37,178 | openai / gpt-6-luna | 10 | 3/14 | 10/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=olmesartan_medoxomil) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `SLCO1B1` substrate, `SLCO1B3` substrate | DrugBank actor |
| metabolism | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `ABCC2` inducer/substrate | DrugBank actor |
| excretion | liver | `ABCB11` inhibitor, `ABCC2` inducer/substrate | DrugBank actor |
| excretion | small intestine | `ABCC2` inducer/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: AGTR1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 148 matched, 87 returned
- **screened:** 8  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chae_2014.pdf` | Chae JW et al., Development of a population pharmacokin…, International journal of cl… (2014) | popPK | 10 | [10.5414/CP202046](https://doi.org/10.5414/CP202046) | [24849193](https://pubmed.ncbi.nlm.nih.gov/24849193) | A population-PK model for olmesartan medoxomil is described, but no numeric parameter values are provided in the evidence. |
| `Rohatagi_2008.pdf` | Rohatagi S et al., Evaluation of population pharmacokineti…, Journal of clinical pharmac… (2008) | popPK | 10 | [10.1177/0091270008317847](https://doi.org/10.1177/0091270008317847) | [18490496](https://pubmed.ncbi.nlm.nih.gov/18490496) | Olmesartan population-PK models are reported, but no numeric disposition parameter values are provided in the evidence. |
| `Hassan_2022.pdf` | Hassan RH et al., Chitosan nanoparticles for intranasal d…, International journal of ph… (2022) | popPK | 8 | [10.1016/j.ijpharm.2022.122278](https://doi.org/10.1016/j.ijpharm.2022.122278) | [36243325](https://pubmed.ncbi.nlm.nih.gov/36243325) | This is an original PK study of OLM, but the evidence gives only relative bioavailability and no numeric disposition-parameter values. |
| `Salazar_2012.pdf` | Salazar DE et al., The use of modeling and simulation to g…, Clinical pharmacology and t… (2012) | popPK | 8 | [10.1038/clpt.2011.220](https://doi.org/10.1038/clpt.2011.220) | [22205195](https://pubmed.ncbi.nlm.nih.gov/22205195) | It models olmesartan PK and gives a weight–clearance exponent, but no actual clearance or other disposition parameter values are provided. |
| `Sengupta_2012.pdf` | Sengupta P et al., Development of safety profile evaluatin…, Regulatory toxicology and p… (2012) | popPK | 8 | [10.1016/j.yrtph.2011.12.008](https://doi.org/10.1016/j.yrtph.2011.12.008) | [22203042](https://pubmed.ncbi.nlm.nih.gov/22203042) | The study evaluates olmesartan medoxomil pharmacokinetics in rats, but no numeric disposition values are present in the provided evidence. |
| `Tanigawara_2009.pdf` | Tanigawara Y et al., Comparative pharmacodynamics of olmesar…, Drug metabolism and pharmac… (2009) | popPK | 8 | [10.2133/dmpk.24.376](https://doi.org/10.2133/dmpk.24.376) | [19745564](https://pubmed.ncbi.nlm.nih.gov/19745564) | The study uses a population PK/PD model for olmesartan, but no numeric PK parameter values are provided in the evidence. |

<sub>queue written 2026-09-30T19:02:52.075601+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abd_2026 | irrelevant | 1 | 0 | The study reports formulation and pharmacodynamic outcomes, not quantitative PK disposition parameters for olmesartan medoxomil. |
| PD | Abd_2026 | not_relevant | 2 | 1 | Reports comparative blood-pressure effects and effect-time summaries, but no numeric exposure- or dose-response relationship or derivable concentration-effect parameters. |
| popPK | Albash_2019 | irrelevant | 2 | 0 | The study evaluates olmesartan medoxomil pharmacokinetics but provides no quantitative disposition parameters; AUC is only described qualitatively. |
| PD | Albash_2019 | not_relevant | 2 | 0 | The abstract only qualitatively mentions pharmacodynamic superiority of PB15 over oral tablets and reports no numeric PD parameters or exposure-/dose-response relationship. |
| popPK | Battini_2024 | irrelevant | 0 | 0 | This DDI signal-detection study reports no quantitative olmesartan_medoxomil disposition parameters. |
| PD | Battini_2024 | not_relevant | 0 | 0 | The paper analyzes DDI reporting signals and co-exposure timing, not an olmesartan medoxomil exposure- or dose-response relationship with numeric PD parameters. |
| popPK | Beg_2015 | irrelevant | 2 | 0 | The rat formulation study mentions pharmacokinetics but gives no qualifying disposition parameters or numeric values in the supplied evidence. |
| PD | Beg_2015 | not_relevant | 2 | 0 | The abstract mentions in vivo pharmacodynamic studies and improved performance but reports no numeric exposure- or dose-response relationship or derivable PD parameters. |
| popPK | Benz-de_2014 | irrelevant | 0 | 0 | The study reports methotrexate pharmacokinetics, not olmesartan_medoxomil. |
| PD | Benz-de_2014 | not_relevant | 0 | 0 | The paper studies methotrexate clearance and urinary coproporphyrin ratios, with no olmesartan exposure- or dose-response analysis. |
| popPK | Brunner_2001 | irrelevant | 1 | 0 | Olmesartan medoxomil is studied for pharmacodynamic dose response, but no quantitative disposition parameters are reported. |
| popPK | Brunner_2002 | irrelevant | 1 | 1 | This is a review with cited PK summaries, not original qualifying disposition parameters; no CL, volume, or PK model values are provided. |
| popPK | Cabré_2026 | irrelevant | 0 | 0 | This narrative review provides no quantitative olmesartan_medoxomil pharmacokinetic parameters. |
| PD | Cabré_2026 | not_relevant | 0 | 0 | This narrative review text reports no olmesartan medoxomil exposure- or dose-response analysis or numeric PD parameters. |
| popPK | Cazaubon_2019 | irrelevant | 0 | 0 | The reported PK parameters are for mitotane, not olmesartan_medoxomil. |
| PD | Cazaubon_2019 | not_relevant | 0 | 0 | The text describes mitotane pharmacokinetics and target-attainment simulations, not olmesartan medoxomil or a numeric exposure–response relationship. |
| popPK | Chae_2014 | relevant | 10 | 0 | A population-PK model for olmesartan medoxomil is described, but no numeric parameter values are provided in the evidence. |
| PD | Chae_2014 | not_relevant | 0 | 0 | The paper reports population pharmacokinetics only and provides no pharmacodynamic or exposure-response analysis. |
| popPK | Chae_2019 | irrelevant | 0 | 0 | This is a blood-pressure modeling study with no olmesartan_medoxomil pharmacokinetic parameters. |
| PD | Chae_2019 | not_relevant | 0 | 0 | The study models pre-drug circadian blood pressure patterns and reports no olmesartan exposure- or dose-response relationship. |
| popPK | Chen_2012 | irrelevant | 2 | 1 | The study includes olmesartan pharmacokinetics but reports no quantitative disposition parameters; only Tmax is numeric. |
| PD | Chen_2012 | not_relevant | 2 | 0 | The paper qualitatively describes a concentration-dependent blood-pressure effect, but reports no numeric exposure-response relationship or derivable PD parameters. |
| popPK | Duarte_2021 | irrelevant | 0 | 0 | This is a telmisartan clinical trial, not an olmesartan_medoxomil pharmacokinetic study, and no disposition parameters are reported. |
| PD | Duarte_2021 | not_relevant | 0 | 0 | The text reports a fixed-dose telmisartan treatment trial, not olmesartan medoxomil, and provides no dose- or exposure-response analysis or numeric PD parameters. |
| popPK | El-Dahmy_2023 | irrelevant | 1 | 0 | The study reports relative bioavailability but no quantitative disposition parameters for OLM. |
| PD | El-Dahmy_2023 | not_relevant | 2 | 0 | The text mentions a qualitative blood-pressure and heart-rate benefit but reports no numeric exposure- or dose-response relationship or derivable PD parameters. |
| popPK | Fernández-Llaneza_2025 | irrelevant | 0 | 0 | Olmesartan medoxomil is only listed for AKI potential; no quantitative pharmacokinetic parameters are reported. |
| PD | Fernández-Llaneza_2025 | not_relevant | 0 | 0 | The paper aggregates AKI safety signals and adverse-event frequencies; it reports no olmesartan medoxomil dose- or exposure-response analysis or numeric PD parameters. |
| popPK | Gorain_2014 | irrelevant | 2 | 1 | The rat study reports a 2.8-fold AUC increase but no numeric disposition parameters for olmesartan medoxomil. |
| PD | Gorain_2014 | not_relevant | 2 | 0 | The text mentions prolonged antihypertensive activity and a three-fold dose reduction qualitatively, but provides no numeric effect-versus-exposure or dose relationship or derivable PD parameters. |
| popPK | Gorain_2016 | irrelevant | 2 | 0 | The rat study reports olmesartan tissue concentrations but no quantitative pharmacokinetic disposition parameters. |
| PD | Gorain_2016 | not_relevant | 0 | 0 | This paper reports biodistribution and toxicity, not a numeric exposure- or dose-response relationship; the brief PD mention refers to prior work. |
| popPK | Hassan_2022 | relevant | 8 | 1 | This is an original PK study of OLM, but the evidence gives only relative bioavailability and no numeric disposition-parameter values. |
| PD | Hassan_2022 | not_relevant | 2 | 0 | Reports BP and HR effects qualitatively, but no numeric exposure- or dose-response relationship or derivable PD parameters. |
| popPK | Hazan_2010 | irrelevant | 0 | 0 | This is an efficacy and safety study and reports no quantitative pharmacokinetic parameters or values. |
| PD | Hazan_2010 | not_relevant | 3 | 0 | The text states a statistically significant dose response but provides no numeric blood-pressure effects or dose-effect parameters to extract. |
| popPK | Kamo_2017 | irrelevant | 0 | 0 | Olmesartan medoxomil is only a transporter-assay inhibitor, with no quantitative disposition parameters reported. |
| PD | Kamo_2017 | not_relevant | 2 | 0 | Olmesartan medoxomil is reported to inhibit PGE2 uptake by more than 90% in a screening assay, but no concentration, concentration-response curve, or numeric PD parameter is provided. |
| popPK | Kim_2022 | irrelevant | 0 | 0 | Olmesartan is tested for neuroprotection, with no pharmacokinetic parameters or numeric PK values reported. |
| PD | Kim_2022 | not_relevant | 2 | 0 | Olmesartan is reported to protect dopamine neurons, but no dose- or concentration-response relationship or numeric PD parameters are stated or derivable. |
| popPK | Kitamura_2007 | irrelevant | 0 | 0 | The study reports glucose outcomes, not quantitative olmesartan pharmacokinetic parameters. |
| popPK | Kodati_2017 | irrelevant | 1 | 1 | The reported numeric parameters are for olmesartan, the active metabolite, not olmesartan medoxomil. |
| popPK | Komesli_2019 | irrelevant | 0 | 0 | The study evaluates formulation and bioavailability but reports no quantitative PK disposition parameters for olmesartan medoxomil. |
| PD | Komesli_2019 | not_relevant | 2 | 0 | Blood pressure was measured and a 3.1-fold formulation efficacy comparison is stated, but no numeric dose- or exposure-response relationship or derivable PD parameters are reported. |
| popPK | Komesli_2021 | irrelevant | 0 | 0 | This rat study evaluates pharmacodynamics and adverse effects but reports no quantitative pharmacokinetic parameters. |
| PD | Komesli_2021 | not_relevant | 2 | 0 | Antihypertensive efficacy is mentioned qualitatively at a single dose, but no numeric effect results or exposure-/dose-response relationship is reported. |
| popPK | Li_2024 | irrelevant | 0 | 0 | This is an assay-development paper, not a PK study, and contains no olmesartan disposition values. |
| PD | Li_2024 | not_relevant | 0 | 0 | The reported IC50 is an immunoassay detection parameter, not an olmesartan exposure- or dose-response pharmacodynamic parameter. |
| popPK | Manoria_2006 | irrelevant | 1 | 0 | This is a clinical review with no quantitative disposition parameters for olmesartan medoxomil in the provided evidence. |
| PD | Manoria_2006 | not_relevant | 2 | 0 | Review-level summary reports blood-pressure reductions with 10–40 mg dosing but provides no extractable dose/exposure-response relationship or numeric PD parameters. |
| popPK | Morita_2026 | irrelevant | 0 | 0 | The study models pemetrexed exposure and reports no olmesartan_medoxomil disposition parameters or values. |
| PD | Morita_2026 | not_relevant | 0 | 0 | The paper models pemetrexed exposure and neutrophil suppression; it reports no olmesartan medoxomil exposure- or dose-response relationship. |
| popPK | Muir_2010 | irrelevant | 0 | 0 | This clinical efficacy summary reports no quantitative pharmacokinetic parameters or values. |
| PD | Muir_2010 | not_relevant | 2 | 0 | The review qualitatively reports dose-dependent BP reduction, but provides no numerical dose-effect results or derivable PD parameters. |
| popPK | Nakamura_2005 | irrelevant | 1 | 0 | Olmesartan medoxomil is studied in animals, but no quantitative pharmacokinetic disposition parameters are reported in the provided evidence. |
| PD | Nakamura_2005 | not_relevant | 3 | 1 | The study qualitatively reports dose-dependent effects and gives tested doses, but provides no numeric effect data or extractable PD parameters or concentration-effect curve. |
| popPK | Ren_2022 | irrelevant | 0 | 0 | This review mentions olmesartan only in discussion of sartans and provides no numeric olmesartan disposition parameters in the evidence. |
| PD | Ren_2022 | not_relevant | 0 | 0 | The text reports PK/PD fits for candesartan and noberastine and simulations for a hypothetical drug, but no olmesartan medoxomil exposure-response relationship or numeric PD parameters. |
| popPK | Rohatagi_2008 | relevant | 10 | 0 | Olmesartan population-PK models are reported, but no numeric disposition parameter values are provided in the evidence. |
| PD | Rohatagi_2008 | not_relevant | 9 | 0 | The abstract reports population exposure–response models for olmesartan, including an Emax model, but provides no numeric PD parameters, curve, or data from which they can be derived. |
| popPK | Rump_2011 | irrelevant | 0 | 0 | This is an antihypertensive efficacy trial and reports no quantitative pharmacokinetic parameters for olmesartan medoxomil. |
| popPK | Salazar_2012 | relevant | 8 | 2 | It models olmesartan PK and gives a weight–clearance exponent, but no actual clearance or other disposition parameter values are provided. |
| PD | Salazar_2012 | not_relevant | 3 | 0 | The text mentions modeled dose- and exposure-response relationships but provides no numeric PD parameters, effect values, or curve from which they can be derived. |
| popPK | Sengupta_2012 | relevant | 8 | 0 | The study evaluates olmesartan medoxomil pharmacokinetics in rats, but no numeric disposition values are present in the provided evidence. |
| PD | Sengupta_2012 | not_relevant | 2 | 0 | The text mentions a positive pharmacodynamic interaction but reports no numeric olmesartan effect-versus-exposure or dose-response relationship or derivable PD parameters. |
| popPK | Shah_2012 | irrelevant | 1 | 0 | This is an analytical assay-method paper with no olmesartan medoxomil disposition parameters or numeric PK values. |
| PD | Shah_2012 | not_relevant | 0 | 0 | The paper describes an analytical assay only; it reports no pharmacodynamic outcomes or exposure-/dose-response analysis for olmesartan. |
| popPK | Shukla_2023 | irrelevant | 0 | 0 | The olmesartan values are docking and binding energies, not pharmacokinetic disposition parameters. |
| PD | Shukla_2023 | not_relevant | 0 | 0 | The paper reports computational docking and molecular-dynamics binding analyses, not an olmesartan exposure- or dose-response relationship or numeric PD parameters. |
| popPK | Smith_2007 | irrelevant | 0 | 0 | This review reports antihypertensive dose-response outcomes, not quantitative pharmacokinetic parameters. |
| PD | Smith_2007 | not_relevant | 3 | 0 | Review describes dose-related BP effects and statistical comparisons, but provides no numeric effect estimates or extractable dose-response parameters. |
| popPK | Song_2016 | irrelevant | 0 | 0 | no_text gate: only 71 chars of text extracted (&lt; 400) |
| PD | Song_2016 | not_relevant | 8 | 0 | The title indicates a linear mixed-effects QTc model, but the provided text contains no numeric PD parameters or effect-versus-exposure results to extract. |
| popPK | Srinivas_2017 | irrelevant | 0 | 0 | no_text gate: only 142 chars of text extracted (&lt; 400) |
| popPK | Tanigawara_2009 | relevant | 8 | 0 | The study uses a population PK/PD model for olmesartan, but no numeric PK parameter values are provided in the evidence. |
| PD | Tanigawara_2009 | not_relevant | 9 | 0 | A population PK/PD model with an olmesartan Emax effect is described, but no numeric PD estimates or effect-versus-concentration values are provided or derivable from this text. |
| popPK | Tharmalingam_2026 | irrelevant | 0 | 0 | The paper studies candesartan cilexetil, not olmesartan medoxomil, and provides no numeric olmesartan PK parameters; the bioavailability entry has no values. |
| PD | Tharmalingam_2026 | not_relevant | 0 | 0 | The paper studies candesartan cilexetil, not olmesartan medoxomil, so it reports no PD relationship for the queried drug. |
| popPK | Thoueille_2023 | irrelevant | 0 | 0 | This study models tenofovir, not olmesartan_medoxomil; no olmesartan parameters are reported. |
| PD | Thoueille_2023 | not_relevant | 0 | 0 | The paper models tenofovir/tenofovir alafenamide pharmacokinetics and reports no pharmacodynamic or exposure-response relationship for olmesartan medoxomil. |
| popPK | Tonial_2025 | irrelevant | 0 | 0 | This reports clinical outcomes, not olmesartan disposition parameters, and provides no PK values. |
| PD | Tonial_2025 | not_relevant | 0 | 0 | The study compares adverse-event risks between antibiotic co-prescriptions and reports no olmesartan-specific dose- or exposure-response analysis or numeric PD parameters. |
| popPK | Webb_2016 | irrelevant | 0 | 0 | The study is of azilsartan medoxomil, not olmesartan medoxomil; its PK parameter estimates are referenced in supplementary Table S2. |
| PD | Webb_2016 | not_relevant | 0 | 0 | The paper concerns azilsartan medoxomil and reports PK exposure and safety, with no olmesartan analysis or numeric PD/exposure-response relationship. |
| popPK | Weiss_2010 | irrelevant | 0 | 0 | This is an in-vitro transporter study and reports no quantitative disposition parameters for olmesartan_medoxomil. |
| PD | Weiss_2010 | not_relevant | 0 | 0 | Olmesartan medoxomil was tested, but the text reports no drug-specific concentration- or dose-response relationship or numeric PD parameter for it. |
| popPK | Yang_2025 | irrelevant | 0 | 0 | This review provides no olmesartan_medoxomil-specific quantitative PK values. |
| PD | Yang_2025 | not_relevant | 0 | 0 | This review does not report an olmesartan medoxomil dose- or exposure-response analysis or numeric PD parameters. |
| popPK | Yoshihara_2005 | irrelevant | 1 | 0 | The numeric population-PK parameters are for active olmesartan, not olmesartan medoxomil. |
| popPK | Zeitlinger_2021 | irrelevant | 0 | 0 | no_text gate: only 26 chars of text extracted (&lt; 400) |
| PD | Zeitlinger_2021 | not_relevant | 0 | 0 | The provided text contains only the meeting title and reports no olmesartan medoxomil PD or exposure-response data. |
| popPK | Zhang_2024 | irrelevant | 0 | 0 | The study concerns PDE5 inhibitors, not olmesartan_medoxomil, and reports no olmesartan PK values. |
| PD | Zhang_2024 | not_relevant | 0 | 0 | The paper analyzes PDE5 inhibitor adverse-event reports using disproportionality methods and reports no olmesartan medoxomil exposure-response or dose-response relationship or numeric PD parameters. |
| popPK | Şenkal_2020 | irrelevant | 0 | 0 | This is a COVID-19 outcomes study, not an olmesartan_medoxomil pharmacokinetic study. |
| PD | Şenkal_2020 | not_relevant | 0 | 0 | Reports a categorical association for antihypertensive classes, not an olmesartan-specific dose- or concentration-response relationship or numeric PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
