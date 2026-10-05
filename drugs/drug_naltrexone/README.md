<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A08A&quot;,&quot;href&quot;:&quot;atc/A08A.md&quot;},{&quot;label&quot;:&quot;naltrexone&quot;}]"></div>

# naltrexone

- **generic name:** naltrexone
- **ATC codes:** `A08AA62`, `N02AA56`, `N07BB04`
- **DrugBank:** [DB00704](https://go.drugbank.com/drugs/DB00704) · **PubChem:** [CID 5360515](https://pubchem.ncbi.nlm.nih.gov/compound/5360515)
- **molar mass:** 341.4009 g/mol (C20H23NO4) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Naltrexone is a medication used to manage alcohol and opioid dependence. It is an approved drug, also approved for veterinary use, with some investigational uses such as obesity treatment.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q409587](https://www.wikidata.org/wiki/Q409587) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| naltrexone | parent | 341.401 | C20H23NO4 | DrugBank | [5360515](https://pubchem.ncbi.nlm.nih.gov/compound/5360515) | Dunbar_2007, Li_1996, Reuning_1979 |
| 6beta-naltrexol | metabolite | 343.423 | C20H25NO4 | PubChem | [631219](https://pubchem.ncbi.nlm.nih.gov/compound/631219) | Dunbar_2007 |
| naltrexone glucuronide | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 20:59 | 21:29 | 0/1/3 | 2/0/0 | 0/0/0 | 502,629/53,217 | ollama / qwen3.8:27b-mtp-q8_0 | 23 | 9/5 | 14/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.375). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Dunbar_2007_reference](drugs/drug_naltrexone/Naltrexone_Dunbar2007_reference.md) | — | parent + metabolite (no model) | 4 | Dunbar JL et al., Population pharmacokinetics of extended…, Journal of studies on alcoh… (2007) | [10.15288/jsad.2007.68.862](https://doi.org/10.15288/jsad.2007.68.862) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">dog</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>route_to: `human_review`</sub> | [Li_1996_reference](drugs/drug_naltrexone/Naltrexone_Li1996_reference.md) | — | parent + metabolite (no model) | 4 | Li H et al., [Pharmacokinetics of naltrexone hydroch…, Yao xue xue bao = Acta phar… (1996) | — |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.25). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">dog</span><br><sub>blocking: disposition incomplete — clearance/elimination from this paper; review-gap-fill…</sub><br><sub>route_to: `human_review`</sub> | [Reuning_1979_reference](drugs/drug_naltrexone/Naltrexone_Reuning1979_reference.md) | — | 1-compartment (no model) | 4 | Reuning RH et al., Plasma naltrexone kinetics after intrav…, Journal of pharmaceutical s… (1979) | [10.1002/jps.2600680405](https://doi.org/10.1002/jps.2600680405) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.529). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (goat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">goat</span><br><sub>blocking: C2 negative clearance/volume in a covariate scenario or base (implausible — bas…</sub><br><sub>route_to: `human_review`</sub> | [Christie_2025_reference](drugs/drug_naltrexone/Naltrexone_Christie2025_reference.md) | — | 2-compartment (no model) | 5 | Christie JT et al., Pharmacokinetics and Bioavailability of…, Journal of veterinary pharm… (2025) | [10.1111/jvp.13507](https://doi.org/10.1111/jvp.13507) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.25). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Berríos-Cárcamo_2016_cAMP](drugs/drug_naltrexone/pd_Berr_os_C_rcamo_2016_cAMP.md) | cAMP levels ← naltrexone · direct sigmoid Emax (Hill) effect | — | Berríos-Cárcamo P et al., Racemic Salsolinol and its Enantiomers…, Frontiers in behavioral neu… (2016) | [10.3389/fnbeh.2016.00253](https://doi.org/10.3389/fnbeh.2016.00253) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span> | [Tan_2022_KOR](drugs/drug_naltrexone/pd_Tan_2022_KOR.md) | KOR occupancy ← naltrexone · direct Emax (saturable) effect | — | Tan LA et al., In vivo Characterization of the Opioid…, Neuropsychiatric disease an… (2022) | [10.2147/NDT.S373195](https://doi.org/10.2147/NDT.S373195) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span> | [Tan_2022_MOR](drugs/drug_naltrexone/pd_Tan_2022_MOR.md) | MOR occupancy ← naltrexone · direct Emax (saturable) effect | — | Tan LA et al., In vivo Characterization of the Opioid…, Neuropsychiatric disease an… (2022) | [10.2147/NDT.S373195](https://doi.org/10.2147/NDT.S373195) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=naltrexone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `UGT1A1` substrate | DrugBank actor |
| metabolism | small intestine | `UGT1A1` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: OPRD1 (target), OPRK1 (target), OPRM1 (target), SIGMAR1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 72 matched, 60 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 4  ·  extracted 0  ·  needs_review 3  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Dunbar_2007.pdf` | Dunbar JL et al., Population pharmacokinetics of extended…, Journal of studies on alcoh… (2007) | popPK | 10 | [10.15288/jsad.2007.68.862](https://doi.org/10.15288/jsad.2007.68.862) | [17960304](https://pubmed.ncbi.nlm.nih.gov/17960304) | The abstract explicitly reports quantitative population pharmacokinetic parameters (CL, V) for naltrexone and its metabolite in humans. |
| `Li_1996.pdf` | Li H et al., [Pharmacokinetics of naltrexone hydroch…, Yao xue xue bao = Acta phar… (1996) | popPK | 10 | not captured | [9208648](https://pubmed.ncbi.nlm.nih.gov/9208648) | The study reports quantitative PK parameters (half-lives, bioavailability, compartmental model fit) for naltrexone in dogs, with specific numeric values provided in the abstract. |
| `Reuning_1979.pdf` | Reuning RH et al., Plasma naltrexone kinetics after intrav…, Journal of pharmaceutical s… (1979) | popPK | 10 | [10.1002/jps.2600680405](https://doi.org/10.1002/jps.2600680405) | [108382](https://pubmed.ncbi.nlm.nih.gov/108382) | The abstract explicitly reports quantitative pharmacokinetic parameters including total body clearance (51-55 ml/min/kg in dogs, 64 ml/min/kg in monkeys) and terminal half-life (7.8 hr in monkeys) for naltrexone. |
| `Yun_2007.pdf` | Yun HY et al., Simultaneous analysis of naltrexone and…, Talanta (2007) | popPK | 9 | [10.1016/j.talanta.2006.07.035](https://doi.org/10.1016/j.talanta.2006.07.035) | [19071491](https://pubmed.ncbi.nlm.nih.gov/19071491) | The study describes a parent-metabolite PK model for naltrexone in humans, but the specific numeric parameter values are not present in the provided evidence. |

<sub>queue written 2026-10-04T20:41:37.494416+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahmed_2018 | irrelevant | 0 | 0 | The paper is a meta-analysis of clinical efficacy outcomes (abstinence, relapse, cravings) for naltrexone in alcohol use disorder, not a pharmacokinetic study, and contains no PK parameters. |
| popPK | Antonilli_2008 | irrelevant | 0 | 0 | The study investigates the effect of naltrexone on estradiol glucuronidation (a probe substrate) in rat liver microsomes, not the pharmacokinetic disposition parameters of naltrexone itself. |
| PD | Antonilli_2008 | not_relevant | 3 | 2 | The study reports changes in enzyme kinetic parameters (Vmax, Hill coefficient) for a specific metabolic reaction (E3G formation) after chronic dosing, but does not provide a concentration-effect or dose-response curve for naltrexone itself, nor does it fit a PD model relating drug exposure to a pharmacodynamic endpoint. |
| popPK | Backonja_2016 | irrelevant | 0 | 0 | The study is a pharmacodynamic abuse potential assessment of oxycodone with naltrexone as a deterrent, reporting no pharmacokinetic parameters for naltrexone. |
| PD | Backonja_2016 | not_relevant | 2 | 1 | The study reports comparative mean effects (Emax/AUE) for fixed doses but does not provide concentration-effect data, dose-response curves, or numeric PD parameters (EC50, slope) for naltrexone. |
| popPK | Bai_2016 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of buprenorphine, with naltrexone used only as a co-administered agent to mitigate adverse events. |
| popPK | Baidoo_2025 | irrelevant | 0 | 0 | The study investigates the neurobiological mechanisms of memory consolidation in rats using heroin and naloxone, and does not report any pharmacokinetic parameters for naltrexone. |
| popPK | Barchfeld_1982 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding/signaling assay in rat brain slices, not a pharmacokinetic study, and naltrexone is used only as a functional antagonist. |
| PD | Barchfeld_1982 | not_relevant | 0 | 0 | The paper reports that naltrexone is ineffective as an agonist and acts as an antagonist, but it does not provide numeric PD parameters (e.g., Ki, IC50 for antagonism) or a quantitative exposure-response relationship for naltrexone itself. |
| popPK | Barnett_2020 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of kappa opioid receptor signaling mechanisms, not a pharmacokinetic study of naltrexone. |
| popPK | Bass_2019 | irrelevant | 0 | 0 | The study is a pharmacodynamic analysis of respiratory depression (EtCO2) and does not report any quantitative pharmacokinetic parameters (CL, V, ka, etc.) for naltrexone. |
| popPK | Beaudette-Zlatanova_2023 | irrelevant | 0 | 0 | The study is a clinical efficacy trial for pain management and does not report any pharmacokinetic parameters for naltrexone. |
| popPK | Berríos-Cárcamo_2016 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic investigation of salsolinol's interaction with opioid receptors, using naltrexone only as an antagonist tool, and does not report any pharmacokinetic parameters for naltrexone. |
| popPK | Berthold_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of mitragynine and its metabolite 7-hydroxymitragynine in mice, using naltrexone only as a mechanistic antagonist, not as the subject drug. |
| popPK | Bespalov_1999 | irrelevant | 0 | 0 | The study is a behavioral place conditioning experiment in mice and does not report any pharmacokinetic parameters for naltrexone. |
| popPK | Bond_2017 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of hydrocodone, with naltrexone used only as a co-administered agent to minimize adverse events. |
| popPK | Castillo_2023 | irrelevant | 2 | 0 | The study reports plasma concentrations and subjective effects but does not provide quantitative pharmacokinetic disposition parameters (CL, V, ka, t1/2) or a compartmental model for naltrexone. |
| popPK | Chen_2012 | irrelevant | 0 | 0 | The paper is a statistical analysis of drinking outcomes in alcohol treatment trials and does not report any pharmacokinetic parameters for naltrexone. |
| popPK | Choi_1988 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of neurotoxicity protection and does not report any pharmacokinetic parameters for naltrexone. |
| popPK | Choi_2026 | irrelevant | 0 | 0 | The study is a comparative efficacy and safety analysis of anti-obesity medications, not a pharmacokinetic study, and reports no disposition parameters for naltrexone. |
| popPK | Christie_2025 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for thiafentanil, not naltrexone, which was only used as a reversal agent. |
| popPK | Ciccocioppo_2014 | irrelevant | 0 | 0 | The study is a behavioral pharmacology investigation of MT-7716 and naltrexone's effect on alcohol consumption in rats, with no pharmacokinetic parameters reported. |
| PD | Ciccocioppo_2014 | not_relevant | 0 | 0 | The paper focuses on the NOP receptor agonist MT-7716; naltrexone is used only as a positive control in behavioral experiments without any PK/PD modeling or exposure-response analysis. |
| popPK | Delamater_2000 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment investigating conditioned place preference in rats and does not report any pharmacokinetic parameters for naltrexone. |
| popPK | Derbenev_2000 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of sodium channels where naltrexone is used only as a blocking agent, with no pharmacokinetic parameters reported. |
| PD | Derbenev_2000 | not_relevant | 0 | 0 | The paper investigates the effects of meconic and comenic acids on sodium channels, not naltrexone; naltrexone is only used as a blocking agent to confirm opioid receptor involvement. |
| popPK | Dong_2019 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of buprenorphine and naloxone, with naltrexone used only as a blocking agent to prevent opioid effects, not as the subject drug. |
| popPK | Endt_2025 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic analysis of opioid receptor binding and signaling, not a pharmacokinetic study, and naltrexone is used only as a comparator antagonist. |
| popPK | Goli_2012 | irrelevant | 0 | 0 | The study reports pharmacodynamic effects (EtCO2) of naltrexone co-administered with morphine, but does not report quantitative pharmacokinetic parameters (CL, V, ka, etc.) for naltrexone. |
| popPK | Gray_2005 | irrelevant | 0 | 0 | The study is a pharmacological investigation of opioid receptor subtypes in rat ileum, not a pharmacokinetic study of naltrexone. |
| PD | Gray_2005 | not_relevant | 0 | 0 | The paper reports in vitro receptor pharmacology (agonist/antagonist binding and functional potency) for opioid receptors, not a pharmacokinetic-pharmacodynamic (PK/PD) exposure-response relationship for naltrexone. |
| popPK | Hamel_2023 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the efficacy of low-dose naltrexone for alopecia and reports no pharmacokinetic parameters (clearance, volume, half-life, etc.). |
| popPK | Johnson_2011 | irrelevant | 2 | 0 | The study focuses on formulation release and pharmacodynamics, reporting only qualitative or limited bioavailability comparisons without quantitative PK parameters like clearance or volume. |
| PD | Johnson_2011 | not_relevant | 2 | 0 | The paper is a review of bioavailability and safety studies that reports qualitative reductions in drug liking/euphoria and low naltrexone concentrations, but it does not provide numeric concentration-effect data, dose-response curves, or PD parameters (Emax, EC50) for naltrexone. |
| popPK | Kaessner_2012 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of intranasal fentanyl, with naltrexone mentioned only as a covariate for co-treatment. |
| popPK | Kullai_2026 | irrelevant | 0 | 0 | The study is a functional MRI (fMRI) investigation of brain activation and connectivity, not a pharmacokinetic study, and reports no disposition parameters. |
| popPK | Lin_2022 | irrelevant | 0 | 0 | The study is a mechanistic/pharmacological investigation of receptor activation and does not report pharmacokinetic parameters for naltrexone. |
| PD | Lin_2022 | not_relevant | 0 | 0 | The paper reports in vitro receptor binding/activation data (EC50) for a novel compound in the presence of naltrexone, but does not report a pharmacokinetic or pharmacodynamic exposure-response relationship for naltrexone itself. |
| popPK | Livett_1983 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic review of chromaffin cell release mechanisms where naltrexone is used only as a diagnostic antagonist, with no pharmacokinetic parameters reported. |
| PD | Livett_1983 | not_relevant | 1 | 0 | The paper is a review of basic release mechanisms in chromaffin cells; naltrexone is only mentioned qualitatively as a reversible antagonist for enkephalin effects, with no numeric PD parameters or exposure-response data provided. |
| popPK | Madia_2012 | irrelevant | 0 | 0 | The study is a mechanistic investigation of opioid receptor binding and tolerance in mouse spinal cord, not a pharmacokinetic study of naltrexone. |
| PD | Madia_2012 | not_relevant | 1 | 0 | The paper focuses on opioid agonist efficacy and tolerance mechanisms; naltrexone is only mentioned qualitatively as an antagonist that upregulates receptor density, with no specific exposure-response or dose-response PD parameters provided for it. |
| popPK | Mitchell_2024 | irrelevant | 0 | 0 | The study reports clinical outcomes (opioid use rates) for extended-release naltrexone, not pharmacokinetic parameters. |
| popPK | Moloney_2026 | irrelevant | 0 | 0 | The study is a clinical trial assessing the efficacy of low-dose naltrexone for depression and reports no pharmacokinetic parameters (CL, V, ka, etc.). |
| popPK | Mundra_2012 | irrelevant | 0 | 0 | The study focuses on the antiproliferative effects of naltrindole in multiple myeloma, with naltrexone used only as a comparator agent, and no pharmacokinetic parameters are reported. |
| popPK | Naganawa_2014 | irrelevant | 0 | 0 | The study is a PET imaging trial for the radiotracer 11C-LY2795050, where naltrexone is used only as a blocking agent to define receptor occupancy, not as the subject of pharmacokinetic analysis. |
| popPK | Niroomand_1996 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of opioid receptor signaling in canine cardiac membranes where naltrexone is used only as a non-specific antagonist to block effects, not as the subject of pharmacokinetic analysis. |
| PD | Niroomand_1996 | not_relevant | 0 | 0 | The paper reports PD parameters (EC50) for opioid agonists, not naltrexone; naltrexone is only used as a qualitative antagonist to block effects. |
| popPK | Obeng_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics and receptor binding of mitragynine and 7-hydroxymitragynine, using naltrexone only as an antagonist probe without reporting its pharmacokinetic parameters. |
| PD | Obeng_2021 | not_relevant | 0 | 0 | The paper focuses on the pharmacology of mitragynine and 7-hydroxymitragynine; naltrexone is only mentioned as a non-specific antagonist used to confirm opioid receptor involvement, with no specific exposure-response or dose-response analysis for naltrexone provided. |
| popPK | Obeng_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacological characterization of fentanyl analogs, using naltrexone only as a non-specific antagonist to block effects, with no PK parameters reported for naltrexone. |
| PD | Obeng_2025 | not_relevant | 3 | 2 | The paper reports dose-response data (ED50s) for fentanyl analogs, but naltrexone is only used qualitatively as an antagonist to confirm opioid receptor involvement; no numeric PD parameters (e.g., Ki, IC50, or dose-response curve) for naltrexone itself are provided. |
| popPK | Papay_2014 | irrelevant | 0 | 0 | The study is a clinical efficacy trial for impulse control disorders and does not report any pharmacokinetic parameters for naltrexone. |
| popPK | Pathak_2019 | irrelevant | 0 | 0 | The study is an abuse potential assessment where naltrexone serves only as an active comparator, and no pharmacokinetic parameters are reported. |
| PD | Pathak_2019 | not_relevant | 1 | 0 | The paper reports clinical abuse potential outcomes (VANS scores) for naltrexone as an active control but does not provide pharmacokinetic data or numeric exposure-response/dose-response parameters for naltrexone. |
| popPK | Rizk_2025 | irrelevant | 0 | 0 | The study is a clinical trial assessing suicidal ideation outcomes, not a pharmacokinetic study, and contains no PK parameters. |
| popPK | Setnik_2013 | relevant | 4 | 5 | The study reports non-compartmental PK parameters (Cmax, Tmax, AUC) for naltrexone in humans, but lacks compartmental model parameters (CL, V, Q) and full half-life data. |
| popPK | Setnik_2015 | irrelevant | 0 | 0 | The study is an abuse-potential trial focusing on subjective effects (VAS scores) and does not report quantitative pharmacokinetic parameters for naltrexone. |
| PD | Setnik_2015 | not_relevant | 0 | 0 | The study reports subjective abuse potential scores (VAS) for a fixed dose comparison but does not provide plasma concentration data or fit a pharmacodynamic model to derive exposure-response parameters. |
| popPK | Setnik_2017 | irrelevant | 2 | 0 | Naltrexone is a co-formulated abuse-deterrent component in an oxycodone study, and no quantitative PK parameters for naltrexone are provided in the evidence. |
| PD | Setnik_2017 | not_relevant | 2 | 1 | The study reports comparative peak effects (Emax) for different formulations but does not provide a concentration-effect or dose-response model with numeric PD parameters (e.g., EC50, slope) for naltrexone. |
| popPK | Stancil_2023 | irrelevant | 0 | 0 | The study is a pharmacodynamic fMRI investigation of naltrexone's effect on brain reward pathways and does not report any pharmacokinetic parameters (e.g., clearance, volume, half-life). |
| popPK | Stauffer_2009 | irrelevant | 2 | 0 | The study is a pharmacodynamic assessment of abuse potential and safety, reporting only tmax for naltrexone without quantitative disposition parameters like clearance or volume. |
| PD | Stauffer_2009 | not_relevant | 3 | 2 | The study reports qualitative comparisons of maximum effects (Emax) and effect-time profiles for different formulations but does not provide numeric concentration-effect parameters (like EC50) or a fitted PD model. |
| popPK | Tan_2022 | irrelevant | 2 | 1 | The study is a receptor occupancy/binding profile analysis in rats, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, ka) for naltrexone, which is used as a comparator. |
| popPK | Turner_2025 | irrelevant | 0 | 0 | The study is a behavioral/clinical trial analyzing substance use associations and does not report any pharmacokinetic parameters for naltrexone. |
| popPK | Valenzano_2004 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of DiPOA, a novel mu opioid agonist, with naltrexone used only as a competitive binding agent in vitro. |
| PD | Valenzano_2004 | not_relevant | 0 | 0 | The paper characterizes a novel mu-opioid agonist (DiPOA) and mentions naltrexone only as a competitive antagonist in binding assays; it does not report a pharmacodynamic or exposure-response relationship for naltrexone itself. |
| popPK | Vandenbossche_2014 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of hydromorphone, with naltrexone administered only as a concomitant opioid antagonist to block effects, not as the subject drug. |
| popPK | Varty_2008 | irrelevant | 0 | 0 | The study focuses on the anxiolytic effects of SCH 221510, using naltrexone only as a pharmacological antagonist to test receptor specificity, with no PK parameters reported. |
| PD | Varty_2008 | not_relevant | 0 | 0 | The paper focuses on the pharmacology of SCH 221510; naltrexone is used only as a qualitative antagonist to confirm receptor specificity, with no exposure-response or dose-response PD analysis for naltrexone itself. |
| popPK | White_2005 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment (conditioned place aversion) in rats and does not report any quantitative pharmacokinetic parameters for naltrexone. |
| popPK | Yabaluri_1997 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding and signal transduction assay, not a pharmacokinetic study reporting disposition parameters. |
| PD | Yabaluri_1997 | not_relevant | 3 | 2 | The paper reports binding constants (KD, Bmax) and an EC50 for a sodium channel inhibitor (amiloride), but does not provide a concentration-effect curve or numeric PD parameters (Emax, EC50) for naltrexone itself. |
| popPK | Yun_2007 | relevant | 9 | 0 | The study describes a parent-metabolite PK model for naltrexone in humans, but the specific numeric parameter values are not present in the provided evidence. |
| popPK | dAmore_1991 | irrelevant | 0 | 0 | The study is a neuropharmacological investigation of antinociception in rats using naltrexone as a local antagonist, not a pharmacokinetic study reporting disposition parameters. |
| PD | dAmore_1991 | not_relevant | 2 | 1 | The study reports qualitative antagonism of opioid effects by naltrexone and maximum effect (Emax) values for agonists, but does not provide a quantitative exposure-response or dose-response curve with numeric PD parameters (e.g., IC50, slope) for naltrexone. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-04 20:41 UTC</sub>
