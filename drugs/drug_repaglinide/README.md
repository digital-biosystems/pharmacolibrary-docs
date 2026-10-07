<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;repaglinide&quot;}]"></div>

# repaglinide

- **generic name:** repaglinide
- **ATC codes:** `A10BD14`, `A10BX02`
- **DrugBank:** [DB00912](https://go.drugbank.com/drugs/DB00912) · **PubChem:** [CID 65981](https://pubchem.ncbi.nlm.nih.gov/compound/65981)
- **molar mass:** 452.5857 g/mol (C27H36N2O4) — DrugBank
- **groups:** approved, investigational

## About

Repaglinide is an oral anti-diabetic medicine used to lower blood sugar in people with type 2 diabetes. It is authorised in the European Union and is widely used as a blood glucose-lowering drug, both alone and in combination products.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2195995](https://www.wikidata.org/wiki/Q2195995) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| repaglinide | parent | 452.586 | C27H36N2O4 | DrugBank | [65981](https://pubchem.ncbi.nlm.nih.gov/compound/65981) | Doki_2018, Ruzilawati_2010 |
| gemfibrozil | metabolite | 250.338 | C15H22O3 | PubChem | [3463](https://pubchem.ncbi.nlm.nih.gov/compound/3463) | Doki_2018 |
| gemfibrozil 1-O-β glucuronide | metabolite | 426.462 | C21H30O9 | PubChem | [88127](https://pubchem.ncbi.nlm.nih.gov/compound/88127) | Doki_2018 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:14 | 1:44 | 0/2/1 | 0/0/0 | 0/0/0 | 87,416/4,359 | einfracz / qwen3.8-27b | 11 | 3/8 | 11/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.44). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Doki_2018_reference](drugs/drug_repaglinide/Repaglinide_Doki2018_reference.md) | — | parent + metabolite (no model) | 6 (+7 cov.) | Doki K et al., Implications of intercorrelation betwee…, British journal of clinical… (2018) | [10.1111/bcp.13533](https://doi.org/10.1111/bcp.13533) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (primary re-run, agreement 0.4). The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Gertz_2014_reference](drugs/drug_repaglinide/Repaglinide_Gertz2014_reference.md) | — | 1-compartment (no model) | 0 | Gertz M et al., Reduced physiologically-based pharmacok…, Pharmaceutical research (2014) | [10.1007/s11095-014-1333-3](https://doi.org/10.1007/s11095-014-1333-3) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Ruzilawati_2010_reference](drugs/drug_repaglinide/Repaglinide_Ruzilawati2010_reference.md) | — | 1-compartment (no model) | 2 | Ruzilawati AB et al., Population pharmacokinetic modelling of…, Journal of clinical pharmac… (2010) | [10.1111/j.1365-2710.2009.01042.x](https://doi.org/10.1111/j.1365-2710.2009.01042.x) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=repaglinide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| distribution | blood | `ALB` unknown | DrugBank actor |
| metabolism | liver | `CYP2C8` substrate, `CYP3A4` substrate, `SLCO1B1` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | liver | `ABCB11` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ABCC8 (inhibitor), ABCC9 (blocker), HRH1 (target), PPARG (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 292 matched, 58 returned
- **screened:** 9  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs_review 1  ·  rejected 2  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full text wanted

_16 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ruzilawati_2010.pdf` | Ruzilawati AB et al., Population pharmacokinetic modelling of…, Journal of clinical pharmac… (2010) | popPK | 10 | [10.1111/j.1365-2710.2009.01042.x](https://doi.org/10.1111/j.1365-2710.2009.01042.x) | [20175819](https://pubmed.ncbi.nlm.nih.gov/20175819) | The abstract explicitly reports mean elimination rate constant and volume of distribution for repaglinide in healthy volunteers. |
| `Gertz_2014.pdf` | Gertz M et al., Reduced physiologically-based pharmacok…, Pharmaceutical research (2014) | popPK | 9 | [10.1007/s11095-014-1333-3](https://doi.org/10.1007/s11095-014-1333-3) | [24623479](https://pubmed.ncbi.nlm.nih.gov/24623479) | The study reports quantitative PK parameters for repaglinide (hepatic uptake clearance CLuptake) based on a PBPK model, and the specific numeric values for CLuptake (217 and 113 μL/min/10^6 cells) are present in the text, though standard disposition parameters like CL or V are derived/implicit rather than explicitly listed as totals. |
| `Liu_2000.pdf` | Liu XD et al., A double-site absorption model fits to…, European journal of drug me… (2000) | popPK | 9 | [10.1007/BF03190077](https://doi.org/10.1007/BF03190077) | [11112092](https://pubmed.ncbi.nlm.nih.gov/11112092) | The paper reports quantitative pharmacokinetic parameters (Tmax, Cmax, and lag times T1-T3) for repaglinide in humans using a specific double-site absorption model, although it lacks explicit CL/Vd values. |
| `Cao_2012.pdf` | Cao Y et al., Applications of minimal physiologically…, Journal of pharmacokinetics… (2012) | popPK | 8 | [10.1007/s10928-012-9280-2](https://doi.org/10.1007/s10928-012-9280-2) | [23179857](https://pubmed.ncbi.nlm.nih.gov/23179857) | The study applies a minimal-PBPK model to repaglinide data, but the specific numeric parameter values (clearance, volume, etc.) are not provided in the text evidence. |
| `Li_2012.pdf` | Li C et al., Effects of efonidipine on the pharmacok…, Journal of pharmacokinetics… (2012) | pd | 5 | [10.1007/s10928-011-9234-0](https://doi.org/10.1007/s10928-011-9234-0) | [22210483](https://www.ncbi.nlm.nih.gov/pubmed/22210483) | metadata signals extractable PD data (indirectresponse) |
| `Lim_2004.pdf` | Lim JG et al., Taurine block of cloned ATP-sensitive K…, Biochemical pharmacology (2004) | pd | 4 | [10.1016/j.bcp.2004.05.050](https://doi.org/10.1016/j.bcp.2004.05.050) | [15294453](https://www.ncbi.nlm.nih.gov/pubmed/15294453) | metadata signals extractable PD data (IC50) |
| `Kalliokoski_2010.pdf` | Kalliokoski A et al., SLCO1B1 polymorphism and oral antidiabe…, Basic & clinical pharmacolo… (2010) | pgx | 8 | [10.1111/j.1742-7843.2010.00581.x](https://doi.org/10.1111/j.1742-7843.2010.00581.x) | [20406215](https://www.ncbi.nlm.nih.gov/pubmed/20406215) | metadata signals extractable PGX data (SLCO1B1, PK/PD-context) |
| `Pei_2018.pdf` | Pei Q et al., Repaglinide-irbesartan drug interaction…, European journal of clinica… (2018) | pgx | 8 | [10.1007/s00228-018-2477-6](https://doi.org/10.1007/s00228-018-2477-6) | [29748863](https://www.ncbi.nlm.nih.gov/pubmed/29748863) | metadata signals extractable PGX data (SLCO1B1, PK/PD-context) |
| `Tomalik-Scharte_2011.pdf` | Tomalik-Scharte D et al., Effect of the CYP2C8 genotype on the ph…, Drug metabolism and disposi… (2011) | pgx | 8 | [10.1124/dmd.110.036921](https://doi.org/10.1124/dmd.110.036921) | [21270106](https://www.ncbi.nlm.nih.gov/pubmed/21270106) | metadata signals extractable PGX data (CYP2C8, PK/PD-context) |
| `Cheng_2025.pdf` | Cheng Y et al., Evaluating the drug-drug interactions o…, Expert opinion on drug meta… (2025) | pgx | 7 | [10.1080/17425255.2024.2428367](https://doi.org/10.1080/17425255.2024.2428367) | [39530130](https://www.ncbi.nlm.nih.gov/pubmed/39530130) | metadata signals extractable PGX data (CYP2C8, PK/PD-context) |
| `Fu_2023.pdf` | Fu M et al., Effect of SHR0302 on the pharmacokineti…, British journal of clinical… (2023) | pgx | 7 | [10.1111/bcp.15856](https://doi.org/10.1111/bcp.15856) | [37464978](https://www.ncbi.nlm.nih.gov/pubmed/37464978) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Mamidi_2017.pdf` | Mamidi RNVS et al., In vitro and physiologically-based phar…, British journal of clinical… (2017) | pgx | 7 | [10.1111/bcp.13186](https://doi.org/10.1111/bcp.13186) | [27862160](https://www.ncbi.nlm.nih.gov/pubmed/27862160) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Melillo_2019.pdf` | Melillo N et al., Accounting for inter-correlation betwee…, Journal of pharmacokinetics… (2019) | pgx | 7 | [10.1007/s10928-019-09627-6](https://doi.org/10.1007/s10928-019-09627-6) | [30905037](https://www.ncbi.nlm.nih.gov/pubmed/30905037) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Varma_2013.pdf` | Varma MV et al., Mechanistic modeling to predict the tra…, Pharmaceutical research (2013) | pgx | 7 | [10.1007/s11095-012-0956-5](https://doi.org/10.1007/s11095-012-0956-5) | [23307347](https://www.ncbi.nlm.nih.gov/pubmed/23307347) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Xiao_2015.pdf` | Xiao Q et al., Physiologically based pharmacokinetics…, Biopharmaceutics & drug dis… (2015) | pgx | 7 | [10.1002/bdd.1987](https://doi.org/10.1002/bdd.1987) | [26296069](https://www.ncbi.nlm.nih.gov/pubmed/26296069) | metadata signals extractable PGX data (CYP2C8, PK/PD-context) |
| `Gan_2010.pdf` | Gan J et al., Repaglinide-gemfibrozil drug interactio…, British journal of clinical… (2010) | pgx | 5 | [10.1111/j.1365-2125.2010.03772.x](https://doi.org/10.1111/j.1365-2125.2010.03772.x) | [21175442](https://www.ncbi.nlm.nih.gov/pubmed/21175442) | metadata signals extractable PGX data (UGT1A1) |

<sub>queue written 2026-10-07T16:12:28.424226+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Aurinsalo_2026 | not_relevant | 0 | 10 | The study investigates drug-drug interactions (grapefruit juice and lingonberry) on repaglinide PK, but does not report any pharmacogenomic effects (gene variants) on the drug. |
| popPK | Cao_2012 | relevant | 8 | 2 | The study applies a minimal-PBPK model to repaglinide data, but the specific numeric parameter values (clearance, volume, etc.) are not provided in the text evidence. |
| PGx | Chen_2015 | not_relevant | 5 | 0 | The text is a general review introduction that lists relevant genes (e.g., CYP2C9, SLCO1B1) but does not report specific quantitative effect sizes or fitted parameters for repaglinide. |
| PGx | Cheng_2025 | not_relevant | 0 | 0 | The study evaluates drug-drug interactions involving a CYP inhibitor (SHR4640), not the impact of genetic variants or phenotypes on pharmacokinetics. |
| PGx | Dai_2021 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (napabucasin on repaglinide PK), not the effect of a specific gene variant/genotype on a pharmacokinetic parameter. |
| PGx | Doki_2018 | not_relevant | 0 | 0 | The study focuses on physiological enzyme abundance correlations in a PBPK model, not on the effect of specific gene variants or genotypes on pharmacokinetic parameters. |
| PGx | Fu_2023 | not_relevant | 0 | 0 | The study investigates drug-drug interactions with a new compound (SHR0302) and does not report effects of gene variants on repaglinide pharmacokinetics. |
| popPK | Fuhlendorff_1998 | irrelevant | 0 | 0 | The study focuses on the mechanism of action (binding, insulin secretion, exocytosis) and potency (ED50) rather than pharmacokinetic disposition parameters like clearance or volume. |
| PGx | Gan_2010 | not_relevant | 2 | 5 | The paper investigates a drug-drug interaction (gemfibrozil) and mentions a UGT1A1 genotype panel, but it does not report a specific pharmacogenomic effect size (e.g., PK parameter change) linked to the genotype for repaglinide. |
| popPK | Haidar_2002 | irrelevant | 2 | 0 | The paper describes a modeling methodology using neural networks for a Phase 2 trial but provides no quantitative PK parameter values (CL, V, ka, etc.) in the evidence. |
| PGx | Hartauer_2024 | not_relevant | 0 | 0 | The paper investigates rifampicin-mediated drug-drug interactions and zonal transporter distribution, not the effect of genetic variants on pharmacokinetics or pharmacodynamics. |
| PGx | Hoosain_2016 | not_relevant | 0 | 0 | The paper focuses on mapping SLCO1B1 genotype frequencies in Zulu and Cape admixed populations, with no specific pharmacokinetic data for repaglinide. |
| popPK | Hu_2001 | irrelevant | 0 | 0 | The study focuses on in-vitro insulinotropic effects (mechanism of action) rather than quantitative pharmacokinetic parameters (CL, V, etc.) for repaglinide. |
| PGx | Ishii_2018 | not_relevant | 0 | 0 | The paper studies a drug-drug interaction (pharmacokinetic effect of a prodrug) and does not report a pharmacogenomic effect of a gene variant on repaglinide. |
| PGx | Jaiswal_2025 | not_relevant | 0 | 0 | The paper focuses on drug-drug interactions (DDI) and PBPK modeling for dordaviprone, with no data or analysis regarding pharmacogenomic variants or genotypes affecting PK/PD. |
| PGx | Kahma_2024 | not_relevant | 0 | 0 | The paper reports on in vitro inhibition of CYP enzymes by drug glucuronides, not pharmacogenomic effects on repaglinide PK/PD. |
| PGx | Kajosaari_2005 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions and enzyme contributions using pooled human liver microsomes and recombinant enzymes, but does not report pharmacogenomic effects of specific genetic variants on repaglinide PK/PD parameters. |
| PGx | Lenuzza_2016 | not_relevant | 0 | 0 | The paper evaluates the safety and pharmacokinetics of a CYP inhibitor/inducer cocktail (CIME) in healthy volunteers, not the effect of a specific genetic variant on repaglinide pharmacokinetics. |
| popPK | Li_2012 | irrelevant | 0 | 0 | no_text gate: only 152 chars of text extracted (&lt; 400) |
| popPK | Lim_2004 | irrelevant | 0 | 0 | no_text gate: only 131 chars of text extracted (&lt; 400) |
| PD | Lim_2004 | not_relevant | 0 | 0 | The paper investigates the electrophysiological effects of taurine on cloned ATP-sensitive K+ channels in Xenopus oocytes and does not involve repaglinide or any pharmacokinetic/pharmacodynamic modeling. |
| PGx | Mamidi_2017 | not_relevant | 0 | 0 | The paper assesses drug-drug interaction potential of canagliflozin and mentions repaglinide only as a CYP probe substrate in PBPK simulations, without reporting any pharmacogenomic effects. |
| popPK | Mayer_2011 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of glimepiride and glibenclamide, where repaglinide is only used as a negative control for adipogenesis with no PK parameters reported. |
| PD | Mayer_2011 | not_relevant | 0 | 0 | The paper investigates glimepiride and glibenclamide, and explicitly states that repaglinide had no effect on adipogenesis, providing no PD parameters for repaglinide. |
| popPK | Mele_2014 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of muscle atrophy mechanisms, not a pharmacokinetic study, and reports no disposition parameters. |
| popPK | Melillo_2019 | irrelevant | 0 | 0 | no_text gate: only 177 chars of text extracted (&lt; 400) |
| PGx | Melillo_2019 | not_relevant | 0 | 0 | The paper is a general simulation study regarding sensitivity analysis in PBPK models and does not mention repaglinide or specific pharmacogenomic variants. |
| popPK | Ménochet_2012 | irrelevant | 1 | 0 | The study is an in-vitro mechanistic model of hepatic uptake and metabolism in rat hepatocytes, not a pharmacokinetic disposition study (no CL, V, or half-life in an organism). |
| popPK | Ménochet_2012_2 | irrelevant | 3 | 2 | The study is an in-vitro mechanistic modeling study of uptake kinetics in hepatocytes rather than a physiological pharmacokinetic study, and the specific numeric parameter values are not explicitly listed in the provided evidence. |
| PGx | Ogilvie_2006 | not_relevant | 0 | 0 | The study investigates the mechanism of gemfibrozil-gemfibrozil glucuronide CYP2C8 inhibition in vitro, not the effect of a genetic variant on repaglinide PK/PD. |
| PGx | Pakkir_2018 | not_relevant | 2 | 1 | The paper reviews drug-drug interactions (CYP/OATP inhibitors) but does not report pharmacogenomic variants affecting repaglinide PK/PD. |
| PGx | Sang_2025 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions of isavuconazole and does not report pharmacogenomic effects (gene variants) on repaglinide. |
| PGx | Stenglein_2026 | not_relevant | 0 | 0 | The study focuses on a drug-drug interaction using repaglinide as a CYP2C8 probe substrate for zapnometinib and does not report pharmacogenomic effects on repaglinide parameters. |
| PGx | Topletz-Erickson_2022 | not_relevant | 0 | 0 | The paper describes drug-drug interactions involving repaglinide and tucatinib, not the pharmacogenomic (genetic variant) effects on repaglinide's PK/PD parameters. |
| PGx | Türk_2020 | not_relevant | 2 | 1 | The paper reports a PBPK model for trimethoprim; while repaglinide is mentioned as a DDI prediction target, the study does not report primary pharmacogenomic effects on repaglinide PK/PD parameters. |
| PGx | Varma_2013 | not_relevant | 0 | 0 | The study focuses on mechanistic modeling of drug-drug interactions (gemfibrozil) and does not report pharmacogenomic effects of genetic variants on repaglinide PK or PD. |
| PGx | Wang_2015 | not_relevant | 0 | 0 | The paper reports drug-drug interactions (pharmacokinetic changes in repaglinide caused by clopidogrel), but does not report pharmacogenomic effects (gene variant/genotype) on repaglinide PK/PD. |
| popPK | Wängler_2004 | irrelevant | 0 | 0 | The study focuses on the synthesis and in vitro receptor binding/secretion of a radio-labeled analog (imaging agent), not on population pharmacokinetic disposition parameters. |
| popPK | Wängler_2004_2 | irrelevant | 1 | 0 | The paper describes the synthesis and initial biodistribution of a radiolabeled derivative of repaglinide for PET imaging, not the pharmacokinetic parameters (CL, V, ka) of the parent drug repaglinide itself. |
| PGx | Xiao_2015 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (repaglinide inhibiting pioglitazone) and does not report any pharmacogenomic effects (gene variants) on the PK/PD of repaglinide. |
| PGx | Yılmaz_2022 | not_relevant | 0 | 0 | The paper focuses on the diagnosis of MODY using HbA1c and GCK variants and does not mention repaglinide or its pharmacokinetic/pharmacodynamic parameters. |
| PGx | Zhang_2006 | not_relevant | 1 | 0 | The paper reports pharmacogenomic effects for nateglinide, not the target drug repaglinide. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 16:12 UTC</sub>
