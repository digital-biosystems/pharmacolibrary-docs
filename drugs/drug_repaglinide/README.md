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
| 2026-10-05 03:06 | 4:34 | 0/2/1 | 1/0/0 | 0/0/0 | 71,250/10,162 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 3/3 | 6/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.44). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Doki_2018_reference](drugs/drug_repaglinide/Repaglinide_Doki2018_reference.md) | — | parent + metabolite (no model) | 6 (+7 cov.) | Doki K et al., Implications of intercorrelation betwee…, British journal of clinical… (2018) | [10.1111/bcp.13533](https://doi.org/10.1111/bcp.13533) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (primary re-run, agreement 0.4). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Gertz_2014_reference](drugs/drug_repaglinide/Repaglinide_Gertz2014_reference.md) | — | 1-compartment (no model) | 0 | Gertz M et al., Reduced physiologically-based pharmacok…, Pharmaceutical research (2014) | [10.1007/s11095-014-1333-3](https://doi.org/10.1007/s11095-014-1333-3) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Ruzilawati_2010_reference](drugs/drug_repaglinide/Repaglinide_Ruzilawati2010_reference.md) | — | 1-compartment (no model) | 2 | Ruzilawati AB et al., Population pharmacokinetic modelling of…, Journal of clinical pharmac… (2010) | [10.1111/j.1365-2710.2009.01042.x](https://doi.org/10.1111/j.1365-2710.2009.01042.x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Mele_2014_fibers_viability](drugs/drug_repaglinide/pd_Mele_2014_fibers_viability.md) | fibers viability ← repaglinide · direct sigmoid Emax (Hill) effect | — | Mele A et al., Database search of spontaneous reports…, Pharmacology research & per… (2014) | [10.1002/prp2.28](https://doi.org/10.1002/prp2.28) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Mele_2014_protein_content_muscle_weight](drugs/drug_repaglinide/pd_Mele_2014_protein_content_muscle_weight.md) | protein content/muscle weight ← repaglinide · direct sigmoid Emax (Hill) effect | — | Mele A et al., Database search of spontaneous reports…, Pharmacology research & per… (2014) | [10.1002/prp2.28](https://doi.org/10.1002/prp2.28) |

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
- **records:** 3  ·  extracted 0  ·  needs_review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_22 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ruzilawati_2010.pdf` | Ruzilawati AB et al., Population pharmacokinetic modelling of…, Journal of clinical pharmac… (2010) | popPK | 10 | [10.1111/j.1365-2710.2009.01042.x](https://doi.org/10.1111/j.1365-2710.2009.01042.x) | [20175819](https://pubmed.ncbi.nlm.nih.gov/20175819) | The study reports quantitative population PK parameters (kel, Vd) for repaglinide in humans, with values explicitly stated in the abstract. |
| `Gertz_2014.pdf` | Gertz M et al., Reduced physiologically-based pharmacok…, Pharmaceutical research (2014) | popPK | 9 | [10.1007/s11095-014-1333-3](https://doi.org/10.1007/s11095-014-1333-3) | [24623479](https://pubmed.ncbi.nlm.nih.gov/24623479) | The paper reports a PBPK model for repaglinide with specific numeric values for hepatic uptake clearance (CLuptake) derived from population analysis, though standard systemic PK parameters like total CL or V are not explicitly listed in the provided text. |
| `Liu_2000.pdf` | Liu XD et al., A double-site absorption model fits to…, European journal of drug me… (2000) | popPK | 9 | [10.1007/BF03190077](https://doi.org/10.1007/BF03190077) | [11112092](https://pubmed.ncbi.nlm.nih.gov/11112092) | The study reports quantitative pharmacokinetic parameters (Tmax, Cmax, and time constants) for repaglinide in humans using a compartmental model, with values explicitly listed in the evidence. |
| `Cao_2012.pdf` | Cao Y et al., Applications of minimal physiologically…, Journal of pharmacokinetics… (2012) | popPK | 8 | [10.1007/s10928-012-9280-2](https://doi.org/10.1007/s10928-012-9280-2) | [23179857](https://pubmed.ncbi.nlm.nih.gov/23179857) | The paper describes a minimal-PBPK model for repaglinide in humans and mentions providing separate estimates of clearance and bioavailability, but no specific numeric parameter values are present in the provided evidence. |
| `Haidar_2002.pdf` | Haidar SH et al., Modeling the pharmacokinetics and pharm…, Pharmaceutical research (2002) | popPK | 8 | [10.1023/a:1013611617787](https://doi.org/10.1023/a:1013611617787) | [11837705](https://pubmed.ncbi.nlm.nih.gov/11837705) | The paper describes a population PK/PD model for repaglinide in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract/evidence, only covariate influences and error metrics. |
| `Li_2012.pdf` | Li C et al., Effects of efonidipine on the pharmacok…, Journal of pharmacokinetics… (2012) | pd | 5 | [10.1007/s10928-011-9234-0](https://doi.org/10.1007/s10928-011-9234-0) | [22210483](https://www.ncbi.nlm.nih.gov/pubmed/22210483) | metadata signals extractable PD data (indirectresponse) |
| `Lim_2004.pdf` | Lim JG et al., Taurine block of cloned ATP-sensitive K…, Biochemical pharmacology (2004) | pd | 4 | [10.1016/j.bcp.2004.05.050](https://doi.org/10.1016/j.bcp.2004.05.050) | [15294453](https://www.ncbi.nlm.nih.gov/pubmed/15294453) | metadata signals extractable PD data (IC50) |
| `Kalliokoski_2010.pdf` | Kalliokoski A et al., SLCO1B1 polymorphism and oral antidiabe…, Basic & clinical pharmacolo… (2010) | pgx | 8 | [10.1111/j.1742-7843.2010.00581.x](https://doi.org/10.1111/j.1742-7843.2010.00581.x) | [20406215](https://www.ncbi.nlm.nih.gov/pubmed/20406215) | metadata signals extractable PGX data (SLCO1B1, PK/PD-context) |
| `Pei_2018.pdf` | Pei Q et al., Repaglinide-irbesartan drug interaction…, European journal of clinica… (2018) | pgx | 8 | [10.1007/s00228-018-2477-6](https://doi.org/10.1007/s00228-018-2477-6) | [29748863](https://www.ncbi.nlm.nih.gov/pubmed/29748863) | metadata signals extractable PGX data (SLCO1B1, PK/PD-context) |
| `Tomalik-Scharte_2011.pdf` | Tomalik-Scharte D et al., Effect of the CYP2C8 genotype on the ph…, Drug metabolism and disposi… (2011) | pgx | 8 | [10.1124/dmd.110.036921](https://doi.org/10.1124/dmd.110.036921) | [21270106](https://www.ncbi.nlm.nih.gov/pubmed/21270106) | metadata signals extractable PGX data (CYP2C8, PK/PD-context) |
| `Wang_2015.pdf` | Wang ZY et al., Pharmacokinetic drug interactions with…, Therapeutics and clinical r… (2015) | pgx | 8 | [10.2147/TCRM.S80437](https://doi.org/10.2147/TCRM.S80437) | [25848291](https://www.ncbi.nlm.nih.gov/pubmed/25848291) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Cheng_2025.pdf` | Cheng Y et al., Evaluating the drug-drug interactions o…, Expert opinion on drug meta… (2025) | pgx | 7 | [10.1080/17425255.2024.2428367](https://doi.org/10.1080/17425255.2024.2428367) | [39530130](https://www.ncbi.nlm.nih.gov/pubmed/39530130) | metadata signals extractable PGX data (CYP2C8, PK/PD-context) |
| `Dai_2021.pdf` | Dai X et al., Napabucasin Drug-Drug Interaction Poten…, Clinical pharmacology in dr… (2021) | pgx | 7 | [10.1002/cpdd.961](https://doi.org/10.1002/cpdd.961) | [34107166](https://www.ncbi.nlm.nih.gov/pubmed/34107166) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Fu_2023.pdf` | Fu M et al., Effect of SHR0302 on the pharmacokineti…, British journal of clinical… (2023) | pgx | 7 | [10.1111/bcp.15856](https://doi.org/10.1111/bcp.15856) | [37464978](https://www.ncbi.nlm.nih.gov/pubmed/37464978) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Hartauer_2024.pdf` | Hartauer M et al., Hepatic OATP1B zonal distribution: Impl…, CPT: pharmacometrics & syst… (2024) | pgx | 7 | [10.1002/psp4.13188](https://doi.org/10.1002/psp4.13188) | [38898552](https://www.ncbi.nlm.nih.gov/pubmed/38898552) | metadata signals extractable PGX data (CYP2C8, PK/PD-context) |
| `Ishii_2018.pdf` | Ishii Y et al., Clinical Drug-Drug Interaction Potentia…, Clinical and translational… (2018) | pgx | 7 | [10.1111/cts.12557](https://doi.org/10.1111/cts.12557) | [29768713](https://www.ncbi.nlm.nih.gov/pubmed/29768713) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |
| `Jaiswal_2025.pdf` | Jaiswal S et al., Assessing Cytochrome P450 Drug Interact…, CPT: pharmacometrics & syst… (2025) | pgx | 7 | [10.1002/psp4.70093](https://doi.org/10.1002/psp4.70093) | [40758244](https://www.ncbi.nlm.nih.gov/pubmed/40758244) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Mamidi_2017.pdf` | Mamidi RNVS et al., In vitro and physiologically-based phar…, British journal of clinical… (2017) | pgx | 7 | [10.1111/bcp.13186](https://doi.org/10.1111/bcp.13186) | [27862160](https://www.ncbi.nlm.nih.gov/pubmed/27862160) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Melillo_2019.pdf` | Melillo N et al., Accounting for inter-correlation betwee…, Journal of pharmacokinetics… (2019) | pgx | 7 | [10.1007/s10928-019-09627-6](https://doi.org/10.1007/s10928-019-09627-6) | [30905037](https://www.ncbi.nlm.nih.gov/pubmed/30905037) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Varma_2013.pdf` | Varma MV et al., Mechanistic modeling to predict the tra…, Pharmaceutical research (2013) | pgx | 7 | [10.1007/s11095-012-0956-5](https://doi.org/10.1007/s11095-012-0956-5) | [23307347](https://www.ncbi.nlm.nih.gov/pubmed/23307347) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Xiao_2015.pdf` | Xiao Q et al., Physiologically based pharmacokinetics…, Biopharmaceutics & drug dis… (2015) | pgx | 7 | [10.1002/bdd.1987](https://doi.org/10.1002/bdd.1987) | [26296069](https://www.ncbi.nlm.nih.gov/pubmed/26296069) | metadata signals extractable PGX data (CYP2C8, PK/PD-context) |
| `Gan_2010.pdf` | Gan J et al., Repaglinide-gemfibrozil drug interactio…, British journal of clinical… (2010) | pgx | 5 | [10.1111/j.1365-2125.2010.03772.x](https://doi.org/10.1111/j.1365-2125.2010.03772.x) | [21175442](https://www.ncbi.nlm.nih.gov/pubmed/21175442) | metadata signals extractable PGX data (UGT1A1) |

<sub>queue written 2026-10-05T03:02:53.282994+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Aurinsalo_2026 | not_relevant | 0 | 0 | The study investigates food-drug interactions (grapefruit juice/lingonberry) rather than pharmacogenomic effects of gene variants on repaglinide PK. |
| popPK | Cao_2012 | relevant | 8 | 0 | The paper describes a minimal-PBPK model for repaglinide in humans and mentions providing separate estimates of clearance and bioavailability, but no specific numeric parameter values are present in the provided evidence. |
| PGx | Chen_2015 | not_relevant | 5 | 2 | The text is a review abstract that discusses general pharmacogenomic associations for glinides but does not report specific quantitative PK/PD parameter changes for repaglinide. |
| PGx | Cheng_2025 | not_relevant | 0 | 0 | The study evaluates drug-drug interactions (SHR4640 on repaglinide) and does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| PGx | Dai_2021 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (napabucasin affecting repaglinide PK) in healthy volunteers, not a pharmacogenomic effect (gene variant/genotype) on repaglinide. |
| PGx | Doki_2018 | not_relevant | 0 | 0 | The study investigates the impact of inter-correlation between CYP3A4 and CYP2C8 enzyme abundances on PK variability using PBPK modeling, rather than the effect of specific gene variants or genotypes on pharmacokinetic parameters. |
| PGx | Fu_2023 | not_relevant | 0 | 0 | The study evaluates drug-drug interactions (DDI) with SHR0302, not the effect of genetic variants on repaglinide pharmacokinetics. |
| popPK | Fuhlendorff_1998 | irrelevant | 0 | 0 | The study focuses on the mechanism of insulin secretion and binding affinity (KD, EC50, ED50) rather than pharmacokinetic disposition parameters like clearance or volume. |
| PGx | Gan_2010 | not_relevant | 2 | 5 | The study investigates a drug-drug interaction (gemfibrozil inhibiting UGT1A1-mediated glucuronidation) and mentions genotyping for UGT1A1*28, but it does not report a pharmacogenomic effect (genotype-driven change) on a PK/PD parameter; rather, it focuses on the mechanism of enzyme inhibition by a co-administered drug. |
| popPK | Haidar_2002 | relevant | 8 | 2 | The paper describes a population PK/PD model for repaglinide in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract/evidence, only covariate influences and error metrics. |
| PGx | Hartauer_2024 | not_relevant | 0 | 0 | The paper focuses on a PBPK modeling study of rifampicin-mediated drug-drug interactions and zonal OATP1B distribution, not on the effect of a specific gene variant or genotype on repaglinide pharmacokinetics. |
| PGx | Hoosain_2016 | not_relevant | 2 | 0 | The paper reports allele frequencies in specific populations and mentions a known association with repaglinide plasma concentrations, but it does not present new data or fitted effect sizes for repaglinide PK/PD parameters. |
| popPK | Hu_2001 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of insulinotropic effects on rat islets and does not report pharmacokinetic parameters for repaglinide. |
| PGx | Ishii_2018 | not_relevant | 0 | 0 | The paper reports drug-drug interactions of BFE1224, not pharmacogenomic effects of gene variants on repaglinide PK/PD. |
| PGx | Jaiswal_2025 | not_relevant | 0 | 0 | The paper focuses on drug-drug interactions (DDI) involving dordaviprone and CYP enzymes, not pharmacogenomic effects of genetic variants on repaglinide PK/PD. |
| PGx | Kahma_2024 | not_relevant | 0 | 0 | The paper investigates the time-dependent inhibition of CYP enzymes by drug glucuronides in vitro and does not report any pharmacogenomic effects on the PK/PD of repaglinide. |
| PGx | Kajosaari_2005 | not_relevant | 0 | 0 | The study investigates in vitro drug-drug interactions (inhibition by fibrates/rifampicin) and enzyme contributions, but does not report pharmacogenomic effects of genetic variants on repaglinide PK/PD. |
| PGx | Lenuzza_2016 | not_relevant | 0 | 0 | The paper reports pharmacokinetics of a CIME cocktail in healthy volunteers without stratifying by genotype or reporting pharmacogenomic effects. |
| popPK | Li_2012 | irrelevant | 0 | 0 | no_text gate: only 152 chars of text extracted (&lt; 400) |
| popPK | Lim_2004 | irrelevant | 0 | 0 | no_text gate: only 131 chars of text extracted (&lt; 400) |
| PD | Lim_2004 | not_relevant | 0 | 0 | The paper investigates the electrophysiological effects of taurine on cloned ATP-sensitive K+ channels in Xenopus oocytes and does not involve repaglinide or any pharmacokinetic/pharmacodynamic modeling. |
| PGx | Mamidi_2017 | not_relevant | 0 | 0 | The paper assesses drug-drug interaction potential of canagliflozin using PBPK models and does not report pharmacogenomic effects on repaglinide PK/PD. |
| popPK | Mayer_2011 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of adipocyte differentiation and does not report any pharmacokinetic parameters for repaglinide. |
| PD | Mayer_2011 | not_relevant | 0 | 0 | The paper investigates glimepiride and glibenclamide, and explicitly states that repaglinide had no effect on adipogenesis, providing no PD parameters for repaglinide. |
| popPK | Mele_2014 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of muscle atrophy and does not report pharmacokinetic parameters for repaglinide. |
| popPK | Melillo_2019 | irrelevant | 0 | 0 | no_text gate: only 177 chars of text extracted (&lt; 400) |
| PGx | Melillo_2019 | not_relevant | 0 | 0 | The paper is a simulation study on global sensitivity analysis in PBPK modeling and does not report pharmacogenomic effects on repaglinide. |
| popPK | Ménochet_2012 | irrelevant | 2 | 0 | The study is an in-vitro mechanistic model of hepatocyte uptake and metabolism, not a population pharmacokinetic study reporting systemic disposition parameters (CL, V, t1/2) for repaglinide. |
| popPK | Ménochet_2012_2 | irrelevant | 2 | 0 | The study is an in-vitro mechanistic modeling of hepatocyte uptake transporters, not a pharmacokinetic study reporting systemic disposition parameters (CL, V, t1/2) for repaglinide. |
| PGx | Ogilvie_2006 | not_relevant | 0 | 0 | The paper investigates the mechanism of gemfibrozil's inhibition of CYP2C8 and its implications for drug-drug interactions with repaglinide, but it does not report any pharmacogenomic effects (gene variants) on repaglinide's PK or PD parameters. |
| PGx | Pakkir_2018 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions involving CYP enzymes and OATP1B1, not pharmacogenomic effects of genetic variants on repaglinide PK/PD. |
| PGx | Sang_2025 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions of isavuconazole and does not report pharmacogenomic effects on repaglinide PK/PD. |
| PGx | Stenglein_2026 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (zapnometinib affecting repaglinide PK) but does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| PGx | Topletz-Erickson_2022 | not_relevant | 0 | 0 | The study evaluates drug-drug interactions (DDIs) with tucatinib, not pharmacogenomic effects of gene variants on repaglinide PK/PD. |
| PGx | Türk_2020 | not_relevant | 0 | 0 | The paper focuses on a PBPK model for trimethoprim and its interactions; repaglinide is only mentioned as a co-administered drug in DDI predictions, not as the subject of a pharmacogenomic study. |
| PGx | Varma_2013 | not_relevant | 0 | 0 | The paper focuses on mechanistic modeling of drug-drug interactions (DDIs) involving inhibitors, not on pharmacogenomic effects of genetic variants on repaglinide PK/PD. |
| PGx | Wang_2015 | not_relevant | 0 | 0 | The paper is a review of drug-drug interactions involving clopidogrel and does not report pharmacogenomic effects on repaglinide PK/PD parameters. |
| popPK | Wängler_2004 | irrelevant | 0 | 0 | The study is an in vitro synthesis and binding affinity evaluation of a radiolabeled analog, not a pharmacokinetic study of repaglinide. |
| popPK | Wängler_2004_2 | irrelevant | 1 | 0 | The study focuses on the synthesis and PET imaging properties of a radiolabeled derivative of repaglinide, reporting biodistribution percentages and binding affinity (Kd) rather than standard pharmacokinetic disposition parameters (CL, V, ka) for the parent drug. |
| PGx | Xiao_2015 | not_relevant | 0 | 0 | The study investigates drug-drug interaction (repaglinide inhibiting pioglitazone) and does not report any pharmacogenomic effects (gene variants) on PK/PD parameters. |
| PGx | Yılmaz_2022 | not_relevant | 0 | 0 | The paper discusses the diagnosis of MODY using HbA1c and GCK variants, but does not mention repaglinide or any pharmacokinetic/pharmacodynamic parameters of the drug. |
| PGx | Zhang_2006 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects on nateglinide, not repaglinide. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-05 03:03 UTC</sub>
