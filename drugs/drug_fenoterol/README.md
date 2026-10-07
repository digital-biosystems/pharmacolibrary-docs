<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G02C&quot;,&quot;href&quot;:&quot;atc/G02C.md&quot;},{&quot;label&quot;:&quot;fenoterol&quot;}]"></div>

# fenoterol

- **generic name:** fenoterol
- **ATC codes:** `G02CA03`, `R03AC04`, `R03AL01`, `R03CC04`
- **DrugBank:** [DB01288](https://go.drugbank.com/drugs/DB01288) · **PubChem:** [CID 3343](https://pubchem.ncbi.nlm.nih.gov/compound/3343)
- **molar mass:** 303.3529 g/mol (C17H21NO4) — DrugBank
- **groups:** approved, withdrawn

## About

Fenoterol is a beta-2 adrenergic agonist used as a bronchodilator for obstructive airway diseases and as a labour-repressing (tocolytic) agent. It has been approved but is no longer available in some markets, having been withdrawn there.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q420188](https://www.wikidata.org/wiki/Q420188) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:25 | 8:18 | 0/1/0 | 1/1/1 | 0/0/0 | 266,955/9,340 | einfracz / qwen3.8-27b | 8 | 0/7 | 8/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Warnke_1992_reference](drugs/drug_fenoterol/Fenoterol_Warnke1992_reference.md) | — | 1-compartment (no model) | 0 | Warnke K et al., The pharmacokinetics of the beta 2-adre…, European journal of clinica… (1992) | [10.1007/BF02284970](https://doi.org/10.1007/BF02284970) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Blackhall_1983_FEV](drugs/drug_fenoterol/pd_Blackhall_1983_FEV.md) | forced expiratory volume ← fenoterol · direct log-linear effect | — | Blackhall MI et al., A dose-response study on fenoterol (Ber…, Developmental pharmacology… (1983) | [10.1159/000457340](https://doi.org/10.1159/000457340) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Suissa_1994_asthma_death](drugs/drug_fenoterol/pd_Suissa_1994_asthma_death.md) | asthma death ← fenoterol · time-to-event model | — | Suissa S et al., A cohort analysis of excess mortality i…, American journal of respira… (1994) | [10.1164/ajrccm.149.3.8118625](https://doi.org/10.1164/ajrccm.149.3.8118625) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Herington_2015_Ca2_mobilization](drugs/drug_fenoterol/pd_Herington_2015_Ca2_mobilization.md) | Intracellular Ca2+ mobilization (OT-induced) ← fenoterol hydrobromide · direct sigmoid Emax (Hill) effect | — | Herington JL et al., High-Throughput Screening of Myometrial…, PloS one (2015) | [10.1371/journal.pone.0143243](https://doi.org/10.1371/journal.pone.0143243) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Herington_2015_Contractility_AUC](drugs/drug_fenoterol/pd_Herington_2015_Contractility_AUC.md) | Uterine myometrial contractility (AUC) ← fenoterol hydrobromide · direct sigmoid Emax (Hill) effect | — | Herington JL et al., High-Throughput Screening of Myometrial…, PloS one (2015) | [10.1371/journal.pone.0143243](https://doi.org/10.1371/journal.pone.0143243) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Herington_2015_Contractility_Amplitude](drugs/drug_fenoterol/pd_Herington_2015_Contractility_Amplitude.md) | Uterine myometrial contractility (Amplitude) ← fenoterol hydrobromide · direct sigmoid Emax (Hill) effect | — | Herington JL et al., High-Throughput Screening of Myometrial…, PloS one (2015) | [10.1371/journal.pone.0143243](https://doi.org/10.1371/journal.pone.0143243) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Herington_2015_Contractility_Frequency](drugs/drug_fenoterol/pd_Herington_2015_Contractility_Frequency.md) | Uterine myometrial contractility (Frequency) ← fenoterol hydrobromide · direct sigmoid Emax (Hill) effect | — | Herington JL et al., High-Throughput Screening of Myometrial…, PloS one (2015) | [10.1371/journal.pone.0143243](https://doi.org/10.1371/journal.pone.0143243) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=fenoterol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ADRB1 (target), ADRB2 (target), ADRB3 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 221 matched, 84 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_19 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hochhaus_1992_2.pdf` | Hochhaus G et al., Pharmacokinetic/dynamic correlation of…, Pharmaceutical research (1992) | popPK | 10 | [10.1023/a:1015839430269](https://doi.org/10.1023/a:1015839430269) | [1614958](https://pubmed.ncbi.nlm.nih.gov/1614958) | The study reports quantitative PK parameters (half-life, Vss, CL, bioavailability) for fenoterol in humans within the text. |
| `Warnke_1992.pdf` | Warnke K et al., The pharmacokinetics of the beta 2-adre…, European journal of clinica… (1992) | popPK | 10 | [10.1007/BF02284970](https://doi.org/10.1007/BF02284970) | [1493852](https://pubmed.ncbi.nlm.nih.gov/1493852) | The study reports quantitative disposition parameters (clearance, volume of distribution, and half-lives) for fenoterol in healthy women, with all numeric values present in the text. |
| `Bouillon_1996.pdf` | Bouillon T et al., Concentration-effect relationship of th…, European journal of clinica… (1996) | popPK | 9 | [10.1007/s002280050177](https://doi.org/10.1007/s002280050177) | [8911881](https://pubmed.ncbi.nlm.nih.gov/8911881) | The study reports a linear two-compartment PK model for fenoterol, but the abstract provides specific numeric values only for pharmacodynamic parameters (heart rate, potassium), while the specific PK parameter estimates (CL, V, etc.) are described as "estimated" without explicit numerical listing in the provided text. |
| `Schmidt_1998.pdf` | Schmidt EW, Pharmacokinetics of beta2-sympathomimet…, Wiadomosci lekarskie (Warsa… (1998) | popPK | 5 | not captured | [9608824](https://pubmed.ncbi.nlm.nih.gov/9608824) | The paper describes a three-compartmental model and qualitative PK concepts for fenoterol, but the provided evidence contains no specific numeric parameter values (CL, V, t1/2, ka). |
| `Boulton_1996.pdf` | Boulton DW et al., Enantioselective disposition of albuter…, Clinical reviews in allergy… (1996) | pd | 5 | [10.1007/BF02772207](https://doi.org/10.1007/BF02772207) | [8866176](https://www.ncbi.nlm.nih.gov/pubmed/8866176) | metadata signals extractable PD data (concentration-effect) |
| `Advenier_1985.pdf` | Advenier C et al., The guinea-pig isolated bronchus for th…, British journal of pharmaco… (1985) | pd | 4 | [10.1111/j.1476-5381.1985.tb08905.x](https://doi.org/10.1111/j.1476-5381.1985.tb08905.x) | [4052734](https://www.ncbi.nlm.nih.gov/pubmed/4052734) | metadata signals extractable PD data (EC50) |
| `Bremner_1996.pdf` | Bremner P et al., Partial vs full beta-receptor agonism.…, Chest (1996) | pd | 4 | [10.1378/chest.109.4.957](https://doi.org/10.1378/chest.109.4.957) | [8635377](https://www.ncbi.nlm.nih.gov/pubmed/8635377) | metadata signals extractable PD data (Emax) |
| `Burgaud_1992.pdf` | Burgaud JL et al., Bronchodilator action of an agonist for…, Lung (1992) | pd | 4 | [10.1007/BF00175981](https://doi.org/10.1007/BF00175981) | [1323735](https://www.ncbi.nlm.nih.gov/pubmed/1323735) | metadata signals extractable PD data (Emax) |
| `Henry_1990.pdf` | Henry PJ et al., Beta 1-adrenoceptors mediate smooth mus…, British journal of pharmaco… (1990) | pd | 4 | [10.1111/j.1476-5381.1990.tb14666.x](https://doi.org/10.1111/j.1476-5381.1990.tb14666.x) | [2158831](https://www.ncbi.nlm.nih.gov/pubmed/2158831) | metadata signals extractable PD data (EC50) |
| `Klukovits_2004.pdf` | Klukovits A et al., Beta 2-agonist treatment enhances uteri…, Molecular reproduction and… (2004) | pd | 4 | [10.1002/mrd.20158](https://doi.org/10.1002/mrd.20158) | [15278905](https://www.ncbi.nlm.nih.gov/pubmed/15278905) | metadata signals extractable PD data (EC50) |
| `Krief_1994.pdf` | Krief S et al., Transcriptional modulation by n-butyric…, The Journal of biological c… (1994) | pd | 4 | not captured | [8120022](https://www.ncbi.nlm.nih.gov/pubmed/8120022) | metadata signals extractable PD data (EC50) |
| `Naline_1994.pdf` | Naline E et al., Relaxant effects and durations of actio…, The European respiratory jo… (1994) | pd | 4 | not captured | [7914176](https://www.ncbi.nlm.nih.gov/pubmed/7914176) | metadata signals extractable PD data (EC50) |
| `Nials_1993.pdf` | Nials AT et al., Effects of beta-adrenoceptor agonists i…, British journal of pharmaco… (1993) | pd | 4 | [10.1111/j.1476-5381.1993.tb13929.x](https://doi.org/10.1111/j.1476-5381.1993.tb13929.x) | [7905340](https://www.ncbi.nlm.nih.gov/pubmed/7905340) | metadata signals extractable PD data (EC50) |
| `Rhoden_1994.pdf` | Rhoden KJ et al., Stimulation of GTP hydrolysis in guinea…, Lung (1994) | pd | 4 | [10.1007/BF00172849](https://doi.org/10.1007/BF00172849) | [7815828](https://www.ncbi.nlm.nih.gov/pubmed/7815828) | metadata signals extractable PD data (EC50) |
| `Seldon_1998.pdf` | Seldon PM et al., Albuterol does not antagonize the inhib…, American journal of respira… (1998) | pd | 4 | [10.1164/ajrccm.157.3.9707116](https://doi.org/10.1164/ajrccm.157.3.9707116) | [9517594](https://www.ncbi.nlm.nih.gov/pubmed/9517594) | metadata signals extractable PD data (EC50) |
| `Tran_2004.pdf` | Tran TM et al., Characterization of agonist stimulation…, Molecular pharmacology (2004) | pd | 4 | [10.1124/mol.65.1.196](https://doi.org/10.1124/mol.65.1.196) | [14722251](https://www.ncbi.nlm.nih.gov/pubmed/14722251) | metadata signals extractable PD data (EC50) |
| `Wilson_1984.pdf` | Wilson C et al., The rat lipolytic beta-adrenoceptor: st…, European journal of pharmac… (1984) | pd | 4 | [10.1016/0014-2999(84)90007-4](https://doi.org/10.1016/0014-2999(84)90007-4) | [6145597](https://www.ncbi.nlm.nih.gov/pubmed/6145597) | metadata signals extractable PD data (EC50) |
| `Gilibili_2026.pdf` | Gilibili RR et al., Investigating organic cation transporte…, Drug metabolism and disposi… (2026) | pgx | 8 | [10.1016/j.dmd.2025.100220](https://doi.org/10.1016/j.dmd.2025.100220) | [41529637](https://www.ncbi.nlm.nih.gov/pubmed/41529637) | metadata signals extractable PGX data (SLC22A1, PK/PD-context) |
| `Morse_2020.pdf` | Morse BL et al., Pharmacokinetics of Organic Cation Tran…, Drug metabolism and disposi… (2020) | pgx | 8 | [10.1124/dmd.119.088781](https://doi.org/10.1124/dmd.119.088781) | [31771949](https://www.ncbi.nlm.nih.gov/pubmed/31771949) | metadata signals extractable PGX data (SLC22A1, PK/PD-context) |

<sub>queue written 2026-10-07T08:23:44.922063+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Advenier_1985 | irrelevant | 0 | 0 | no_text gate: only 90 chars of text extracted (&lt; 400) |
| PGx | Bokelmann_2018 | not_relevant | 0 | 0 | The study explicitly states that the analyzed SNP was not associated with the pharmacokinetics of fenoterol. |
| popPK | Bond_2014 | irrelevant | 0 | 0 | The paper is an in-vitro electrophysiology study investigating the mechanism of noradrenaline action on K+ channels in rat atrial myocytes, with fenoterol used only as a pharmacological tool to probe receptor subtypes, not for PK parameter determination. |
| popPK | Boterman_2006 | irrelevant | 0 | 0 | The study is a mechanistic pharmacology experiment in bovine tissue investigating receptor desensitization, reporting no pharmacokinetic parameters. |
| popPK | Bremner_1996 | irrelevant | 0 | 0 | The study reports pharmacodynamic parameters (EMax, ED50) for cardiac and metabolic effects, not pharmacokinetic disposition parameters (CL, V, ka) for fenoterol. |
| popPK | Burgaud_1992 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic assessment of bronchodilator action in guinea pigs and does not report any pharmacokinetic parameters for fenoterol. |
| popPK | Chulak_1995 | irrelevant | 0 | 0 | The study investigates the mechanism of bradykinin on noradrenaline release in rat atria, with fenoterol used only as a pharmacological tool agent, not a subject of PK analysis. |
| popPK | Delhaye_1983 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological assessment of receptor potency (Kact/Ki) and intrinsic activity, not a pharmacokinetic study of fenoterol's disposition. |
| popPK | Figueroa_2009 | irrelevant | 0 | 0 | The study investigates mechanistic pharmacology (NO/cGMP pathway activation) and hemodynamic responses in rats, containing no pharmacokinetic parameters (CL, V, t1/2) for fenoterol. |
| PGx | Gilibili_2026 | not_relevant | 0 | 0 | The study investigates drug-drug interactions mediated by OCT1 transporters, not pharmacogenomic effects (gene variants) on fenoterol PK/PD. |
| popPK | Goldie_1984 | irrelevant | 0 | 0 | The study is an in vitro pharmacological assay measuring bronchial relaxation, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Goldie_1986 | irrelevant | 0 | 0 | The paper describes in-vitro receptor desensitization in pig bronchus and does not report pharmacokinetic disposition parameters for fenoterol. |
| PGx | Haberkorn_2021 | not_relevant | 0 | 0 | The paper is a review on in vitro cell models for studying OCT1 transport and does not report pharmacogenomic effects on PK/PD parameters of fenoterol. |
| popPK | Henry_1990 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of beta-adrenoceptor agonist potency in mouse isolated trachea and does not report pharmacokinetic disposition parameters for fenoterol. |
| popPK | Herington_2015 | irrelevant | 0 | 0 | This is a high-throughput pharmacodynamic screening study in mice where fenoterol is tested only for its effect on uterine contractility (mechanistic), with no pharmacokinetic parameters measured. |
| popPK | Hochhaus_1992 | irrelevant | 2 | 0 | The paper is a review without original quantitative disposition parameter values for fenoterol. |
| popPK | Huang_1998 | irrelevant | 0 | 0 | The paper is a pharmacodynamic study in vitro examining vascular relaxation mechanisms, not a pharmacokinetic study. |
| PGx | Jensen_2021 | not_relevant | 2 | 3 | The paper focuses on isobutyrylcarnitine as a biomarker for OCT1 activity; while it mentions a correlation with fenoterol PK from a previous study (citing Tzvetkov et al., 2018), it does not report new phenotypic data or fitted effect sizes for fenoterol PK/PD parameters in this text. |
| popPK | Klukovits_2004 | irrelevant | 0 | 0 | This is a mechanistic study on receptor expression and uterine contractility, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Krief_1994 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro investigation of adrenergic receptor expression, using fenoterol only as a pharmacological probe to determine receptor subtype affinity (EC50), not as a subject for pharmacokinetic analysis. |
| popPK | Leemans_2012 | irrelevant | 0 | 0 | The study is an in vitro pharmacodynamic investigation of bronchodilator potency and efficacy, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Melsom_2014 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of Gi protein regulation on adenylyl cyclase activity using fenoterol as a tool compound, reporting no pharmacokinetic parameters (CL, V, ka, etc.). |
| PGx | Morse_2020 | not_relevant | 0 | 0 | The paper discusses phenformin, a P-gp substrate, and does not mention fenoterol. |
| popPK | Naline_1994 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study on isolated human bronchi measuring potency and efficacy, not a pharmacokinetic study of fenoterol. |
| popPK | Nials_1993 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of bronchial smooth muscle relaxation, reporting potency (EC50) and duration of action (Rt50), not pharmacokinetic disposition parameters like clearance or volume. |
| popPK | Ozakca_2007 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic pharmacology investigation of receptor subtypes in isolated gastric tissue, not a pharmacokinetic study, and contains no disposition parameters. |
| PGx | Panfen_2019 | not_relevant | 0 | 0 | The study focuses on drug-drug interaction mechanisms (Cyclosporine A inhibiting OCT1 transport) and does not report on pharmacogenomic variants affecting the PK or PD of fenoterol. |
| popPK | Plazinska_2014 | irrelevant | 0 | 0 | This is an in-vitro receptor binding and functional activity study (CoMFA analysis) reporting Ki and EC50 values, not a pharmacokinetic study with disposition parameters. |
| popPK | Rhoden_1994 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of GTP hydrolysis where fenoterol serves only as a control agent to test receptor activation, with no pharmacokinetic parameters reported. |
| PGx | Römer_2021 | not_relevant | 2 | 1 | The paper concludes that the specific variant (rs35854239) is NOT associated with significant changes in the pharmacokinetics of fenoterol, reporting a null result rather than a pharmacogenomic effect. |
| popPK | Schmidt_1998 | irrelevant | 5 | 0 | The paper describes a three-compartmental model and qualitative PK concepts for fenoterol, but the provided evidence contains no specific numeric parameter values (CL, V, t1/2, ka). |
| popPK | Scola_2004 | irrelevant | 0 | 0 | The study is a mechanistic pharmacology investigation of beta2-adrenoceptor desensitisation in human lung mast cells, containing no pharmacokinetic parameters. |
| popPK | Seldon_1998 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cytokine release and does not report any pharmacokinetic parameters for fenoterol. |
| popPK | Tran_2004 | irrelevant | 0 | 0 | The paper is an in vitro mechanistic study of beta2-adrenergic receptor phosphorylation kinetics and does not report pharmacokinetic parameters for fenoterol. |
| popPK | Williams_2000 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic analysis of beta(2)-adrenergic receptor internalization and down-regulation kinetics, not a pharmacokinetic study of fenoterol disposition parameters. |
| popPK | Wilson_1984 | irrelevant | 0 | 0 | This is a pharmacodynamic study measuring receptor binding and functional responses (EC50, pA2), not a pharmacokinetic study reporting disposition parameters. |
| popPK | de_2000 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor activity in bovine tissue and does not report pharmacokinetic parameters for fenoterol. |
| popPK | de_2001 | irrelevant | 0 | 0 | This is an in vitro mechanistic study on bovine airway smooth muscle contraction, not a pharmacokinetic study. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 08:23 UTC</sub>
