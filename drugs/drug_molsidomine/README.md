<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01D&quot;,&quot;href&quot;:&quot;atc/C01D.md&quot;},{&quot;label&quot;:&quot;molsidomine&quot;}]"></div>

# molsidomine

- **generic name:** molsidomine
- **ATC codes:** `C01DX12`
- **DrugBank:** [DB09282](https://go.drugbank.com/drugs/DB09282) · **PubChem:** [CID 5353788](https://pubchem.ncbi.nlm.nih.gov/compound/5353788)
- **molar mass:** 242.235 g/mol (C9H14N4O4) — DrugBank
- **groups:** approved, withdrawn

## About

Molsidomine is a vasodilator drug that was used to treat heart conditions such as angina. It was once approved but has been withdrawn from use in many places, and is no longer authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q408132](https://www.wikidata.org/wiki/Q408132) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 10:50 | 4:32 | 0/0/0 | 1/0/0 | 0/0/0 | 101,431/5,641 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 2/4 | 3/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Messin_2003_time_to_1_mm_ST_segment_depression](drugs/drug_molsidomine/pd_Messin_2003_time_to_1_mm_ST_segment_depression.md) | time to 1 mm ST-segment depression ← molsidomine · direct linear effect | — | Messin R et al., A pilot double-blind randomized placebo…, European journal of clinica… (2003) | [10.1007/s00228-003-0597-z](https://doi.org/10.1007/s00228-003-0597-z) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Messin_2003_total_exercise_time](drugs/drug_molsidomine/pd_Messin_2003_total_exercise_time.md) | total exercise time ← molsidomine · direct linear effect | — | Messin R et al., A pilot double-blind randomized placebo…, European journal of clinica… (2003) | [10.1007/s00228-003-0597-z](https://doi.org/10.1007/s00228-003-0597-z) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Messin_2003_total_workload](drugs/drug_molsidomine/pd_Messin_2003_total_workload.md) | total workload ← molsidomine · direct linear effect | — | Messin R et al., A pilot double-blind randomized placebo…, European journal of clinica… (2003) | [10.1007/s00228-003-0597-z](https://doi.org/10.1007/s00228-003-0597-z) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=molsidomine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: GUCY1A2 (inducer), GUCY1A2 (target), PDE5A (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 92 matched, 104 returned
- **screened:** 6  ·  **relevant:** 6
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_14 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ostrowski_1985_2.pdf` | Ostrowski J et al., Pharmacokinetics of an extended-release…, European journal of clinica… (1985) | popPK | 10 | [10.1007/BF00544076](https://doi.org/10.1007/BF00544076) | [3899679](https://pubmed.ncbi.nlm.nih.gov/3899679) | The paper is a pharmacokinetic study of molsidomine in humans, but the provided evidence contains only the abstract/introduction without any numeric parameter values. |
| `Spreux-Varoquaux_1991.pdf` | Spreux-Varoquaux O et al., Pharmacokinetics of molsidomine and its…, British journal of clinical… (1991) | popPK | 10 | [10.1111/j.1365-2125.1991.tb03919.x](https://doi.org/10.1111/j.1365-2125.1991.tb03919.x) | [1777378](https://pubmed.ncbi.nlm.nih.gov/1777378) | The abstract provides explicit quantitative pharmacokinetic parameters (half-life, apparent clearance) for molsidomine in humans. |
| `Spreux-Varoquaux_1991_2.pdf` | Spreux-Varoquaux O et al., Pharmacokinetics of molsidomine and of…, Fundamental & clinical phar… (1991) | popPK | 10 | [10.1111/j.1472-8206.1991.tb00741.x](https://doi.org/10.1111/j.1472-8206.1991.tb00741.x) | [1955198](https://pubmed.ncbi.nlm.nih.gov/1955198) | The abstract provides specific quantitative values for clearance and half-life for molsidomine in human subjects. |
| `Ostrowski_1985.pdf` | Ostrowski J et al., Pharmacokinetics of molsidomine in huma…, American heart journal (1985) | popPK | 9 | [10.1016/0002-8703(85)90670-2](https://doi.org/10.1016/0002-8703(85)90670-2) | [3838399](https://pubmed.ncbi.nlm.nih.gov/3838399) | The study reports quantitative PK parameters for molsidomine in humans, including half-life (1.6 +/- 0.8 h), peak concentration, and bioavailability, though clearance and volume values are not explicitly listed in the text. |
| `Bergstrand_1984.pdf` | Bergstrand R et al., Intravenous and oral administration of…, European journal of clinica… (1984) | popPK | 8 | [10.1007/BF00544046](https://doi.org/10.1007/BF00544046) | [6548711](https://pubmed.ncbi.nlm.nih.gov/6548711) | The study reports quantitative PK parameters (bioavailability, clearance, volume) for molsidomine in humans, but specific numeric values for CL and V are not provided in the text, only bioavailability. |
| `Meinertz_1985.pdf` | Meinertz T et al., Relationship between pharmacokinetics a…, American heart journal (1985) | popPK | 8 | [10.1016/0002-8703(85)90671-4](https://doi.org/10.1016/0002-8703(85)90671-4) | [3838400](https://pubmed.ncbi.nlm.nih.gov/3838400) | The study investigates the pharmacokinetics of molsidomine in humans, but the provided evidence contains only qualitative descriptions and no numeric parameter values. |
| `Rosenkranz_1996.pdf` | Rosenkranz B et al., Clinical pharmacokinetics of molsidomine, Clinical pharmacokinetics (1996) | popPK | 8 | [10.2165/00003088-199630050-00004](https://doi.org/10.2165/00003088-199630050-00004) | [8743336](https://pubmed.ncbi.nlm.nih.gov/8743336) | The text provides specific quantitative PK parameters (bioavailability, tmax, t1/2, Vd, protein binding) for molsidomine and its metabolite SIN-1 in humans. |
| `Singlas_1983.pdf` | Singlas E et al., [Human pharmacokinetics of molsidomine], Annales de cardiologie et d… (1983) | popPK | 8 | not captured | [6364946](https://pubmed.ncbi.nlm.nih.gov/6364946) | The text provides quantitative PK parameters including volume of distribution (1 L/kg), half-life (1-2 hours), and bioavailability (60%) for molsidomine in humans. |
| `Wildgrube_1986.pdf` | Wildgrube HJ et al., Liver function and pharmacokinetics of…, Arzneimittel-Forschung (1986) | popPK | 8 | not captured | [3768083](https://pubmed.ncbi.nlm.nih.gov/3768083) | The study reports pharmacokinetic parameters for molsidomine in humans, but the specific numeric values are not present in the provided evidence text. |
| `Wilson_1987.pdf` | Wilson ID et al., The metabolism of [14C]N-ethoxycarbonyl…, Xenobiotica; the fate of fo… (1987) | popPK | 8 | [10.3109/00498258709047179](https://doi.org/10.3109/00498258709047179) | [3825179](https://pubmed.ncbi.nlm.nih.gov/3825179) | The study reports quantitative PK parameters (Cmax, Tmax, half-lives) for molsidomine in humans, but lacks explicit clearance or volume of distribution values. |
| `Kuhn_1989.pdf` | Kuhn M et al., Endothelium-dependent vasodilatation in…, Journal of cardiovascular p… (1989) | pd | 5 | not captured | [2484699](https://www.ncbi.nlm.nih.gov/pubmed/2484699) | metadata signals extractable PD data (EC50) |
| `Nunez_1987.pdf` | Nunez D et al., [Effects of SIN-1, a metabolite of mols…, Pathologie-biologie (1987) | pd | 4 | not captured | [3550639](https://www.ncbi.nlm.nih.gov/pubmed/3550639) | metadata signals extractable PD data (IC50) |
| `Robak_1993.pdf` | Robak J et al., Nitric oxide donors as generators and s…, Polish journal of pharmacol… (1993) | pd | 4 | not captured | [8401759](https://www.ncbi.nlm.nih.gov/pubmed/8401759) | metadata signals extractable PD data (IC50) |
| `Zembowicz_1990.pdf` | Zembowicz A et al., Vasorelaxant and platelet-suppressant p…, Polish journal of pharmacol… (1990) | pd | 4 | not captured | [2124687](https://www.ncbi.nlm.nih.gov/pubmed/2124687) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-06T10:49:08.951583+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bergstrand_1984 | relevant | 8 | 2 | The study reports quantitative PK parameters (bioavailability, clearance, volume) for molsidomine in humans, but specific numeric values for CL and V are not provided in the text, only bioavailability. |
| popPK | Berkenboom_1989 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vascular relaxation mechanisms, not a pharmacokinetic study, and reports no disposition parameters for molsidomine. |
| popPK | Blasini_1984 | irrelevant | 2 | 0 | The study is a clinical efficacy trial focused on anti-ischemic effects (ST-segment depression) and mentions plasma concentrations for bioavailability, but no quantitative PK parameters (CL, V, t1/2, etc.) are provided in the evidence. |
| popPK | Bongartz_2010 | irrelevant | 0 | 0 | The study is a functional pharmacological assessment of cardiac and renal outcomes in rats, reporting no pharmacokinetic parameters (CL, V, ka, etc.) for molsidomine. |
| popPK | Brockmeier_1981 | irrelevant | 0 | 0 | The study focuses on in vitro dissolution modeling of molsidomine formulations, not in vivo pharmacokinetic parameters. |
| popPK | Bult_1989 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of platelet aggregation inhibition by molsidomine's metabolite, reporting no pharmacokinetic parameters. |
| popPK | Bult_1995 | irrelevant | 0 | 0 | The study is a mechanistic investigation of vascular reactivity and fatty streak development in rabbits, reporting no pharmacokinetic parameters (CL, V, ka, etc.) for molsidomine. |
| PD | Bult_1995 | not_relevant | 3 | 2 | The study reports qualitative changes in sensitivity (pD2) and efficacy (Emax) of agonists in tissue segments but does not provide a concentration-effect curve or numeric PD parameters for molsidomine itself. |
| popPK | Chander_2005 | irrelevant | 0 | 0 | The study is a mechanistic/toxicology investigation of molsidomine's protective effects against cyclosporine nephrotoxicity in rats, reporting renal function and oxidative stress markers rather than pharmacokinetic parameters. |
| popPK | Combis_1996 | irrelevant | 0 | 0 | The study reports hemodynamic effects (pressure, flow) of molsidomine in cirrhotic patients but does not provide pharmacokinetic parameters (CL, V, ka, t1/2) for the drug. |
| PD | Dalloz_1997 | not_relevant | 2 | 1 | The paper reports an IC50 for sodium nitroprusside (SNP) but explicitly states that molsidomine did not produce detectable NO or superoxide scavenging effects, providing no numeric PD parameters for molsidomine. |
| popPK | Das_2014 | irrelevant | 0 | 0 | The study investigates the mechanism of DMPO on eNOS in bovine cells and does not involve molsidomine or its pharmacokinetics. |
| popPK | Fach_1984 | irrelevant | 2 | 0 | The study reports pharmacodynamic endpoints (ST-segment depression) and peak plasma concentrations (Cmax) but lacks quantitative disposition parameters such as clearance, volume of distribution, or half-life. |
| popPK | Filip_1998 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment in rats using molsidomine as a tool compound to modulate the effects of amphetamine and cocaine, with no pharmacokinetic parameters reported. |
| popPK | García-Pagán_1996 | irrelevant | 0 | 0 | The study is a hemodynamic trial assessing portal pressure changes, not a pharmacokinetic study reporting disposition parameters for molsidomine. |
| popPK | Gong_2020 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for tacrolimus, not molsidomine. |
| PD | Gong_2020 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for tacrolimus, not molsidomine, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| PGx | Gourgiotis_2012 | not_relevant | 0 | 0 | The paper investigates the behavioral effects of molsidomine as a nitric oxide donor in rats and does not report any pharmacogenomic effects on its pharmacokinetic or pharmacodynamic parameters. |
| popPK | Huber_1992 | irrelevant | 0 | 0 | no_text gate: only 119 chars of text extracted (&lt; 400) |
| popPK | Impagnatiello_2011 | irrelevant | 0 | 0 | Molsidomine is used only as a comparator agent in an ocular pharmacodynamics study, with no pharmacokinetic parameters reported. |
| PD | Impagnatiello_2011 | not_relevant | 3 | 2 | The paper reports a qualitative dose-dependent effect for molsidomine but provides no numeric PD parameters (e.g., EC50, Emax) or concentration-effect data for molsidomine itself. |
| popPK | Jean_2002 | irrelevant | 0 | 0 | The study investigates the effects of nitric oxide inhalation on bacterial clearance in rats and does not involve molsidomine or its pharmacokinetics. |
| popPK | Kanazawa_1999 | irrelevant | 0 | 0 | The study investigates the mechanism of peroxynitrite on beta2-adrenoceptor function in guinea pigs and does not involve molsidomine or its pharmacokinetics. |
| popPK | Khiabani_2002 | irrelevant | 0 | 0 | The study investigates the effects of the nitric oxide donor SIN-1 on ischemia-reperfusion injury in pigs and does not involve molsidomine or report any pharmacokinetic parameters. |
| popPK | Koyani_2015 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on myeloperoxidase and peroxynitrite, with no mention of molsidomine or pharmacokinetic parameters. |
| popPK | Kuhn_1989 | irrelevant | 0 | 0 | no_text gate: only 136 chars of text extracted (&lt; 400) |
| PD | Kuhn_1989 | not_relevant | 0 | 0 | The paper investigates the effects of glyceryl trinitrate and SIN-1, not molsidomine. |
| popPK | Lehmann_1998 | irrelevant | 2 | 0 | The study is a clinical efficacy comparison focusing on anti-ischemic effects and hemodynamics, with no quantitative pharmacokinetic parameters (CL, V, ka, etc.) reported for molsidomine. |
| popPK | Lenaerts_2011 | irrelevant | 0 | 0 | The study investigates the electrophysiological effects of molsidomine as a nitric oxide donor in sheep, not its pharmacokinetic disposition parameters. |
| PD | Lorenc-Koci_2017 | not_relevant | 2 | 1 | The study reports qualitative blood pressure changes following a fixed dose of molsidomine but does not provide concentration-effect data, dose-response curves, or numeric PD parameters (e.g., Emax, EC50). |
| popPK | Meinertz_1985 | relevant | 8 | 0 | The study investigates the pharmacokinetics of molsidomine in humans, but the provided evidence contains only qualitative descriptions and no numeric parameter values. |
| popPK | Messin_2003 | irrelevant | 4 | 2 | The study reports plasma concentration-time data (Cmax, plateau, C24h) but lacks explicit compartmental PK parameters (CL, V, t1/2) or population PK model estimates. |
| popPK | Meyer_1998 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment in rats using molsidomine as a nitric oxide donor to test learning impairment, and it does not report any pharmacokinetic parameters (CL, V, ka, etc.) for molsidomine. |
| popPK | Muramatsu_1983 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vasorelaxing actions and mechanisms, not a pharmacokinetic study reporting disposition parameters. |
| PD | Noack_1989 | not_relevant | 4 | 2 | The paper describes a biochemical concentration-response relationship between SIN-1 (molsidomine metabolite) and guanylate cyclase activation, but the provided text lacks specific numeric PD parameters (e.g., EC50 values, Emax) or a quantitative curve, making them not extractable from this snippet. |
| popPK | Ogawa_2013 | irrelevant | 2 | 0 | This is a review article that mentions molsidomine clearance reduction in heart failure but does not provide specific quantitative PK parameter values (CL, V, etc.) in the provided text. |
| popPK | Ogawa_2014 | irrelevant | 2 | 0 | This is a review article that discusses molsidomine qualitatively (noting increased AUC in decompensated heart failure) but does not provide specific quantitative PK parameter values (CL, V, t1/2) in the provided text. |
| PD | Ostrowski_1985 | not_relevant | 2 | 0 | The paper reports only pharmacokinetic parameters and qualitatively mentions a correlation with pharmacodynamic data, but provides no numeric PD parameters or concentration-effect curves. |
| popPK | Ostrowski_1985_2 | relevant | 10 | 0 | The paper is a pharmacokinetic study of molsidomine in humans, but the provided evidence contains only the abstract/introduction without any numeric parameter values. |
| popPK | Pitsikas_2002 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment investigating memory in rats, not a pharmacokinetic study, and reports no disposition parameters. |
| popPK | Pitsikas_2003 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment investigating memory in rats, not a pharmacokinetic study, and reports no disposition parameters. |
| popPK | Pitsikas_2003_2 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment in rats where molsidomine is used as a nitric oxide donor to modulate GABA(B) receptor effects on memory, not to characterize its pharmacokinetics. |
| popPK | Pitsikas_2005 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment in rats investigating memory, using molsidomine only as a nitric oxide donor to modulate 5-HT1A receptor effects, with no pharmacokinetic parameters reported. |
| PD | Pitsikas_2005 | not_relevant | 2 | 1 | The paper reports qualitative dose-response effects of molsidomine on behavioral outcomes but does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative concentration-effect model. |
| popPK | Pitsikas_2007 | irrelevant | 0 | 0 | The study is a behavioral pharmacology investigation in rats focusing on memory, with no pharmacokinetic parameters reported for molsidomine. |
| PD | Pitsikas_2007 | not_relevant | 2 | 1 | The paper reports a qualitative behavioral interaction between memantine and molsidomine at fixed doses but does not provide a concentration-effect curve, dose-response curve for molsidomine alone, or any numeric PD parameters (e.g., EC50, Emax). |
| popPK | Porst_2004 | irrelevant | 0 | 0 | The paper is a review of PDE5 inhibitors for erectile dysfunction and mentions molsidomine only as a contraindicated co-medication, providing no pharmacokinetic parameters for molsidomine. |
| popPK | Rangan_2001 | irrelevant | 0 | 0 | The study investigates the pharmacological effects of molsidomine on renal inflammation in rats, not its pharmacokinetic parameters. |
| PD | Rehse_1993 | not_relevant | 3 | 2 | The paper reports IC50 values for new sydnone imines and qualitatively compares the hemodynamic effects of one compound to molsidomine, but it does not provide numeric PD parameters or an exposure-response curve for molsidomine itself. |
| popPK | Rietbrock_1992 | irrelevant | 2 | 0 | The study reports bioavailability and qualitative profile features (peaks, dissolution) but lacks quantitative compartmental PK parameters (CL, V, ka) for molsidomine. |
| PD | Robak_1993 | not_relevant | 0 | 0 | The paper explicitly states that molsidomine did not exert any of the studied in vitro activities (NO generation, superoxide scavenging, etc.), so no PD relationship or parameters are reported for it. |
| PD | Rudolph_1991 | not_relevant | 1 | 0 | The text is a qualitative review comparing the mechanisms and clinical profiles of nitrates and molsidomine, containing no numeric PD parameters, concentration-effect curves, or quantitative exposure-response data. |
| popPK | Röhl_1980 | relevant | 4 | 2 | The study reports a half-life of 2.03 hours and plasma levels, but lacks other quantitative disposition parameters like clearance or volume of distribution. |
| popPK | Saighi_2000 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of ureteral tonus, not a pharmacokinetic study, and reports no disposition parameters. |
| popPK | Schütte_1997 | irrelevant | 0 | 0 | The study is a mechanistic/pharmacodynamic investigation of pulmonary vasodilation in buffer-perfused rabbit lungs, not a pharmacokinetic study reporting quantitative disposition parameters for molsidomine. |
| PGx | Schütte_1997 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of aerosolized NO donors in an animal model and does not report any pharmacogenomic effects or gene variant associations. |
| popPK | Sennesael_1993 | irrelevant | 0 | 0 | The study investigates linsidomine (SIN 1), not molsidomine. |
| popPK | Shafiee_2003 | irrelevant | 0 | 0 | The study investigates the antioxidant properties of grape and olive extracts on LDL oxidation and superoxide production, with no mention of molsidomine or its pharmacokinetics. |
| PGx | Sinha_2021 | not_relevant | 0 | 0 | The paper investigates the effect of a nitric oxide donor (NCX-4040) on drug resistance mechanisms (ABC transporters) and does not report pharmacogenomic effects on the PK/PD of molsidomine. |
| popPK | Störk_1994 | irrelevant | 0 | 0 | no_text gate: only 134 chars of text extracted (&lt; 400) |
| popPK | Thulesius_1983 | irrelevant | 0 | 0 | no_text gate: only 95 chars of text extracted (&lt; 400) |
| popPK | Ulrich_2014 | irrelevant | 0 | 0 | The study uses molsidomine as a pharmacological tool (NO donor) to test mechanistic hypotheses in mice, but does not report any pharmacokinetic parameters for molsidomine. |
| popPK | Unger_1993 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of nitrate tolerance in isolated rat aorta, not a pharmacokinetic study of molsidomine. |
| popPK | Vandenbossche_1993 | irrelevant | 0 | 0 | The study investigates the chemical stability of molsidomine in infusion fluids under light exposure, not its pharmacokinetic disposition parameters in a biological system. |
| popPK | Vapaatalo_1994 | irrelevant | 0 | 0 | The paper is a review of NO-donors in cardiology and does not report original quantitative pharmacokinetic parameters for molsidomine. |
| PD | Vapaatalo_1994 | not_relevant | 1 | 0 | The text is a general review of NO-donors in cardiology that mentions molsidomine qualitatively but provides no specific pharmacodynamic data, exposure-response curves, or numeric PD parameters. |
| popPK | Verscheijden_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of morphine, not molsidomine. |
| PD | Verscheijden_2021 | not_relevant | 0 | 0 | The paper reports a PBPK/PD model for morphine, not molsidomine. |
| popPK | Vinel_1990 | irrelevant | 0 | 0 | The study evaluates hemodynamic effects (blood pressure, flow) rather than pharmacokinetic disposition parameters (CL, V, t1/2). |
| popPK | Weber_1985 | irrelevant | 0 | 0 | The paper is a review of vasodilator classification and does not report quantitative pharmacokinetic parameters for molsidomine. |
| popPK | Weber_1987 | irrelevant | 0 | 0 | The text is a clinical review of molsidomine's therapeutic efficacy and mechanism of action, containing no quantitative pharmacokinetic parameters. |
| PD | Weber_1987 | not_relevant | 1 | 0 | The text is a qualitative review of molsidomine's mechanism and clinical efficacy, containing no numeric PD parameters, concentration-effect data, or dose-response curves. |
| PD | Weber_1988 | not_relevant | 1 | 0 | The text is a qualitative review discussing the mechanism of tolerance and suggesting future trials, without providing any numeric PD parameters or concentration-effect data. |
| popPK | Wildgrube_1986 | relevant | 8 | 0 | The study reports pharmacokinetic parameters for molsidomine in humans, but the specific numeric values are not present in the provided evidence text. |
| popPK | Wilson_1986 | irrelevant | 2 | 0 | The study is a qualitative radiometabolism study in animals that identifies metabolites and explains half-life artifacts but does not report quantitative PK parameters (CL, V, ka) for molsidomine. |
| popPK | Zembowicz_1990 | irrelevant | 0 | 0 | no_text gate: only 65 chars of text extracted (&lt; 400) |
| PD | Zembowicz_1990 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text, data, or numeric PD parameters required to assess the exposure-response relationship. |
| popPK | Zordan_2013 | irrelevant | 0 | 0 | The study investigates the immunomodulatory effects of molsidomine in a mouse model of muscular dystrophy and does not report pharmacokinetic parameters. |
| popPK | unknown_1994 | irrelevant | 0 | 0 | no_text gate: only 120 chars of text extracted (&lt; 400) |
| PD | unknown_1994 | not_relevant | 0 | 0 | The provided text is only a title and file description for a conference abstract collection, containing no specific data, models, or numeric parameters for molsidomine. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
