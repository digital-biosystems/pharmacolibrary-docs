<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01A&quot;,&quot;href&quot;:&quot;atc/M01A.md&quot;},{&quot;label&quot;:&quot;flurbiprofen&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Flurbiprofen_Aarons1991_reference&quot;,&quot;label&quot;:&quot;Aarons_1991_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_flurbiprofen/Flurbiprofen_Aarons1991_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Flurbiprofen_Zhang2018_reference&quot;,&quot;label&quot;:&quot;Zhang_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_flurbiprofen/Flurbiprofen_Zhang2018_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# flurbiprofen

- **generic name:** flurbiprofen
- **ATC codes:** `M01AE09`, `M02AA19`, `R02AX01`, `S01BC04`
- **DrugBank:** [DB00712](https://go.drugbank.com/drugs/DB00712) · **PubChem:** [CID 3394](https://pubchem.ncbi.nlm.nih.gov/compound/3394)
- **molar mass:** 244.2609 g/mol (C15H13FO2) — DrugBank
- **groups:** approved, investigational

## About

Flurbiprofen is a non-steroidal anti-inflammatory drug used to treat pain and inflammation in conditions such as osteoarthritis and rheumatoid arthritis, and is also applied topically for joint, muscular, throat, and eye problems. It is an approved medicine used in several forms, including tablets, topical preparations, throat lozenges, and eye drops, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q419890](https://www.wikidata.org/wiki/Q419890) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| flurbiprofen | parent | 244.261 | C15H13FO2 | DrugBank | [3394](https://pubchem.ncbi.nlm.nih.gov/compound/3394) | Aarons_1991, Kumpulainen_2010_2, Wang_2010, Yao_2025, Zhang_2018 |
| flurbiprofen axetil | metabolite | 330.355 | C19H19FO4 | PubChem | [3395](https://pubchem.ncbi.nlm.nih.gov/compound/3395) | Wang_2010, Zhang_2018 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:52 | 2:30 | 3/3/0 | 4/2/0 | 0/0/0 | 244,027/21,605 | einfracz / qwen3.8-27b | 22 | 3/5 | 8/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Aarons_1991_reference](drugs/drug_flurbiprofen/Flurbiprofen_Aarons1991_reference.md) | ▶ model + simulator | 1-compartment, IV | 3 | Aarons L, The kinetics of flurbiprofen in synovia…, Journal of pharmacokinetics… (1991) | [10.1007/BF03036250](https://doi.org/10.1007/BF03036250) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.6). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Yao_2025_reference](drugs/drug_flurbiprofen/Flurbiprofen_Yao2025_reference.md) | held back | 2-compartment, IV | 4 | Yao H et al., Exploring the Population Pharmacokineti…, Drug design, development an… (2025) | [10.2147/DDDT.S542722](https://doi.org/10.2147/DDDT.S542722) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.909). The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Zhang_2018_reference](drugs/drug_flurbiprofen/Flurbiprofen_Zhang2018_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 | Zhang J et al., Population pharmacokinetic modeling of…, Journal of pain research (2018) | [10.2147/JPR.S176475](https://doi.org/10.2147/JPR.S176475) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Knihinicki_1990_reference](drugs/drug_flurbiprofen/Flurbiprofen_Knihinicki1990_reference.md) | — | general linear (no model) | 0 | Knihinicki RD et al., Stereoselective disposition of ibuprofe…, Chirality (1990) | [10.1002/chir.530020303](https://doi.org/10.1002/chir.530020303) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.824). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Kumpulainen_2010_2_reference](drugs/drug_flurbiprofen/Flurbiprofen_Kumpulainen2010v2_reference.md) | — | 1-compartment (no model) | 8 (+5 cov.) | Kumpulainen E et al., Plasma and cerebrospinal fluid pharmaco…, British journal of clinical… (2010) | [10.1111/j.1365-2125.2010.03720.x](https://doi.org/10.1111/j.1365-2125.2010.03720.x) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Wang_2010_reference](drugs/drug_flurbiprofen/Flurbiprofen_Wang2010_reference.md) | — | 1-compartment (no model) | 0 | Wang CL et al., [Population pharmacokinetic modeling of…, Yao xue xue bao = Acta phar… (2010) | — |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Loisios-Konstantinidis_2020_2_analgesic_efficacy](drugs/drug_flurbiprofen/pd_Loisios_Konstantinidis_2020_2_analgesic_efficacy.md) | analgesic efficacy ← flurbiprofen · direct Emax (saturable) effect | — | Loisios-Konstantinidis I et al., Physiologically Based Pharmacokinetic/P…, Pharmaceutics (2020) | [10.3390/pharmaceutics12111049](https://doi.org/10.3390/pharmaceutics12111049) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Neale_2019_BLT_Screen](drugs/drug_flurbiprofen/pd_Neale_2019_BLT_Screen.md) | bacterial toxicity (BLT-Screen) ← flurbiprofen · direct sigmoid Emax (Hill) effect | — | Neale PA et al., Evaluating the enantiospecific differen…, The Science of the total en… (2019) | [10.1016/j.scitotenv.2019.133659](https://doi.org/10.1016/j.scitotenv.2019.133659) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Neale_2019_EROD](drugs/drug_flurbiprofen/pd_Neale_2019_EROD.md) | Ethoxyresorufin-O-deethylase (EROD) activity ← flurbiprofen · direct linear effect | — | Neale PA et al., Evaluating the enantiospecific differen…, The Science of the total en… (2019) | [10.1016/j.scitotenv.2019.133659](https://doi.org/10.1016/j.scitotenv.2019.133659) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Neale_2019_PSII](drugs/drug_flurbiprofen/pd_Neale_2019_PSII.md) | Photosystem II (PSII) inhibition ← flurbiprofen · direct linear effect | — | Neale PA et al., Evaluating the enantiospecific differen…, The Science of the total en… (2019) | [10.1016/j.scitotenv.2019.133659](https://doi.org/10.1016/j.scitotenv.2019.133659) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">in vitro</span> | [Pignatello_2008_inhibition_of_F_18_FDDNP_binding_to_Abeta_fibrils](drugs/drug_flurbiprofen/pd_Pignatello_2008_inhibition_of_F_18_FDDNP_binding_to_Abeta_fi.md) | inhibition of [F-18]FDDNP binding to Abeta fibrils biomarker turnover ← Flurbiprofen | — | Pignatello R et al., Flurbiprofen derivatives in Alzheimer's…, Bioconjugate chemistry (2008) | [10.1021/bc700312y](https://doi.org/10.1021/bc700312y) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span> | [Tanaka_2016_DA_PA](drugs/drug_flurbiprofen/pd_Tanaka_2016_DA_PA.md) | DA/pulmonary artery (PA) inner diameter ratio ← flurbiprofen · direct Emax (saturable) effect | — | Tanaka S et al., Prediction of fetal ductus arteriosus c…, International journal of cl… (2016) | [10.5414/CP202532](https://doi.org/10.5414/CP202532) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Oelkers_1997_2_TXB_2](drugs/drug_flurbiprofen/pd_Oelkers_1997_2_TXB_2.md) | inhibition of TXB 2 generation ← S-flurbiprofen · direct sigmoid Emax (Hill) effect | — | Oelkers R et al., Disposition and effects of flurbiprofen…, British journal of clinical… (1997) | [10.1046/j.1365-2125.1997.05333.x](https://doi.org/10.1046/j.1365-2125.1997.05333.x) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Suri_1997_EP](drugs/drug_flurbiprofen/pd_Suri_1997_EP.md) | evoked potentials ← S-flurbiprofen · delayed effect through an effect compartment | — | Suri A et al., Pharmacokinetics and pharmacodynamics o…, International journal of cl… (1997) | — |
| <span class="pk-badge pk-badge--red">rejected</span> | [Suri_1997_pain_intensity_scale](drugs/drug_flurbiprofen/pd_Suri_1997_pain_intensity_scale.md) | pain intensity scale ← S-flurbiprofen · delayed effect through an effect compartment | — | Suri A et al., Pharmacokinetics and pharmacodynamics o…, International journal of cl… (1997) | — |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=flurbiprofen) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| distribution | blood | `ALB` other/unknown | DrugBank actor |
| metabolism | kidney | `UGT1A9` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | liver | `CYP2C9` substrate, `UGT1A1` inhibitor/substrate, `UGT1A3` substrate, `UGT1A9` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | small intestine | `UGT1A1` inhibitor/substrate, `UGT2B7` substrate | DrugBank actor |
| excretion | kidney | `ABCC4` inhibitor, `SLC22A6` inhibitor | DrugBank actor |
| excretion | liver | `ABCC4` inhibitor | DrugBank actor |
| excretion | mammary gland | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: PTGS1 (inhibitor), PTGS2 (inhibitor), UGT2B4 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 36 matched, 20 returned
- **screened:** 6  ·  **relevant:** 6
- **records:** 6  ·  extracted 3  ·  needs_review 0  ·  rejected 3  ·  stale 3
- **scholar-agent fallback query used:** not captured

## Full text wanted

_9 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Aarons_1991.pdf` | Aarons L, The kinetics of flurbiprofen in synovia…, Journal of pharmacokinetics… (1991) | popPK | 10 | [10.1007/BF03036250](https://doi.org/10.1007/BF03036250) | [1875281](https://pubmed.ncbi.nlm.nih.gov/1875281) | The paper reports quantitative population pharmacokinetic parameters (CL, V, t1/2) for flurbiprofen in human plasma and synovial fluid using NONMEM, with all values explicitly stated in the text. |
| `Knihinicki_1990.pdf` | Knihinicki RD et al., Stereoselective disposition of ibuprofe…, Chirality (1990) | popPK | 10 | [10.1002/chir.530020303](https://doi.org/10.1002/chir.530020303) | [2252842](https://pubmed.ncbi.nlm.nih.gov/2252842) | The study reports quantitative PK parameters (clearance, inversion) for flurbiprofen in rats using a two-compartment model, with specific values provided in the abstract. |
| `Suri_1997.pdf` | Suri A et al., Pharmacokinetics and pharmacodynamics o…, International journal of cl… (1997) | popPK | 10 | not captured | [9021434](https://pubmed.ncbi.nlm.nih.gov/9021434) | The study is a human PK/PD study of flurbiprofen enantiomers that reports quantitative parameters like clearance and volume, but the specific numeric values are not included in the provided abstract text. |
| `Wang_2010.pdf` | Wang CL et al., [Population pharmacokinetic modeling of…, Yao xue xue bao = Acta phar… (2010) | popPK | 10 | not captured | [21361044](https://pubmed.ncbi.nlm.nih.gov/21361044) | The paper reports a population pharmacokinetic model for flurbiprofen (identified as the active metabolite of flurbiprofen axetil in the text) with explicit numeric values for clearance, volume, and intercompartmental clearance. |
| `Zhou_2024.pdf` | Zhou S et al., Rapid identification of potential nonst…, Biomedical chromatography :… (2024) | popPK | 9 | [10.1002/bmc.5877](https://doi.org/10.1002/bmc.5877) | [38618898](https://pubmed.ncbi.nlm.nih.gov/38618898) | The paper describes a population pharmacokinetic study for flurbiprofen in humans, but the specific numeric parameter values (clearance, volume, etc.) are not provided in the extracted evidence. |
| `Loisios-Konstantinidis_2020_2.pdf` | Loisios-Konstantinidis I et al., Physiologically Based Pharmacokinetic/P…, Pharmaceutics (2020) | popPK | 8 | [10.3390/pharmaceutics12111049](https://doi.org/10.3390/pharmaceutics12111049) | [33147873](https://pubmed.ncbi.nlm.nih.gov/33147873) | The paper describes a PBPK model for flurbiprofen in humans, but the specific quantitative parameter values (CL, V, Q, ka) are not listed in the provided abstract, only performance metrics (prediction accuracy) and qualitative descriptions. |
| `Tanaka_2016.pdf` | Tanaka S et al., Prediction of fetal ductus arteriosus c…, International journal of cl… (2016) | popPK | 8 | [10.5414/CP202532](https://doi.org/10.5414/CP202532) | [27285464](https://pubmed.ncbi.nlm.nih.gov/27285464) | The paper uses flurbiprofen in a PK/PD model and reports that PK parameters were calculated from literature data, but no specific numeric PK values for flurbiprofen are provided in the evidence text. |
| `Menzel-Soglowek_1992.pdf` | Menzel-Soglowek S et al., Variability of inversion of (R)-flurbip…, Journal of pharmaceutical s… (1992) | popPK | 5 | [10.1002/jps.2600810909](https://doi.org/10.1002/jps.2600810909) | [1432634](https://pubmed.ncbi.nlm.nih.gov/1432634) | The study reports the fraction inverted (Fi) for flurbiprofen in multiple animal species but does not provide standard quantitative disposition parameters such as clearance, volume, or half-life in the provided evidence. |
| `Wagner_1991.pdf` | Wagner JG et al., Stepwise determination of multicompartm…, Journal of pharmacokinetics… (1991) | popPK | 5 | [10.1007/BF01061665](https://doi.org/10.1007/BF01061665) | [1920088](https://pubmed.ncbi.nlm.nih.gov/1920088) | The paper describes the methodological application of PK analysis to flurbiprofen data, but the extracted evidence contains no specific numeric values for clearance, volume, or rate constants. |

<sub>queue written 2026-10-07T00:51:03.368071+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Loisios-Konstantinidis_2020_2 | relevant | 8 | 1 | The paper describes a PBPK model for flurbiprofen in humans, but the specific quantitative parameter values (CL, V, Q, ka) are not listed in the provided abstract, only performance metrics (prediction accuracy) and qualitative descriptions. |
| popPK | Ma_2020 | irrelevant | 0 | 0 | The study is a pharmacodynamic trial investigating the effect of flurbiprofen axetil on the EC50 of propofol, and it does not report quantitative pharmacokinetic parameters (CL, V, ka, etc.) for flurbiprofen. |
| popPK | Menzel-Soglowek_1992 | relevant | 5 | 0 | The study reports the fraction inverted (Fi) for flurbiprofen in multiple animal species but does not provide standard quantitative disposition parameters such as clearance, volume, or half-life in the provided evidence. |
| popPK | Neale_2019 | irrelevant | 0 | 0 | The paper is an ecotoxicology study reporting toxicity endpoints (EC50, EC10) for flurbiprofen enantiomers in bacteria, algae, and fish cells, not pharmacokinetic disposition parameters (CL, V, t1/2). |
| popPK | Oelkers_1997_2 | relevant | 7 | 3 | Study reports pharmacokinetics of flurbiprofen enantiomers in humans, but specific disposition parameters (CL, V, t1/2) are in Table 1 which is not fully provided, only AUC/Cmax are visible. |
| popPK | Pignatello_2008 | irrelevant | 1 | 0 | The study focuses on the synthesis and biological assessment of flurbiprofen prodrugs for brain delivery and does not report standard population pharmacokinetic parameters (CL, V, etc.) for flurbiprofen itself. |
| popPK | Suri_1997 | relevant | 10 | 0 | The study is a human PK/PD study of flurbiprofen enantiomers that reports quantitative parameters like clearance and volume, but the specific numeric values are not included in the provided abstract text. |
| popPK | Tanaka_2016 | relevant | 8 | 1 | The paper uses flurbiprofen in a PK/PD model and reports that PK parameters were calculated from literature data, but no specific numeric PK values for flurbiprofen are provided in the evidence text. |
| popPK | Wagner_1991 | relevant | 5 | 0 | The paper describes the methodological application of PK analysis to flurbiprofen data, but the extracted evidence contains no specific numeric values for clearance, volume, or rate constants. |
| popPK | Wright_1997 | irrelevant | 0 | 0 | The study focuses on the toxicokinetics of indomethacin in rats, and flurbiprofen is only mentioned as a previous reference for comparison. |
| popPK | Zhou_2024 | relevant | 9 | 0 | The paper describes a population pharmacokinetic study for flurbiprofen in humans, but the specific numeric parameter values (clearance, volume, etc.) are not provided in the extracted evidence. |
| popPK | de_2022 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on novel cannabinoid receptor modulators, and flurbiprofen is only mentioned as a structural scaffold for synthesis, not as a subject drug for PK analysis. |
| popPK | unknown_2019 | relevant | 9 | 0 | The original study is a population pharmacokinetic model of flurbiprofen in humans, but this provided text is an "Expression of Concern" regarding data validity and contains no quantitative PK parameter values. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 00:51 UTC</sub>
