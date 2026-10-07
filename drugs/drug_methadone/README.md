<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07B&quot;,&quot;href&quot;:&quot;atc/N07B.md&quot;},{&quot;label&quot;:&quot;methadone&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Methadone_Shin2024_reference&quot;,&quot;label&quot;:&quot;Shin_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_methadone/Methadone_Shin2024_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Methadone_Tang2021_reference&quot;,&quot;label&quot;:&quot;Tang_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_methadone/Methadone_Tang2021_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# methadone

- **generic name:** methadone
- **ATC codes:** `N07BC02`
- **DrugBank:** [DB00333](https://go.drugbank.com/drugs/DB00333) · **PubChem:** [CID 4095](https://pubchem.ncbi.nlm.nih.gov/compound/4095)
- **molar mass:** 309.4452 g/mol (C21H27NO) — DrugBank
- **groups:** approved, investigational

## About

Methadone is an opioid used to treat opiate dependence and is also used for pain relief. It is an approved medicine, listed as a WHO essential medicine, and is widely used, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q179996](https://www.wikidata.org/wiki/Q179996) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| methadone | parent | 309.445 | C21H27NO | DrugBank | [4095](https://pubchem.ncbi.nlm.nih.gov/compound/4095) | Foster_2004, Gittel_2021, Shin_2024, Ward_2014 |
| (R)-methadone (l-methadone) | metabolite | 309.453 | C21H27NO | PubChem | [22267](https://pubchem.ncbi.nlm.nih.gov/compound/22267) | Foster_2004, Gittel_2021 |
| EDDP | metabolite | 277.411 | C20H23N | PubChem | [5352621](https://pubchem.ncbi.nlm.nih.gov/compound/5352621) | Ward_2014 |
| EMDP | metabolite | 263.384 | C19H21N | PubChem | [9879368](https://pubchem.ncbi.nlm.nih.gov/compound/9879368) | Ward_2014 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 03:37 | 4:51 | 3/1/2 | 5/1/0 | 0/0/0 | 246,022/19,724 | ollama / glm-5.3-flash | 19 | 4/2 | 6/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span> | [Shin_2024_reference](drugs/drug_methadone/Methadone_Shin2024_reference.md) | ▶ model + simulator | 1-compartment, IV | 4 | Shin CW et al., Pharmacokinetics of methadone after int…, Veterinary anaesthesia and… (2024) | [10.1016/j.vaa.2024.08.009](https://doi.org/10.1016/j.vaa.2024.08.009) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Tang_2021_reference](drugs/drug_methadone/Methadone_Tang2021_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Tang F et al., Clinical pharmacology and dosing regime…, Clinical and translational… (2021) | [10.1111/cts.12994](https://doi.org/10.1111/cts.12994) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Ward_2014_reference](drugs/drug_methadone/Methadone_Ward2014_reference.md) | model (no simulator) | 2-compartment general linear | 9 | Ward RM et al., The pharmacokinetics of methadone and i…, Paediatric anaesthesia (2014) | [10.1111/pan.12385](https://doi.org/10.1111/pan.12385) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.625). The first reading is what the record holds.">cross-check: disputed</span><br><sub>caveat: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only…</sub><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — clearance/elimination from this paper; review-gap-fill…</sub><br><sub>route_to: `human_review`</sub> | [Foster_2004_reference](drugs/drug_methadone/Methadone_Foster2004_reference.md) | — | 1-compartment (no model) | 5 | Foster DJ et al., Population pharmacokinetics of (R)-, (S…, British journal of clinical… (2004) | [10.1111/j.1365-2125.2004.02079.x](https://doi.org/10.1111/j.1365-2125.2004.02079.x) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span><br><sub>blocking: disposition incomplete — volume from this paper; review-gap-filled from other p…</sub><br><sub>route_to: `human_review`</sub> | [Gittel_2021_reference](drugs/drug_methadone/Methadone_Gittel2021_reference.md) | — | 1-compartment (no model) | 4 | Gittel C et al., Pharmacokinetics and pharmacodynamics o…, Veterinary anaesthesia and… (2021) | [10.1016/j.vaa.2020.04.018](https://doi.org/10.1016/j.vaa.2020.04.018) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Carlos_2002_reference](drugs/drug_methadone/Methadone_Carlos2002_reference.md) | — | 1-compartment (no model) | 0 | Carlos MA et al., Effect of omeprazole on oral and intrav…, Journal of pharmaceutical s… (2002) | [10.1002/jps.10031](https://doi.org/10.1002/jps.10031) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Carlos_2002_analgesic_response_tail_flick](drugs/drug_methadone/pd_Carlos_2002_analgesic_response_tail_flick.md) | analgesic response (tail flick) ← RS-methadone · direct Emax (saturable) effect | — | Carlos MA et al., Effect of omeprazole on oral and intrav…, Journal of pharmaceutical s… (2002) | [10.1002/jps.10031](https://doi.org/10.1002/jps.10031) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Carlos_2002_analgesic_response_tail_flick_2](drugs/drug_methadone/pd_Carlos_2002_analgesic_response_tail_flick_2.md) | analgesic response (tail flick) ← RS-methadone · delayed effect through an effect compartment | — | Carlos MA et al., Effect of omeprazole on oral and intrav…, Journal of pharmaceutical s… (2002) | [10.1002/jps.10031](https://doi.org/10.1002/jps.10031) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Carlos_2002_analgesic_response_tail_flick_3](drugs/drug_methadone/pd_Carlos_2002_analgesic_response_tail_flick_3.md) | analgesic response (tail flick) ← RS-methadone · direct sigmoid Emax (Hill) effect | — | Carlos MA et al., Effect of omeprazole on oral and intrav…, Journal of pharmaceutical s… (2002) | [10.1002/jps.10031](https://doi.org/10.1002/jps.10031) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Garrido_1999_2_Analgesia_tail_flick](drugs/drug_methadone/pd_Garrido_1999_2_Analgesia_tail_flick.md) | Analgesia (tail-flick) ← methadone · direct sigmoid Emax (Hill) effect | — | Garrido MJ et al., Altered plasma and brain disposition an…, The Journal of pharmacology… (1999) | — |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span> | [Gozalo-Marcilla_2019_ET](drugs/drug_methadone/pd_Gozalo_Marcilla_2019_ET.md) | electrical nociceptive threshold ← methadone · stimulation effect | — | Gozalo-Marcilla M et al., Characterisation of the in vivo interac…, Equine veterinary journal (2019) | [10.1111/evj.13031](https://doi.org/10.1111/evj.13031) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span> | [Gozalo-Marcilla_2019_GIM](drugs/drug_methadone/pd_Gozalo_Marcilla_2019_GIM.md) | gastrointestinal motility ← methadone · inhibition effect | — | Gozalo-Marcilla M et al., Characterisation of the in vivo interac…, Equine veterinary journal (2019) | [10.1111/evj.13031](https://doi.org/10.1111/evj.13031) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span> | [Gozalo-Marcilla_2019_HHAG](drugs/drug_methadone/pd_Gozalo_Marcilla_2019_HHAG.md) | height of the head above the ground ← methadone · inhibition effect | — | Gozalo-Marcilla M et al., Characterisation of the in vivo interac…, Equine veterinary journal (2019) | [10.1111/evj.13031](https://doi.org/10.1111/evj.13031) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span> | [Gozalo-Marcilla_2019_MT](drugs/drug_methadone/pd_Gozalo_Marcilla_2019_MT.md) | mechanical nociceptive threshold ← methadone · stimulation effect | — | Gozalo-Marcilla M et al., Characterisation of the in vivo interac…, Equine veterinary journal (2019) | [10.1111/evj.13031](https://doi.org/10.1111/evj.13031) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span> | [Gozalo-Marcilla_2019_TT](drugs/drug_methadone/pd_Gozalo_Marcilla_2019_TT.md) | thermal nociceptive threshold ← methadone · stimulation effect | — | Gozalo-Marcilla M et al., Characterisation of the in vivo interac…, Equine veterinary journal (2019) | [10.1111/evj.13031](https://doi.org/10.1111/evj.13031) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span> | [Gozalo-Marcilla_2019_VAS](drugs/drug_methadone/pd_Gozalo_Marcilla_2019_VAS.md) | visual analogue scale for sedation ← methadone · inhibition effect | — | Gozalo-Marcilla M et al., Characterisation of the in vivo interac…, Equine veterinary journal (2019) | [10.1111/evj.13031](https://doi.org/10.1111/evj.13031) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Inturrisi_1990_pain_relief](drugs/drug_methadone/pd_Inturrisi_1990_pain_relief.md) | pain relief ← methadone · direct sigmoid Emax (Hill) effect | — | Inturrisi CE et al., Pharmacokinetic-pharmacodynamic relatio…, Clinical pharmacology and t… (1990) | [10.1038/clpt.1990.77](https://doi.org/10.1038/clpt.1990.77) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Inturrisi_1990_sedation](drugs/drug_methadone/pd_Inturrisi_1990_sedation.md) | sedation ← methadone · direct sigmoid Emax (Hill) effect | — | Inturrisi CE et al., Pharmacokinetic-pharmacodynamic relatio…, Clinical pharmacology and t… (1990) | [10.1038/clpt.1990.77](https://doi.org/10.1038/clpt.1990.77) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Lötsch_2005_pain_relief](drugs/drug_methadone/pd_L_tsch_2005_pain_relief.md) | Pain relief (chronic pain patients, single IV methadone dose) ← methadone · direct Emax (saturable) effect | — | Lötsch J, Pharmacokinetic-pharmacodynamic modelin…, Journal of pain and symptom… (2005) | [10.1016/j.jpainsymman.2005.01.012](https://doi.org/10.1016/j.jpainsymman.2005.01.012) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Lötsch_2005_pain_relief_2](drugs/drug_methadone/pd_L_tsch_2005_pain_relief_2.md) | Pain relief (cancer pain patients, methadone infusion) ← methadone · direct sigmoid Emax (Hill) effect | — | Lötsch J, Pharmacokinetic-pharmacodynamic modelin…, Journal of pain and symptom… (2005) | [10.1016/j.jpainsymman.2005.01.012](https://doi.org/10.1016/j.jpainsymman.2005.01.012) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Lötsch_2005_pupil_diameter](drugs/drug_methadone/pd_L_tsch_2005_pupil_diameter.md) | Pupil diameter (oral R-methadone) ← R-methadone · direct sigmoid Emax (Hill) effect | — | Lötsch J, Pharmacokinetic-pharmacodynamic modelin…, Journal of pain and symptom… (2005) | [10.1016/j.jpainsymman.2005.01.012](https://doi.org/10.1016/j.jpainsymman.2005.01.012) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Lötsch_2005_sedation](drugs/drug_methadone/pd_L_tsch_2005_sedation.md) | Sedation (cancer pain patients, methadone infusion) ← methadone · direct sigmoid Emax (Hill) effect | — | Lötsch J, Pharmacokinetic-pharmacodynamic modelin…, Journal of pain and symptom… (2005) | [10.1016/j.jpainsymman.2005.01.012](https://doi.org/10.1016/j.jpainsymman.2005.01.012) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Guo_2022_QTc](drugs/drug_methadone/pd_Guo_2022_QTc.md) | QTc interval prolongation ← methadone (R- and S-) · direct linear effect | — | Guo D et al., A genetic-based population PK/PD modeli…, European journal of clinica… (2022) | [10.1007/s00228-021-03227-5](https://doi.org/10.1007/s00228-021-03227-5) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Guo_2022_urinalysis_illicit_drug_testing](drugs/drug_methadone/pd_Guo_2022_urinalysis_illicit_drug_testing.md) | urinalysis illicit drug testing ← methadone (R- and S-) · direct linear effect | — | Guo D et al., A genetic-based population PK/PD modeli…, European journal of clinica… (2022) | [10.1007/s00228-021-03227-5](https://doi.org/10.1007/s00228-021-03227-5) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=methadone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor | DrugBank actor |
| distribution | blood | `ALB` unknown, `ORM1` unknown | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP1A2` substrate, `CYP2B6` inducer/substrate, `CYP2C19` substrate, `CYP2C8` substrate, `CYP2C9` substrate, `CYP2D6` inhibitor/substrate, `CYP3A4` inducer/inhibitor/substrate, `CYP3A7` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| — | adipose tissue | `CYP19A1` substrate | DrugBank actor |
| — | ovary | `CYP19A1` substrate | DrugBank actor |
| — | testis | `CYP19A1` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CHRNA3 (target), CHRNA4 (target), CHRNA7 (target), CHRNB2 (target), CYP2C18 (substrate), GRIN1 (target), HTR3A (target), OPRD1 (target), OPRM1 (target), UGT2B4 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 114 matched, 20 returned
- **screened:** 7  ·  **relevant:** 6
- **records:** 6  ·  extracted 3  ·  needs_review 2  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full text wanted

_8 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gittel_2021.pdf` | Gittel C et al., Pharmacokinetics and pharmacodynamics o…, Veterinary anaesthesia and… (2021) | popPK | 10 | [10.1016/j.vaa.2020.04.018](https://doi.org/10.1016/j.vaa.2020.04.018) | [33423953](https://pubmed.ncbi.nlm.nih.gov/33423953) | Original PK study in ponies with numeric CL, Vd, and half-life reported directly in the abstract. |
| `Guo_2022.pdf` | Guo D et al., A genetic-based population PK/PD modeli…, European journal of clinica… (2022) | popPK | 10 | [10.1007/s00228-021-03227-5](https://doi.org/10.1007/s00228-021-03227-5) | [35013802](https://pubmed.ncbi.nlm.nih.gov/35013802) | Population PK model of (R)- and (S)-methadone in Chinese patients, but no numeric parameter values (CL, V, ka) appear in the evidence — likely in tables/supplement not provided. |
| `Shin_2024.pdf` | Shin CW et al., Pharmacokinetics of methadone after int…, Veterinary anaesthesia and… (2024) | popPK | 10 | [10.1016/j.vaa.2024.08.009](https://doi.org/10.1016/j.vaa.2024.08.009) | [39384415](https://pubmed.ncbi.nlm.nih.gov/39384415) | Original PK study in ferrets with numeric CL, Vd, and half-life reported directly in the abstract. |
| `Ward_2014.pdf` | Ward RM et al., The pharmacokinetics of methadone and i…, Paediatric anaesthesia (2014) | popPK | 10 | [10.1111/pan.12385](https://doi.org/10.1111/pan.12385) | [24666686](https://pubmed.ncbi.nlm.nih.gov/24666686) | Population PK model of methadone in children with full numeric parameter estimates (V1, V2, V3, CL, Q2, Q3, metabolite clearances) reported directly in the abstract. |
| `Carlos_2002.pdf` | Carlos MA et al., Effect of omeprazole on oral and intrav…, Journal of pharmaceutical s… (2002) | popPK | 8 | [10.1002/jps.10031](https://doi.org/10.1002/jps.10031) | [12115824](https://pubmed.ncbi.nlm.nih.gov/12115824) | Rat PK study of methadone with numeric ka, Cmax, tmax, ke0 values present, but CL/V and other disposition parameters are not shown in the abstract. |
| `Garrido_1999_2.pdf` | Garrido MJ et al., Altered plasma and brain disposition an…, The Journal of pharmacology… (1999) | popPK | 8 | not captured | [9862769](https://pubmed.ncbi.nlm.nih.gov/9862769) | Rat PK study of methadone disposition (CL, Q, Vss) but numeric parameter values are not shown in the abstract, likely in tables/figures not provided. |
| `Gozalo-Marcilla_2019.pdf` | Gozalo-Marcilla M et al., Characterisation of the in vivo interac…, Equine veterinary journal (2019) | popPK | 8 | [10.1111/evj.13031](https://doi.org/10.1111/evj.13031) | [30298682](https://pubmed.ncbi.nlm.nih.gov/30298682) | Population PK/PD model of methadone in horses, but numeric PK parameters (CL, V, Q) are not shown in the evidence, likely in tables/supplementary material not provided. |
| `Inturrisi_1990.pdf` | Inturrisi CE et al., Pharmacokinetic-pharmacodynamic relatio…, Clinical pharmacology and t… (1990) | popPK | 6 | [10.1038/clpt.1990.77](https://doi.org/10.1038/clpt.1990.77) | [2188771](https://pubmed.ncbi.nlm.nih.gov/2188771) | Human PK-PD study of methadone infusions with a PK-PD model, but the abstract reports only Css50/slope values, not CL/V or other disposition parameters, which may be in the full text. |

<sub>queue written 2026-10-07T03:32:52.708999+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Baumann_1996 | irrelevant | 0 | 0 | Review of SSRI pharmacokinetics; methadone only mentioned as an interaction with fluoxetine/fluvoxamine, no methadone PK parameters reported. |
| popPK | Garrido_1999 | irrelevant | 3 | 1 | This is a narrative review of methadone PK/PD properties with no numeric disposition parameters present in the evidence. |
| popPK | Garrido_1999_2 | relevant | 8 | 3 | Rat PK study of methadone disposition (CL, Q, Vss) but numeric parameter values are not shown in the abstract, likely in tables/figures not provided. |
| popPK | Gatti_2021_2 | irrelevant | 1 | 1 | Pharmacovigilance PK/PD index study; methadone is only one of many serotonergic agents with literature-derived VD/LogP values in supplementary tables not provided, no disposition PK model. |
| popPK | Gozalo-Marcilla_2019 | relevant | 8 | 3 | Population PK/PD model of methadone in horses, but numeric PK parameters (CL, V, Q) are not shown in the evidence, likely in tables/supplementary material not provided. |
| popPK | Guo_2022 | relevant | 10 | 3 | Population PK model of (R)- and (S)-methadone in Chinese patients, but no numeric parameter values (CL, V, ka) appear in the evidence — likely in tables/supplement not provided. |
| popPK | Inturrisi_1990 | relevant | 6 | 4 | Human PK-PD study of methadone infusions with a PK-PD model, but the abstract reports only Css50/slope values, not CL/V or other disposition parameters, which may be in the full text. |
| popPK | Lötsch_2005 | irrelevant | 3 | 4 | This is a PK/PD review of opioids; methadone appears only with PD parameters (t½,ke0, EC50) in a table, not disposition PK (CL/V) parameters of its own. |
| popPK | McPhail_2021 | irrelevant | 2 | 0 | This is a review of opioid PK in neonates with no original quantitative methadone PK parameters reported in the evidence. |
| popPK | Packiasabapathy_2020 | irrelevant | 4 | 2 | This is a narrative pharmacogenetics review; it discusses methadone clearance qualitatively but no actual numeric PK parameter values (CL, V, half-life) are present in the evidence. |
| popPK | Paterson_2022 | irrelevant | 2 | 0 | This is a trial protocol for baclofen safety in methadone-maintained patients; methadone is a co-administered drug and no numeric PK parameters (CL, V, half-life) are reported, only planned plasma sampling. |
| popPK | Wallen_2022 | irrelevant | 1 | 0 | This is a retrospective clinical study of sedation/analgesia doses around tracheostomy; methadone is only mentioned as a co-administered drug with no PK parameters reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 03:33 UTC</sub>
