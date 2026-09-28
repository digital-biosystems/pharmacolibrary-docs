<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02K&quot;,&quot;href&quot;:&quot;atc/C02K.md&quot;},{&quot;label&quot;:&quot;bosentan&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Bosentan_FergusonSells2022_reference&quot;,&quot;label&quot;:&quot;Ferguson-Sells_2022_reference&quot;,&quot;href&quot;:&quot;drugs/drug_bosentan/Bosentan_FergusonSells2022_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Bosentan_Taguchi2011_reference&quot;,&quot;label&quot;:&quot;Taguchi_2011_reference&quot;,&quot;href&quot;:&quot;drugs/drug_bosentan/Bosentan_Taguchi2011_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Bosentan_Miura2026_reference&quot;,&quot;label&quot;:&quot;Miura_2026_reference&quot;,&quot;href&quot;:&quot;drugs/drug_bosentan/Bosentan_Miura2026_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# bosentan

- **generic name:** bosentan
- **ATC codes:** `C02KX01`
- **DrugBank:** [DB00559](https://go.drugbank.com/drugs/DB00559) · **PubChem:** [CID 104865](https://pubchem.ncbi.nlm.nih.gov/compound/104865)
- **molar mass:** 551.614 g/mol (C27H29N5O6S) — DrugBank
- **groups:** approved, investigational

## About

**Description.** Bosentan is a dual endothelin receptor antagonist marketed under the trade name Tracleer by Actelion Pharmaceuticals. Bosentan is used to treat pulmonary hypertension by blocking the action of endothelin molecules that would otherwise promote narrowing of the blood vessels and lead to high blood pressure.

**Indication.** Used in the treatment of pulmonary arterial hypertension (PAH), to improve exercise ability and to decrease the rate of clinical worsening (in patients with WHO Class III or IV symptoms).

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| bosentan | parent | 551.614 | C27H29N5O6S | DrugBank | [104865](https://pubchem.ncbi.nlm.nih.gov/compound/104865) | Taguchi_2011 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-28 02:04 | 52:16 | 2/1/0 | 0/0/0 | 0/0/0 | 448,166/37,043 | ollama / qwen3.8:27b-mtp-q8_0 | 20 | 6/14 | 18/2 | 0 |

## popPK records

| status | detail | model structure | params | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.75). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: T6_deviations</sub><br><sub>route_to: `engineer`</sub> | [Ferguson-Sells_2022_reference](drugs/drug_bosentan/Bosentan_FergusonSells2022_reference.md) | 1-compartment, oral | 2 | Ferguson-Sells L et al., Population Pharmacokinetics of Tadalafi…, Clinical pharmacokinetics (2022) | [10.1007/s40262-021-01052-8](https://doi.org/10.1007/s40262-021-01052-8) |
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.25). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: model_quarantined: Cl, ka, Tlag left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Taguchi_2011_reference](drugs/drug_bosentan/Bosentan_Taguchi2011_reference.md) | 1-compartment, oral | 2 | Taguchi M et al., Pharmacokinetics of bosentan in routine…, Drug metabolism and pharmac… (2011) | [10.2133/dmpk.DMPK-10-RG-113](https://doi.org/10.2133/dmpk.DMPK-10-RG-113) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (primary re-run, agreement 0.167). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Miura_2026_reference](drugs/drug_bosentan/Bosentan_Miura2026_reference.md) | 1-compartment (no model) | 0 | Miura M et al., Development of a population pharmacokin…, British journal of clinical… (2026) | [10.1002/bcp.70676](https://doi.org/10.1002/bcp.70676) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=bosentan) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP2C9` inducer/substrate, `CYP3A4` inducer/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/substrate | DrugBank actor |
| excretion | bile duct | <sub>“…Bosentan is eliminated by biliary excretion following metabolism in the liver.…”</sub> | prose |
| excretion | liver | `ABCB11` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: EDNRA (target), EDNRB (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 258 matched, 120 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 0  ·  needs_review 2  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_31 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Miura_2026.pdf` | Miura M et al., Development of a population pharmacokin…, British journal of clinical… (2026) | popPK | 10 | [10.1002/bcp.70676](https://doi.org/10.1002/bcp.70676) | [42384004](https://pubmed.ncbi.nlm.nih.gov/42384004) | The paper reports a population PK model for bosentan with a specific numeric value for population mean CL/F (8.85 L/h) and describes the structural model, though other parameters like V/F are not explicitly listed in the text. |
| `Taguchi_2011.pdf` | Taguchi M et al., Pharmacokinetics of bosentan in routine…, Drug metabolism and pharmac… (2011) | popPK | 10 | [10.2133/dmpk.DMPK-10-RG-113](https://doi.org/10.2133/dmpk.DMPK-10-RG-113) | [21383523](https://pubmed.ncbi.nlm.nih.gov/21383523) | The paper reports quantitative population PK parameters (CL/F and elimination rate constant) for bosentan with specific numeric values and covariate relationships in the text. |
| `Volz_2019.pdf` | Volz AK et al., Target-Mediated Population Pharmacokine…, Pharmaceutical research (2019) | popPK | 10 | [10.1007/s11095-019-2723-3](https://doi.org/10.1007/s11095-019-2723-3) | [31823033](https://pubmed.ncbi.nlm.nih.gov/31823033) | The paper describes a population PK model for bosentan, but the specific numeric parameter values are not present in the provided evidence text. |
| `Zisowsky_2017.pdf` | Zisowsky J et al., Pediatric Development of Bosentan Facil…, Paediatric drugs (2017) | popPK | 9 | [10.1007/s40272-016-0206-0](https://doi.org/10.1007/s40272-016-0206-0) | [28078552](https://pubmed.ncbi.nlm.nih.gov/28078552) | The paper describes a population PK model for bosentan, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Angus_2017.pdf` | Angus JA et al., Distortion of KB estimates of endotheli…, Pharmacology research & per… (2017) | pd | 5 | [10.1002/prp2.374](https://doi.org/10.1002/prp2.374) | [29226623](https://www.ncbi.nlm.nih.gov/pubmed/29226623) | metadata signals extractable PD data (EC50) |
| `Klein_2016.pdf` | Klein S et al., In Silico Modeling for the Prediction o…, Toxicological sciences : an… (2016) | pd | 5 | [10.1093/toxsci/kfv218](https://doi.org/10.1093/toxsci/kfv218) | [26420750](https://www.ncbi.nlm.nih.gov/pubmed/26420750) | metadata signals extractable PD data (EC50) |
| `Saleh_2016.pdf` | Saleh S et al., Population pharmacokinetics and the pha…, Pulmonary circulation (2016) | pd | 5 | [10.1086/685404](https://doi.org/10.1086/685404) | [27162632](https://www.ncbi.nlm.nih.gov/pubmed/27162632) | metadata signals extractable PD data (PK/PD) |
| `Scicluna_2008.pdf` | Scicluna JK et al., Reduced vascular response to phenylephr…, Shock (Augusta, Ga.) (2008) | pd | 5 | [10.1097/shk.0b013e318142c5df](https://doi.org/10.1097/shk.0b013e318142c5df) | [18437715](https://www.ncbi.nlm.nih.gov/pubmed/18437715) | metadata signals extractable PD data (EC50) |
| `Weber_1996.pdf` | Weber C et al., Pharmacokinetics and pharmacodynamics o…, Clinical pharmacology and t… (1996) | pd | 5 | [10.1016/S0009-9236(96)90127-7](https://doi.org/10.1016/S0009-9236(96)90127-7) | [8823230](https://www.ncbi.nlm.nih.gov/pubmed/8823230) | metadata signals extractable PD data (Emax) |
| `Landgraf_2008.pdf` | Landgraf RG et al., The role of endothelin pathway in modul…, European journal of pharmac… (2008) | pd | 4 | [10.1016/j.ejphar.2008.06.015](https://doi.org/10.1016/j.ejphar.2008.06.015) | [18599035](https://www.ncbi.nlm.nih.gov/pubmed/18599035) | metadata signals extractable PD data (Emax) |
| `Moore_2016.pdf` | Moore A et al., Evaluation of the Interplay between Upt…, Drug metabolism and disposi… (2016) | pd | 4 | [10.1124/dmd.116.072660](https://doi.org/10.1124/dmd.116.072660) | [27655038](https://www.ncbi.nlm.nih.gov/pubmed/27655038) | metadata signals extractable PD data (EC50) |
| `Patel_1994.pdf` | Patel TR et al., Effects on feline pial arterioles in si…, European journal of pharmac… (1994) | pd | 4 | [10.1016/0014-2999(94)90010-8](https://doi.org/10.1016/0014-2999(94)90010-8) | [7794420](https://www.ncbi.nlm.nih.gov/pubmed/7794420) | metadata signals extractable PD data (IC50) |
| `Rockey_1995.pdf` | Rockey DC, Characterization of endothelin receptor…, Biochemical and biophysical… (1995) | pd | 4 | [10.1006/bbrc.1995.1247](https://doi.org/10.1006/bbrc.1995.1247) | [7864865](https://www.ncbi.nlm.nih.gov/pubmed/7864865) | metadata signals extractable PD data (EC50) |
| `Sun_2017.pdf` | Sun Y et al., Quantitative Prediction of CYP3A4 Induc…, Drug metabolism and disposi… (2017) | pd | 4 | [10.1124/dmd.117.075481](https://doi.org/10.1124/dmd.117.075481) | [28336578](https://www.ncbi.nlm.nih.gov/pubmed/28336578) | metadata signals extractable PD data (EC50) |
| `Zhang_2001.pdf` | Zhang J et al., Effect of angiotensin II receptor antag…, Chinese medical sciences jo… (2001) | pd | 4 | not captured | [12901495](https://www.ncbi.nlm.nih.gov/pubmed/12901495) | metadata signals extractable PD data (EC50) |
| `Zouki_1999.pdf` | Zouki C et al., Endothelin-1 enhances neutrophil adhesi…, British journal of pharmaco… (1999) | pd | 4 | [10.1038/sj.bjp.0702593](https://doi.org/10.1038/sj.bjp.0702593) | [10433505](https://www.ncbi.nlm.nih.gov/pubmed/10433505) | metadata signals extractable PD data (EC50) |
| `Markert_2014.pdf` | Markert C et al., CYP2C9 polymorphism is not a major dete…, Clinical pharmacology and t… (2014) | pgx | 8 | [10.1038/clpt.2013.188](https://doi.org/10.1038/clpt.2013.188) | [24048276](https://www.ncbi.nlm.nih.gov/pubmed/24048276) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Markova_2014.pdf` | Markova SM et al., Response to "CYP2C9 polymorphism is not…, Clinical pharmacology and t… (2014) | pgx | 8 | [10.1038/clpt.2013.239](https://doi.org/10.1038/clpt.2013.239) | [24346422](https://www.ncbi.nlm.nih.gov/pubmed/24346422) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Nakamura_2016.pdf` | Nakamura S et al., A model analysis for dose-response rela…, Drug metabolism and pharmac… (2016) | pgx | 8 | [10.1016/j.dmpk.2016.03.007](https://doi.org/10.1016/j.dmpk.2016.03.007) | [27234489](https://www.ncbi.nlm.nih.gov/pubmed/27234489) | metadata signals extractable PGX data (VKORC1, PK/PD-context) |
| `Tamura_2019.pdf` | Tamura R et al., Evaluation of the effects of ontogeneti…, European journal of clinica… (2019) | pgx | 8 | [10.1007/s00228-019-02652-x](https://doi.org/10.1007/s00228-019-02652-x) | [30848333](https://www.ncbi.nlm.nih.gov/pubmed/30848333) | metadata signals extractable PGX data (VKORC1, PK/PD-context) |
| `Dingemanse_2004.pdf` | Dingemanse J et al., Clinical pharmacology of bosentan, a du…, Clinical pharmacokinetics (2004) | pgx | 7 | [10.2165/00003088-200443150-00003](https://doi.org/10.2165/00003088-200443150-00003) | [15568889](https://www.ncbi.nlm.nih.gov/pubmed/15568889) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Gotzkowsky_2010.pdf` | Gotzkowsky SK et al., Lack of a pharmacokinetic interaction b…, Journal of clinical pharmac… (2010) | pgx | 7 | [10.1177/0091270009351173](https://doi.org/10.1177/0091270009351173) | [20133511](https://www.ncbi.nlm.nih.gov/pubmed/20133511) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Li_2018.pdf` | Li R et al., A Study on Pharmacokinetics of Bosentan…, Drug metabolism and disposi… (2018) | pgx | 7 | [10.1124/dmd.117.078790](https://doi.org/10.1124/dmd.117.078790) | [29330218](https://www.ncbi.nlm.nih.gov/pubmed/29330218) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |
| `Moreno_2024.pdf` | Moreno I et al., Impact of a Moderate CYP3A4 Inducer (Bo…, Pharmaceuticals (Basel, Swi… (2024) | pgx | 7 | [10.3390/ph17020182](https://doi.org/10.3390/ph17020182) | [38399397](https://www.ncbi.nlm.nih.gov/pubmed/38399397) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Posada_2020.pdf` | Posada MM et al., Predicting Clinical Effects of CYP3A4 M…, Journal of clinical pharmac… (2020) | pgx | 7 | [10.1002/jcph.1584](https://doi.org/10.1002/jcph.1584) | [32080863](https://www.ncbi.nlm.nih.gov/pubmed/32080863) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Sato_2018.pdf` | Sato M et al., Physiologically Based Pharmacokinetic M…, Drug metabolism and disposi… (2018) | pgx | 7 | [10.1124/dmd.117.078972](https://doi.org/10.1124/dmd.117.078972) | [29475833](https://www.ncbi.nlm.nih.gov/pubmed/29475833) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Treiber_2004.pdf` | Treiber A et al., Inhibition of organic anion transportin…, The Journal of pharmacology… (2004) | pgx | 7 | [10.1124/jpet.103.061614](https://doi.org/10.1124/jpet.103.061614) | [14617681](https://www.ncbi.nlm.nih.gov/pubmed/14617681) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Treiber_2007.pdf` | Treiber A et al., Bosentan is a substrate of human OATP1B…, Drug metabolism and disposi… (2007) | pgx | 7 | [10.1124/dmd.106.013615](https://doi.org/10.1124/dmd.106.013615) | [17496208](https://www.ncbi.nlm.nih.gov/pubmed/17496208) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Venitz_2012.pdf` | Venitz J et al., Clinical pharmacokinetics and drug-drug…, Journal of clinical pharmac… (2012) | pgx | 7 | [10.1177/0091270011423662](https://doi.org/10.1177/0091270011423662) | [22205719](https://www.ncbi.nlm.nih.gov/pubmed/22205719) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |
| `Weiss_2015.pdf` | Weiss J et al., Desmethyl bosentan displays a similar i…, Pulmonary pharmacology & th… (2015) | pgx | 7 | [10.1016/j.pupt.2014.12.001](https://doi.org/10.1016/j.pupt.2014.12.001) | [25535031](https://www.ncbi.nlm.nih.gov/pubmed/25535031) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `van_2002.pdf` | van Giersbergen PL et al., Single- and multiple-dose pharmacokinet…, British journal of clinical… (2002) | pgx | 7 | [10.1046/j.1365-2125.2002.01608.x](https://doi.org/10.1046/j.1365-2125.2002.01608.x) | [12047483](https://www.ncbi.nlm.nih.gov/pubmed/12047483) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-09-28T01:41:43.332956+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Amaliah_2025 | irrelevant | 0 | 0 | The paper is a review of ternary solid dispersions for various drugs (e.g., simvastatin, glibenclamide) and does not mention bosentan or report any pharmacokinetic parameters for it. |
| PD | Amaliah_2025 | not_relevant | 0 | 0 | The paper is a review of ternary solid dispersions and does not report any pharmacodynamic or exposure-response data for bosentan. |
| popPK | Amiri_2023 | irrelevant | 0 | 0 | The paper is a computational study on drug repurposing and drug-target interaction prediction, containing no pharmacokinetic data or parameters for bosentan. |
| PD | Amiri_2023 | not_relevant | 0 | 0 | The paper describes a computational method for predicting drug-target interactions using graph embedding and does not report any pharmacodynamic or exposure-response data for bosentan. |
| popPK | Angus_2017 | irrelevant | 0 | 0 | no_text gate: only 151 chars of text extracted (&lt; 400) |
| PD | Angus_2017 | not_relevant | 0 | 0 | The paper focuses on the pharmacological mechanism of endothelin-1 clearance and its effect on receptor binding affinity (KB) estimates in pulmonary arteries, rather than reporting a pharmacokinetic-pharmacodynamic (PK/PD) exposure-response or dose-response relationship for bosentan with numeric PD parameters. |
| popPK | Benzait_2026 | irrelevant | 0 | 0 | The paper is a review of liver-on-a-chip models and does not report any pharmacokinetic parameters for bosentan. |
| PD | Benzait_2026 | not_relevant | 0 | 0 | The paper is a review of Liver-on-a-Chip models and does not contain any pharmacodynamic or exposure-response data for bosentan. |
| popPK | Cochius-den_2022 | irrelevant | 0 | 0 | The paper is a review on clinical trials for congenital diaphragmatic hernia and mentions bosentan only as a potential therapeutic agent for pulmonary hypertension, without reporting any pharmacokinetic parameters or numeric values for bosentan. |
| PD | Cochius-den_2022 | not_relevant | 0 | 0 | The paper is a review discussing challenges in clinical trials for congenital diaphragmatic hernia and does not report any pharmacodynamic or exposure-response data for bosentan. |
| PGx | Dingemanse_2004 | not_relevant | 0 | 0 | The paper describes general clinical pharmacology and drug-drug interactions but does not report any pharmacogenomic effects (gene variants) on bosentan PK or PD. |
| popPK | Engelbertz_2008 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of thyme extract on rat trachea where bosentan is used only as a positive control, with no pharmacokinetic parameters reported. |
| PD | Engelbertz_2008 | not_relevant | 1 | 0 | The paper uses bosentan only as a qualitative positive control to demonstrate competitive inhibition and does not report any numeric PD parameters (e.g., IC50, Emax) or concentration-effect curves for bosentan. |
| popPK | Eugene_2021 | irrelevant | 0 | 0 | The paper is a pharmacovigilance study on antipsychotics and does not report pharmacokinetic parameters for bosentan, which is only mentioned as a CYP3A4 inducer. |
| PD | Eugene_2021 | not_relevant | 0 | 0 | The paper is a pharmacovigilance study analyzing adverse event reporting odds ratios (ROR) for antipsychotics in the FAERS database and does not contain any pharmacokinetic or pharmacodynamic modeling, concentration-effect data, or numeric PD parameters for bosentan. |
| PGx | Fahrmayr_2013 | not_relevant | 0 | 0 | The study uses a transfected cell line model to investigate transport and metabolism mechanisms, not human genetic variants or pharmacogenomic effects on PK/PD parameters. |
| popPK | Ferguson-Sells_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of tadalafil, with bosentan serving only as a covariate affecting tadalafil clearance rather than being the subject drug. |
| PD | Ferguson-Sells_2022 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for tadalafil, not a pharmacodynamic (PD) or exposure-response model; while it mentions bosentan as a covariate affecting tadalafil clearance, it does not provide numeric PD parameters (e.g., Emax, EC50) or a concentration-effect curve for bosentan. |
| PD | Ghofrani_2010 | not_relevant | 0 | 0 | The paper studies riociguat, not bosentan, and only reports baseline changes in hemodynamics without any exposure-response or dose-response modeling. |
| popPK | Gonzalez_2019 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of sildenafil, not bosentan. |
| PD | Gonzalez_2019 | not_relevant | 0 | 0 | The paper focuses on the population pharmacokinetics of sildenafil, not bosentan, and does not report any pharmacodynamic or exposure-response parameters. |
| PGx | Gotzkowsky_2010 | not_relevant | 0 | 0 | The study evaluates a drug-drug interaction between treprostinil and bosentan in healthy volunteers, not a pharmacogenomic effect of a gene variant on bosentan's PK/PD. |
| PD | Gruenig_2009 | not_relevant | 2 | 1 | The study reports acute hemodynamic effects of sildenafil in patients on bosentan, but does not provide a concentration-effect or dose-response relationship for bosentan itself, nor does it report numeric PD parameters for bosentan. |
| PD | Hakamata_2016 | not_relevant | 2 | 1 | The paper reports comparative PK parameters and a clinical endpoint (walking distance) for combination therapies, but does not provide an exposure-response or dose-response model with numeric PD parameters (e.g., Emax, EC50) for bosentan. |
| popPK | Hallow_2024 | irrelevant | 0 | 0 | The paper is a mechanistic mathematical modeling study of Endothelin-1 (ET-1) kinetics, not a pharmacokinetic study of bosentan, and bosentan is only mentioned in a reference citation. |
| popPK | Hill_2020 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ambrisentan, not bosentan. |
| PD | Hill_2020 | not_relevant | 0 | 0 | The paper studies ambrisentan, not bosentan, and does not report a concentration-effect model or numeric PD parameters (Emax/EC50) for the target drug. |
| popPK | Hughes_2012 | irrelevant | 0 | 0 | The study investigates the pharmacology of box jellyfish venom, using bosentan only as a receptor antagonist to characterize the mechanism of action, rather than studying bosentan's pharmacokinetics. |
| PD | Hughes_2012 | not_relevant | 0 | 0 | The paper investigates the pharmacology of box jellyfish venom; bosentan is only mentioned as an antagonist that did not affect the venom's response, providing no PD or exposure-response data for bosentan itself. |
| popPK | Kenna_2015 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on liver injury mechanisms (BSEP inhibition, covalent binding) and does not report pharmacokinetic disposition parameters for bosentan. |
| PD | Kenna_2015 | not_relevant | 3 | 2 | The paper reports in vitro IC50/EC50 values and exposure-adjusted ratios for toxicity mechanisms, but does not provide a clinical pharmacodynamic (exposure-response) model or dose-response curve for the drug's therapeutic effect in humans. |
| PGx | Kenyon_2003 | not_relevant | 0 | 0 | The paper is a general review of bosentan's pharmacology and clinical efficacy, reporting no specific pharmacogenomic effects of gene variants on PK or PD parameters. |
| popPK | Klein_2016 | irrelevant | 0 | 0 | no_text gate: only 127 chars of text extracted (&lt; 400) |
| PD | Klein_2016 | not_relevant | 0 | 0 | The paper focuses on in silico modeling of adverse effects from in vitro data and does not report specific pharmacodynamic or exposure-response parameters for bosentan. |
| PD | Koga_2023 | not_relevant | 0 | 0 | The paper is an in vitro toxicology study using HepaRG cells to assess drug-induced cholestasis; it does not report in vivo pharmacokinetic or pharmacodynamic modeling, exposure-response relationships, or numeric PD parameters (e.g., Emax, EC50) for bosentan. |
| popPK | Kohno_2014 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of tadalafil, with bosentan serving only as a concomitant medication/comparator. |
| popPK | Kromer_1998 | irrelevant | 0 | 0 | The study is a pharmacological investigation of prostaglandin effects on rat aorta where bosentan is used only as a non-pharmacokinetic endothelin receptor blocker, with no PK parameters reported. |
| PD | Kromer_1998 | not_relevant | 0 | 0 | The paper reports that bosentan had no effect on the responses, providing no numeric PD parameters or exposure-response relationship for bosentan. |
| PD | Lal_1995 | not_relevant | 2 | 1 | The paper describes qualitative pharmacological effects and antagonist attenuation in an isolated organ model but does not provide numeric dose-response parameters (e.g., EC50, Emax) or a quantitative exposure-response relationship for bosentan. |
| popPK | Landgraf_2008 | irrelevant | 0 | 0 | no_text gate: only 108 chars of text extracted (&lt; 400) |
| PD | Landgraf_2008 | not_relevant | 0 | 0 | The paper focuses on the role of the endothelin pathway in airway reactivity in mice and does not report pharmacodynamic or exposure-response data for bosentan. |
| PGx | Lattanzio_2022 | not_relevant | 0 | 0 | The paper focuses on macitentan and selexipag, not bosentan, and does not report quantitative PK/PD parameters for bosentan. |
| PGx | Lazniewska_2016 | not_relevant | 0 | 0 | The paper discusses the role of glycosylation in the trafficking and function of the alpha-2-delta-1 subunit of voltage-gated calcium channels, not the pharmacokinetics or pharmacodynamics of bosentan. |
| PD | LeVarge_2012 | not_relevant | 1 | 0 | The text is a review of inhaled treprostinil and only mentions bosentan as a background therapy without providing any specific pharmacodynamic or exposure-response data for bosentan. |
| PD | Li_2018 | not_relevant | 0 | 0 | The paper focuses on pharmacokinetics and systems modeling to translate plasma concentration to liver exposure, without reporting any pharmacodynamic or exposure-response relationship for bosentan. |
| PGx | Li_2018 | not_relevant | 0 | 0 | The paper focuses on physiologically based pharmacokinetic modeling to estimate liver exposure in healthy subjects and does not report any pharmacogenomic effects or gene variant analyses. |
| popPK | Lubomirov_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of lurbinectedin, not bosentan. |
| PD | Lubomirov_2025 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics (PK) and pharmacogenomics of lurbinectedin, not bosentan, and does not report any pharmacodynamic (PD) or exposure-response relationships. |
| popPK | Mallillin_2026 | irrelevant | 0 | 0 | The paper is a review of allometric scaling methods and does not report specific quantitative pharmacokinetic parameters for bosentan. |
| PD | Mallillin_2026 | not_relevant | 0 | 0 | The paper is a review of allometric scaling for PK prediction and does not report any pharmacodynamic or exposure-response data for bosentan. |
| PGx | Markert_2014_2 | not_relevant | 2 | 5 | The study reports a drug-drug interaction (grapefruit juice) and stratifies by genotype, but does not report a direct pharmacogenomic effect of the genotype on PK parameters. |
| PGx | Markert_2014_3 | not_relevant | 2 | 5 | The study investigates a drug-drug interaction (St. John's Wort) and concludes that CYP2C9 genotype has a minor contribution, reporting no significant differences in PK parameters between genotypes. |
| PGx | Markert_2014_4 | not_relevant | 2 | 0 | The study reports that clarithromycin increased bosentan exposure in all participants irrespective of genotype, indicating no significant pharmacogenomic effect was observed. |
| PGx | Matsunaga_2016 | not_relevant | 0 | 0 | The paper investigates the metabolic pathway and hepatotoxicity of bosentan metabolites in vitro but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PD | McRae_2006 | not_relevant | 0 | 0 | The paper focuses on the hepatotoxicity mechanisms of antiretroviral drugs (ritonavir, saquinavir, efavirenz) and only mentions bosentan as a background example of a drug causing hepatotoxicity via bile acid transport inhibition, without providing any PD data or parameters for bosentan. |
| popPK | Melillo_2023 | irrelevant | 1 | 0 | Bosentan is used only as a perpetrator drug to probe gadoxetate transport, and its specific PK parameters are not reported in the provided text. |
| PD | Melillo_2023 | not_relevant | 2 | 1 | The paper focuses on PK/PBPK modeling of drug-drug interactions (DDI) on gadoxetate transport, not on the pharmacodynamic (exposure-response) relationship of bosentan itself; bosentan is only mentioned as a negative control with marginal effects. |
| popPK | Moore_2016 | irrelevant | 0 | 0 | no_text gate: only 114 chars of text extracted (&lt; 400) |
| PD | Moore_2016 | not_relevant | 0 | 0 | The paper focuses on in vitro hepatocyte transport and CYP3A4 induction mechanisms, not on in vivo pharmacodynamic or exposure-response relationships for bosentan. |
| PGx | Moore_2016 | not_relevant | 0 | 0 | The paper focuses on general transport and CYP3A4 induction mechanisms in hepatocytes and does not report pharmacogenomic effects on bosentan. |
| PGx | Moreno_2024 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (bosentan affecting lurbinectedin PK) and does not report any pharmacogenomic effects (gene variants) on bosentan's PK or PD parameters. |
| popPK | Morse_2017 | irrelevant | 2 | 0 | The study focuses on transporter-mediated hepatic clearance and liver partitioning (Kpu,u) in monkeys, reporting partitioning ratios rather than standard quantitative disposition parameters like clearance (CL), volume (V), or half-life for bosentan. |
| popPK | Ménochet_2012 | irrelevant | 1 | 0 | The study is an in-vitro mechanistic modeling paper using hepatocytes, not a clinical or animal pharmacokinetic study reporting in-vivo disposition parameters like clearance, volume, or half-life for bosentan. |
| popPK | Ménochet_2012_2 | irrelevant | 1 | 0 | The study is an in-vitro mechanistic investigation of hepatic uptake in rat hepatocytes, not a pharmacokinetic study reporting in-vivo disposition parameters (CL, V, t1/2) for bosentan. |
| PD | Nahar_2023 | not_relevant | 2 | 0 | The paper is a narrative review summarizing pharmacology and clinical trial outcomes (efficacy/safety) without reporting specific numeric pharmacodynamic parameters (e.g., Emax, EC50) or exposure-response curves for bosentan. |
| PD | Nakamura_2016 | not_relevant | 0 | 0 | The paper analyzes the dose-response relationship for warfarin, not bosentan. |
| PGx | Nakamura_2016 | not_relevant | 0 | 0 | The study focuses on warfarin pharmacogenomics (VKORC1) and pediatric dosing, not bosentan. |
| popPK | Pagán_2009 | irrelevant | 0 | 0 | The study is a mechanistic pharmacology investigation of vascular smooth muscle in pigs where bosentan is used only as a non-specific antagonist to rule out endothelin involvement, with no pharmacokinetic parameters reported. |
| PD | Pagán_2009 | not_relevant | 0 | 0 | The paper reports that bosentan did not alter the vasoconstriction response, but it does not provide a concentration-effect curve or numeric PD parameters for bosentan. |
| PD | Panchal_2023 | not_relevant | 1 | 0 | The paper focuses on novel bosentan analogues and reports IC50 values for these new derivatives, but does not provide a pharmacodynamic or exposure-response model with numeric PD parameters for bosentan itself. |
| PGx | Posada_2020 | not_relevant | 0 | 0 | The paper focuses on abemaciclib PK and mentions bosentan only as a CYP3A4 modulator in a PBPK simulation, without reporting any pharmacogenomic effects on bosentan. |
| PGx | Rahman_2007 | not_relevant | 0 | 0 | The study investigates the effect of cigarette smoking on vascular tone and CYP expression in rats, not the effect of a specific gene variant on bosentan pharmacokinetics or pharmacodynamics. |
| popPK | Ramzy_2011 | irrelevant | 0 | 0 | The study is a mechanistic pharmacodynamic assessment of vascular function in rats and does not report any pharmacokinetic parameters for bosentan. |
| PD | Ramzy_2011 | not_relevant | 2 | 1 | The study reports qualitative functional outcomes (vasorelaxation percentages) in a small animal model but does not provide numeric PD parameters (Emax, EC50) or an exposure-response curve for bosentan. |
| popPK | Renard_2015 | irrelevant | 2 | 0 | The study focuses on the population PK of imatinib, with bosentan serving only as a co-administered drug for interaction assessment, and no specific PK parameter values (CL, V, etc.) for bosentan are reported. |
| popPK | Rockey_1995 | irrelevant | 0 | 0 | no_text gate: only 88 chars of text extracted (&lt; 400) |
| PD | Rockey_1995 | not_relevant | 0 | 0 | The paper focuses on the characterization of endothelin receptors in rat hepatic stellate cells and does not report any pharmacodynamic or exposure-response data for bosentan. |
| popPK | Sahin_2026 | irrelevant | 0 | 0 | The paper is a computational study on macitentan derivatives, and bosentan is only mentioned in passing without any quantitative pharmacokinetic parameters. |
| PD | Sahin_2026 | not_relevant | 0 | 0 | The paper is a purely in-silico study involving molecular docking, MD simulations, and ADMET predictions for macitentan derivatives; it contains no experimental pharmacokinetic or pharmacodynamic data, exposure-response analysis, or numeric PD parameters. |
| popPK | Saleh_2016 | irrelevant | 0 | 0 | no_text gate: only 191 chars of text extracted (&lt; 400) |
| PD | Saleh_2016 | not_relevant | 0 | 0 | The paper focuses on riociguat, not bosentan, and does not report PD parameters for the specified drug. |
| PGx | Sato_2018 | not_relevant | 0 | 0 | The paper focuses on PBPK modeling of bosentan's nonlinear pharmacokinetics due to transporter saturation, but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Scicluna_2008 | irrelevant | 0 | 0 | no_text gate: only 128 chars of text extracted (&lt; 400) |
| PD | Scicluna_2008 | not_relevant | 0 | 0 | The paper is an in vitro study on LPS and phenylephrine involving NO and ET-1, with no mention of bosentan or any pharmacodynamic modeling for it. |
| PGx | Seyfarth_2014 | not_relevant | 5 | 5 | The paper reports an association between CYP2C9 variants and a clinical adverse event (hepatotoxicity), not a direct measurement of a pharmacokinetic (e.g., AUC, Cmax) or pharmacodynamic parameter. |
| PGx | Shinozawa_2021 | not_relevant | 2 | 0 | The paper mentions Bosentan and CYP2C9*2 only as a positive control for the assay's predictive capability, without reporting specific pharmacokinetic or pharmacodynamic data for the drug. |
| popPK | Shivarov_2026 | irrelevant | 0 | 0 | The study focuses on ibrutinib safety signals in FAERS and does not report pharmacokinetic parameters for bosentan. |
| PD | Shivarov_2026 | not_relevant | 0 | 0 | The paper analyzes FAERS safety signals for ibrutinib and does not contain any pharmacodynamic or exposure-response data for bosentan. |
| popPK | Shou_2008 | irrelevant | 0 | 0 | Bosentan is used only as a CYP3A4 inducer in a mechanistic modeling study, with no PK disposition parameters reported for bosentan itself. |
| PD | Shou_2008 | not_relevant | 2 | 1 | The paper focuses on in vitro CYP3A4 induction modeling and DDI prediction; while it mentions bosentan as an inducer, it does not report a pharmacodynamic exposure-response relationship for bosentan itself (e.g., effect on blood pressure or PAH parameters) with numeric PD parameters. |
| PGx | Spangler_2010 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction between bosentan and warfarin, not a pharmacogenomic effect on bosentan's PK/PD. |
| PGx | Srinivas_2016 | not_relevant | 0 | 0 | The paper is a review of bosentan's pharmacokinetics and drug-drug interactions, but it does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| popPK | Stavros_2010 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of sildenafil in the presence of sitaxentan, not bosentan, and bosentan is only mentioned as background context. |
| PD | Stavros_2010 | not_relevant | 0 | 0 | The study evaluates the effect of sitaxentan on sildenafil pharmacodynamics, not bosentan, and reports only summary BP changes without concentration-effect modeling or numeric PD parameters for bosentan. |
| popPK | Sun_2017 | irrelevant | 0 | 0 | no_text gate: only 192 chars of text extracted (&lt; 400) |
| PD | Sun_2017 | not_relevant | 0 | 0 | The paper focuses on CYP3A4 induction and drug-drug interaction predictions, not on the pharmacodynamic (exposure-response) relationship of bosentan. |
| PGx | Sun_2017 | not_relevant | 0 | 0 | The paper focuses on CYP3A4 induction and drug-drug interaction predictions, not pharmacogenomic effects on bosentan. |
| PGx | Taguchi_2011 | not_relevant | 0 | 0 | The study explicitly states that polymorphisms of CYP3A5, SLCO1B1, SLCO1B3, and SLCO2B1 had no significant effect on the disposition of bosentan. |
| PD | Tamura_2019 | not_relevant | 0 | 0 | The paper focuses on warfarin in children, not bosentan. |
| PGx | Tamura_2019 | not_relevant | 0 | 0 | The study focuses on warfarin pharmacodynamics and VKORC1 genotype, not bosentan pharmacokinetics or pharmacodynamics. |
| PGx | Treiber_2004 | not_relevant | 0 | 0 | The paper investigates a drug-drug interaction (bosentan and cyclosporin A) mediated by OATP transporters in rats, not a pharmacogenomic effect of a human gene variant on bosentan PK/PD. |
| PGx | Treiber_2007 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions via OATP transporter inhibition, not the effect of genetic variants (pharmacogenomics) on bosentan PK/PD. |
| PGx | Venitz_2012 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions and general pharmacokinetics but does not report pharmacogenomic effects (gene variants) on bosentan PK/PD. |
| popPK | Verma_2001 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of endothelial function using bosentan as a receptor antagonist, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Volz_2017 | relevant | 10 | 0 | The paper describes a population PK/PD model for bosentan, but the specific numeric parameter values are not present in the provided evidence text. |
| PD | Volz_2017 | not_relevant | 0 | 0 | The provided text is corrupted and contains no readable scientific content, data, or parameters regarding bosentan or any pharmacodynamic relationship. |
| popPK | Volz_2019 | relevant | 10 | 0 | The paper describes a population PK model for bosentan, but the specific numeric parameter values are not present in the provided evidence text. |
| popPK | Weber_1996 | irrelevant | 0 | 0 | no_text gate: only 110 chars of text extracted (&lt; 400) |
| PGx | Weiss_2013 | not_relevant | 0 | 0 | The paper investigates the drug-drug interaction profile of macitentan in vitro and does not report any pharmacogenomic effects on bosentan. |
| PGx | Weiss_2015 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetic interaction profile of bosentan metabolites (drug-drug interactions) in vitro, but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Yang_2025 | irrelevant | 0 | 0 | The paper is a review on in silico and AI modeling tools and does not report quantitative pharmacokinetic parameters for bosentan. |
| PD | Yang_2025 | not_relevant | 0 | 0 | The paper is a review on in silico and AI models for drug disposition and response across the lifespan and does not report specific pharmacodynamic data or parameters for bosentan. |
| PD | Yilmaz_2025 | not_relevant | 2 | 1 | The study reports qualitative and statistical comparisons of biodistribution, echocardiography, and histology outcomes between formulations, but does not provide concentration-effect data, dose-response curves, or numeric PD parameters (e.g., Emax, EC50). |
| PGx | Yorifuji_2018 | not_relevant | 2 | 5 | The study reports an association between genotypes and a clinical adverse event (liver injury), not a change in a specific pharmacokinetic (e.g., AUC, Cmax) or pharmacodynamic (e.g., receptor binding) parameter. |
| PGx | Yorifuji_2020 | not_relevant | 0 | 0 | The study reports a pharmacogenomic association with an adverse event (liver toxicity) rather than a change in a pharmacokinetic or pharmacodynamic parameter. |
| popPK | Zhang_2001 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effect of bosentan on nitroglycerin tolerance in rats and does not report any pharmacokinetic parameters (e.g., clearance, volume, half-life) for bosentan. |
| PD | Zhang_2001 | not_relevant | 2 | 1 | The study reports a qualitative improvement in nitroglycerin tolerance and a shift in the EC50 of the test compound (SNP), but does not provide a concentration-effect or dose-response relationship for bosentan itself with numeric PD parameters. |
| popPK | Zhang_2024 | irrelevant | 0 | 0 | The paper is a pharmacovigilance study on PDE5 inhibitors (sildenafil, tadalafil, etc.) and does not involve bosentan or report any pharmacokinetic parameters for it. |
| PD | Zhang_2024 | not_relevant | 0 | 0 | The paper is a pharmacovigilance study analyzing adverse event reports (hearing impairment) for PDE5 inhibitors using disproportionality analysis; it does not report any pharmacodynamic, exposure-response, or dose-response relationships or numeric PD parameters for bosentan. |
| popPK | Zhang_2026 | irrelevant | 0 | 0 | The paper focuses on antibacterial drug repurposing and does not study bosentan or report any pharmacokinetic parameters for it. |
| PD | Zhang_2026 | not_relevant | 0 | 0 | The paper focuses on drug repurposing for antibacterial discovery (specifically lifitegrast) and does not mention bosentan or report any pharmacodynamic parameters for it. |
| PD | Zhou_2021 | not_relevant | 1 | 0 | The paper is a meta-analysis of clinical trials that reports aggregate efficacy and safety outcomes (risk ratios, mean differences) rather than pharmacodynamic parameters (Emax, EC50) or exposure-response relationships for bosentan. |
| popPK | Zisowsky_2017 | relevant | 9 | 0 | The paper describes a population PK model for bosentan, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| popPK | Zouki_1999 | irrelevant | 0 | 0 | no_text gate: only 140 chars of text extracted (&lt; 400) |
| PD | Zouki_1999 | not_relevant | 0 | 0 | The paper focuses on the mechanism of endothelin-1 enhancing neutrophil adhesion and the role of ET(A) receptors/PAF, with no mention of bosentan or any exposure-response/dose-response analysis for bosentan. |
| popPK | de_2022 | irrelevant | 1 | 0 | Bosentan is used as a BSEP inhibitor to simulate bile acid dynamics, not as the subject drug for PK parameter estimation, and no bosentan PK values are reported. |
| PD | de_2022 | not_relevant | 4 | 2 | The paper uses a PBK model to simulate bosentan's effect on bile acids but does not report specific numeric PD parameters (like Emax or EC50) or a direct concentration-effect curve for bosentan in the provided text. |
| popPK | de_2024 | irrelevant | 2 | 0 | The paper is a PBK modeling study for cholestasis risk where bosentan is one of many drugs, and it does not report specific quantitative PK parameters (CL, V, etc.) for bosentan in the provided text. |
| PD | de_2024 | not_relevant | 3 | 2 | The paper uses PBK modeling to predict exposure (hepatic concentration) and compares it to a static Ki value for bile acid efflux inhibition, but it does not report a fitted pharmacodynamic model (e.g., Emax, IC50 curve) or numeric dose-response parameters for bosentan's effect on cholestasis/bile acids. |
| PD | unknown_2015 | not_relevant | 0 | 0 | The text is a clinical review of riociguat that mentions bosentan only as a background comparator without providing any pharmacodynamic data, exposure-response analysis, or numeric PD parameters for bosentan. |
| popPK | van_2002 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of nuclear receptor activation and does not report pharmacokinetic disposition parameters for bosentan. |
| PGx | van_2002_2 | not_relevant | 0 | 0 | The paper investigates the drug-drug interaction between bosentan and ketoconazole, not the effect of a gene variant or genotype on bosentan pharmacokinetics. |
| PGx | van_2002_3 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction between bosentan and glyburide, not a pharmacogenomic effect based on gene variants. |
| popPK | van_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of osimertinib, and bosentan is only mentioned in passing as a comparator for modeling approaches, with no PK parameters reported for it. |
| PD | van_2025 | not_relevant | 0 | 0 | The paper focuses on a PBPK model for osimertinib (a TKI) and does not contain any data, analysis, or parameters for bosentan. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-28 01:41 UTC</sub>
