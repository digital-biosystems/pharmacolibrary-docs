<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A14A&quot;,&quot;href&quot;:&quot;atc/A14A.md&quot;},{&quot;label&quot;:&quot;prasterone&quot;}]"></div>

# prasterone

- **generic name:** prasterone
- **ATC codes:** `A14AA07`, `G03EA03`, `G03XX01`
- **DrugBank:** [DB01708](https://go.drugbank.com/drugs/DB01708) · **PubChem:** [CID 5881](https://pubchem.ncbi.nlm.nih.gov/compound/5881)
- **molar mass:** 288.4244 g/mol (C19H28O2) — DrugBank
- **groups:** approved, investigational, nutraceutical

## About

Prasterone (dehydroepiandrosterone) is a steroid hormone used as an anabolic agent and sex hormone, and in the European Union it is authorised for treating vaginal dryness and discomfort after menopause. It is approved in the European Union for postmenopausal use, and is also sold as a nutraceutical with some investigational uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q55630367](https://www.wikidata.org/wiki/Q55630367) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 10:26 | 4:14 | 0/0/0 | 0/0/0 | 0/0/0 | 140,107/5,250 | ollama / qwen3.8:27b-mtp-q8_0 | 7 | 3/4 | 7/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=prasterone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCG2` substrate, `SLCO1A2` substrate | DrugBank actor |
| absorption | liver | `ABCG2` substrate, `SLCO2B1` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | small intestine | `ABCG2` substrate, `SLCO1A2` substrate, `SLCO2B1` substrate | DrugBank actor |
| absorption | testis | `ABCG2` substrate | DrugBank actor |
| distribution | blood-brain barrier | `ABCC1` substrate | DrugBank actor |
| distribution | lung | `ABCC1` substrate | DrugBank actor |
| metabolism | liver | `CYP3A7` inhibitor/substrate, `SLCO1B1` substrate, `SLCO1B3` substrate | DrugBank actor |
| excretion | kidney | `ABCC4` substrate | DrugBank actor |
| excretion | liver | `ABCC4` substrate | DrugBank actor |
| — | adrenal gland | `CYP17A1` product | DrugBank actor |
| — | prostate gland | `AR` target | DrugBank actor |
| — | testis | `CYP17A1` product | DrugBank actor |

<sub>Actors without a tissue in the table: ESR1 (binder), ESR2 (activator), G6PD (inhibitor), GABRA1 (target), GRIN1 (target), HSD17B1 (substrate), HSD3B1 (substrate), NR1I2 (activator), NR1I3 (activator), PPARA (activator), SIGMAR1 (target), SULT2A1 (substrate), SULT2B1 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 211 matched, 95 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Acacio_2004 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of dehydroepiandrosterone (DHEA) and its metabolites, not prasterone. |
| popPK | Ahlem_2011 | irrelevant | 0 | 0 | The study focuses on HE3286 (17α-ethynyl-androst-5-ene-3β,7β,17β-triol), not prasterone, and does not report PK parameters for prasterone. |
| popPK | Ahlem_2011_2 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and pharmacology of βAET (a DHEA metabolite), not prasterone. |
| popPK | Alshaqi_2026 | irrelevant | 0 | 0 | The paper is a systematic review on infertility treatment in women with epilepsy and does not report pharmacokinetic parameters for prasterone. |
| popPK | Bird_1976 | irrelevant | 0 | 0 | The study measures pharmacokinetic parameters for delta5-androstenediol, not prasterone. |
| popPK | Bonen_1987 | irrelevant | 0 | 0 | The study investigates hormonal responses to marathon running and does not report pharmacokinetic parameters for prasterone. |
| popPK | Bongiovanni_2015 | irrelevant | 0 | 0 | The study investigates the immunomodulatory effects of cortisol and DHEA on macrophages infected with Mycobacterium tuberculosis and does not involve prasterone or pharmacokinetic parameters. |
| popPK | Boudou_1995 | irrelevant | 0 | 0 | The study focuses on androgen glucosiduronates in hemodialysis patients and does not report pharmacokinetic parameters for prasterone. |
| popPK | Catalina_1999 | irrelevant | 0 | 0 | The study investigates the immunological effects of DHEA in mice and does not report any pharmacokinetic parameters for prasterone. |
| popPK | Cawley_2004 | irrelevant | 0 | 0 | The study focuses on DHEA and its metabolite 3alpha,5-cyclo for doping detection, not prasterone. |
| popPK | Ci_2007 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cephalosporin antibiotics (ceftizoxime and cefazolin) in mice, not prasterone. |
| popPK | Collier_2009 | irrelevant | 0 | 0 | The study focuses on placental steroid metabolism in a murine model of assisted reproduction and does not report pharmacokinetic parameters for prasterone. |
| popPK | Connell_1984 | irrelevant | 0 | 0 | The study investigates the effect of carbamazepine on androgens (testosterone, etc.) and does not involve prasterone. |
| popPK | Deguchi_2003 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of indoxyl sulphate in rats, not prasterone. |
| popPK | Donovan_2005 | irrelevant | 0 | 0 | The study investigates the effect of St John's Wort on endogenous androgen concentrations (testosterone, DHT, etc.) and does not involve the administration or pharmacokinetic modeling of prasterone. |
| popPK | Dow_2025 | irrelevant | 0 | 0 | The paper discusses Bromo-Epi-Androsterone (BEA) for tuberculosis treatment and does not report pharmacokinetic parameters for prasterone. |
| popPK | Dowsett_1991 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of pyridoglutethimide (PyG), not prasterone. |
| popPK | Duszczyk-Budhathoki_2012 | irrelevant | 0 | 0 | The study investigates the neurotoxicity of thimerosal and the protective effects of DHEAS in rats, and does not involve prasterone or its pharmacokinetics. |
| popPK | Fei_2025 | irrelevant | 0 | 0 | The study focuses on DHEA delivery for CNS diseases and does not involve prasterone or its pharmacokinetics. |
| popPK | Fischer_2004 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of soy isoflavones (genistein and daidzein), not prasterone. |
| popPK | Fritz_1986 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of dehydroepiandrosterone and estradiol in baboons, not prasterone. |
| popPK | Gambineri_2006 | irrelevant | 0 | 0 | The study investigates genetic variation in 11beta-HSD1 and its effect on cortisol and androgen levels in PCOS, with no mention of prasterone pharmacokinetics. |
| popPK | Gambineri_2009 | irrelevant | 0 | 0 | The study investigates cortisol metabolism in PCOS and does not report pharmacokinetic parameters for prasterone. |
| PD | Grimley_2006 | not_relevant | 0 | 0 | The paper is a systematic review of clinical trials assessing cognitive outcomes, containing no pharmacokinetic data, concentration-effect analysis, or numeric PD parameters. |
| popPK | Haning_1991 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of dehydroepiandrosterone sulfate (DHEA-S) and its metabolites, not prasterone. |
| popPK | Heap_1975 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of progesterone in goats, not prasterone. |
| popPK | Holton_2020 | irrelevant | 2 | 0 | This is a review article describing prasterone's pharmacokinetics, but the provided evidence contains no quantitative PK parameter values (CL, V, etc.). |
| popPK | Hsu_2009 | irrelevant | 0 | 0 | The study measures DHEA-S levels in hemodialysis patients and does not report pharmacokinetic parameters for prasterone. |
| popPK | Hubinont_1988 | irrelevant | 0 | 0 | The paper studies hormonal parameters in pregnancy and does not mention prasterone or its pharmacokinetics. |
| popPK | Hvizdak_2023 | irrelevant | 0 | 0 | The paper investigates the inhibition of CYP3A7 by PFAS compounds and does not report pharmacokinetic parameters for prasterone. |
| popPK | IACONO_1964 | irrelevant | 0 | 0 | no_text gate: only 127 chars of text extracted (&lt; 400) |
| popPK | JACONO_1962 | irrelevant | 0 | 0 | no_text gate: only 254 chars of text extracted (&lt; 400) |
| popPK | Jahn_2011 | irrelevant | 0 | 0 | The study investigates the renal effects of DHEA in diabetic rats and does not report pharmacokinetic parameters for prasterone. |
| PD | Kaiser_1983 | not_relevant | 1 | 0 | The paper reports clinical outcomes (duration of symptoms) for different treatment groups but does not provide pharmacokinetic data, exposure levels, or a quantitative dose-response/PD model with numeric parameters like Emax or EC50. |
| popPK | Khan_2023 | irrelevant | 0 | 0 | The paper describes the synthesis and in vitro antifungal activity of novel steroidal 1,4-dihydropyridines, not the pharmacokinetics of prasterone. |
| popPK | Kikuchi_2014 | irrelevant | 0 | 0 | The study characterizes the pharmacokinetics of ASP9521, not prasterone. |
| popPK | Kirschner_1983 | irrelevant | 0 | 0 | The paper discusses androgen production and clearance in women but does not study prasterone or report PK parameters for it. |
| popPK | Kocis_2006 | irrelevant | 1 | 0 | The paper is a review discussing pharmacology and clinical efficacy but does not report specific quantitative pharmacokinetic parameter values (e.g., CL, V, t1/2) in the provided evidence. |
| PD | Kocis_2006 | not_relevant | 1 | 0 | The text is a general review summary discussing clinical efficacy and safety without reporting specific pharmacokinetic data, concentration-effect curves, or numeric PD parameters. |
| popPK | Leblanc_2003 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of dehydroepiandrosterone (DHEA), not prasterone. |
| popPK | Lindsay_2008 | irrelevant | 0 | 0 | The paper is a review of sulfotransferase enzymes and does not report pharmacokinetic parameters for prasterone. |
| popPK | Longcope_1996 | irrelevant | 0 | 0 | The paper discusses DHEA/DHEAS metabolism and clearance, not prasterone pharmacokinetics. |
| popPK | Malagnino_2018 | irrelevant | 0 | 0 | The study investigates the function of the LST-3TM12 transporter in vitro and does not report pharmacokinetic parameters for prasterone. |
| popPK | Malagnino_2019 | irrelevant | 0 | 0 | The study focuses on the transporter OATP1B3-1B7 and its interaction with ezetimibe and DHEA sulfate, not the pharmacokinetics of prasterone. |
| popPK | Mazzarino_2010 | irrelevant | 0 | 0 | The study focuses on the urinary excretion of endogenous androgenic steroids (testosterone metabolites) and the effect of NSAIDs on their detection, not on the pharmacokinetics of prasterone. |
| popPK | Medwid_2021 | irrelevant | 0 | 0 | The study focuses on OATP2B1 transporter variants and endogenous substrates (e.g., estrone sulfate, DHEAS), not the pharmacokinetics of prasterone. |
| popPK | Myren_1989 | irrelevant | 0 | 0 | The study measures testosterone and other androgens in pigs, not prasterone pharmacokinetics. |
| popPK | Nishimura_2008 | irrelevant | 0 | 0 | The study investigates zidovudine uptake in rat cells and does not involve prasterone. |
| popPK | Noguchi_2015 | irrelevant | 0 | 0 | The study investigates the transport mechanism of olmesartan, not prasterone. |
| PD | Norman_2001 | not_relevant | 0 | 0 | The text is a business and regulatory summary of the drug development timeline and does not contain any pharmacodynamic data, exposure-response analysis, or numeric PD parameters. |
| popPK | Onsrud_1985 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of hydroxyprogesterone caproate, not prasterone. |
| popPK | Papanastasiou_2017 | irrelevant | 0 | 0 | The paper is a review of adrenal disorders and NAFLD and does not contain pharmacokinetic data for prasterone. |
| popPK | Pathak_2024 | irrelevant | 0 | 0 | The paper is a review of diosgenin chemistry and pharmacology, not a pharmacokinetic study of prasterone. |
| popPK | Peter_1994 | irrelevant | 0 | 0 | The study measures plasma concentrations of dehydroepiandrosterone sulfate (DHEAS) and estriol, not prasterone, and does not report PK parameters for prasterone. |
| PD | Petri_2002 | not_relevant | 2 | 0 | The paper reports clinical response rates (dose-response) for prasterone but does not provide concentration-effect data, PK/PD modeling, or numeric PD parameters like Emax or EC50. |
| PD | Petri_2004 | not_relevant | 0 | 0 | The paper reports clinical efficacy outcomes (response rates) for a fixed dose (200 mg/day) but does not provide concentration-effect data, PK/PD modeling, or numeric PD parameters like Emax or EC50. |
| popPK | Piper_2010 | irrelevant | 0 | 0 | The paper describes a method for measuring stable carbon isotopes of urinary steroids for doping control and does not report pharmacokinetic parameters for prasterone. |
| popPK | Prothon_2022 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of velsecorat (AZD7594), not prasterone. |
| popPK | Pugeat_1989 | irrelevant | 0 | 0 | The paper is a review of androgen metabolism and does not report pharmacokinetic parameters for prasterone. |
| popPK | Rasmuson_2011 | irrelevant | 0 | 0 | The study measures DHEA (dehydroepiandrosterone), not prasterone, and does not report pharmacokinetic parameters for prasterone. |
| popPK | Reed_1986 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of dehydroepiandrosterone sulphate and oestrone sulphate, not prasterone. |
| popPK | Reed_1988 | irrelevant | 0 | 0 | The study investigates the metabolism of oestradiol, not prasterone. |
| popPK | Remer_1993 | irrelevant | 0 | 0 | The study investigates DHEA-S levels in rats and does not involve prasterone or its pharmacokinetics. |
| popPK | Salman_1991 | irrelevant | 0 | 0 | The study measures serum androgen levels in hirsute women and does not involve prasterone or report pharmacokinetic parameters. |
| popPK | Saudan_2006 | irrelevant | 0 | 0 | The paper is a review of doping control methods for testosterone and does not report pharmacokinetic parameters for prasterone. |
| popPK | Schiebinger_1986 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of dehydroepiandrosterone sulfate (DHAS), not prasterone. |
| popPK | Schut_1978 | irrelevant | 0 | 0 | The study measures the pharmacokinetics of dehydroepiandrosterone (DHEA) and its sulfate in baboons, not prasterone. |
| popPK | Schut_1978_2 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of dehydroepiandrosterone (DHEA) and its sulfate in baboons, not prasterone. |
| popPK | Shah_2014 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of human chorionic gonadotropin (hCG), not prasterone. |
| popPK | Shao_2015 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of moxifloxacin in rats, not prasterone. |
| popPK | Shen_2017 | irrelevant | 0 | 0 | The study focuses on endogenous biomarkers for OATP inhibition and does not report pharmacokinetic parameters for prasterone. |
| popPK | Stege_1987 | irrelevant | 0 | 0 | The study measures serum levels of adrenal androgens (DHA, DHAS, etc.) in prostate cancer patients and does not involve prasterone or its pharmacokinetics. |
| popPK | Stevens_2003 | irrelevant | 0 | 0 | The study characterizes developmental expression of CYP3A enzymes using dehydroepiandrosterone as a probe substrate, not prasterone. |
| popPK | Stickney_2011 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of androst-5-ene-3β,7β,17β-triol (βAET), a different compound, rather than prasterone. |
| popPK | Strott_1970 | irrelevant | 0 | 0 | The study measures the pharmacokinetics of 17-hydroxypregnenolone, not prasterone. |
| popPK | Su_2023 | irrelevant | 0 | 0 | The study investigates the effects of a traditional Chinese medicine formula on gut microbiota in PCOS mice and does not report pharmacokinetic parameters for prasterone. |
| popPK | Sufka_2009 | irrelevant | 0 | 0 | The study is a behavioral pharmacology screen in chicks measuring vocalization rates, not a pharmacokinetic study, and reports no disposition parameters for prasterone. |
| PD | Sufka_2009 | not_relevant | 3 | 0 | The paper reports qualitative dose-response observations (attenuation/enhancement) for prasterone in a chick model but does not provide numeric PD parameters (e.g., EC50, Emax) or quantitative effect-vs-dose data in the text. |
| popPK | Swink_2021 | irrelevant | 0 | 0 | The study measures endogenous androgen concentrations (DHEA, testosterone, etc.) in foals and does not involve the administration or pharmacokinetic modeling of prasterone. |
| popPK | Szmulewitz_2018 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and efficacy of abiraterone acetate, not prasterone. |
| popPK | Tomaszewski_2009 | irrelevant | 0 | 0 | The study is a cross-sectional epidemiological analysis of the association between circulating androgen levels and renal function, not a pharmacokinetic study of prasterone. |
| popPK | Tsika_2021 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of BNN27, a DHEA derivative, not prasterone. |
| popPK | Ugele_2008 | irrelevant | 0 | 0 | The study investigates the transport kinetics of DHEA-S and estrone sulfate in placental cells, not the pharmacokinetics of prasterone. |
| popPK | Varges_2026 | irrelevant | 0 | 0 | The study focuses on novel steroidal (thio)barbiturate hybrids, not prasterone, and only mentions preliminary PK of the hybrids without quantitative parameters for prasterone. |
| popPK | Vecchione_2025 | irrelevant | 0 | 0 | The study investigates 7-oxo-DHEA (a different compound) for tuberculosis treatment and does not report pharmacokinetic parameters for prasterone. |
| popPK | Wang_1967 | irrelevant | 0 | 0 | no_text gate: only 118 chars of text extracted (&lt; 400) |
| popPK | Werkström_2016 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of AZD5423, not prasterone. |
| popPK | Wu_2014 | irrelevant | 0 | 0 | The study investigates the association between DHEAS levels and Hepatitis B virus clearance, not the pharmacokinetics of prasterone. |
| popPK | Yamakita_2002 | irrelevant | 0 | 0 | The paper is a clinical case report on an adrenocortical adenoma and does not study the pharmacokinetics of prasterone. |
| popPK | Yiallouris_2019 | irrelevant | 0 | 0 | The paper is a review of adrenal aging and stress responsiveness in humans, focusing on cortisol, DHEA, and catecholamines, with no mention of prasterone or its pharmacokinetics. |
| popPK | Zheng_2019 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of jervine in rats, not prasterone. |
| popPK | Zimmerman_2013 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of dehydroepiandrosterone (DHEA), not prasterone. |
| PD | unknown_2018 | not_relevant | 0 | 0 | The provided text is a title/fragment regarding estradiol, not prasterone, and contains no data or analysis. |
| PD | unknown_2020 | not_relevant | 1 | 0 | The text is a title for a review article on drugs for menopausal symptoms and contains no specific data, models, or numeric parameters for prasterone. |
| PD | unknown_2024 | not_relevant | 1 | 0 | The text is a title for a review article on drugs for menopausal symptoms and contains no specific data, models, or numeric parameters for prasterone. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
