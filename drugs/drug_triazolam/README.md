<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05C&quot;,&quot;href&quot;:&quot;atc/N05C.md&quot;},{&quot;label&quot;:&quot;triazolam&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Triazolam_Cha2024_reference&quot;,&quot;label&quot;:&quot;Cha_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_triazolam/Triazolam_Cha2024_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Triazolam_van2011_reference&quot;,&quot;label&quot;:&quot;van_2011_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_triazolam/Triazolam_van2011_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# triazolam

- **generic name:** triazolam
- **ATC codes:** `N05CD05`
- **DrugBank:** [DB00897](https://go.drugbank.com/drugs/DB00897) · **PubChem:** [CID 5556](https://pubchem.ncbi.nlm.nih.gov/compound/5556)
- **molar mass:** 343.21 g/mol (C17H12Cl2N4) — DrugBank
- **groups:** approved, investigational

## About

Triazolam is a benzodiazepine sedative used to treat insomnia and other sleep-wake disorders. It remains an approved medicine, though it carries a boxed warning, indicating its use is approached with caution.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q412143](https://www.wikidata.org/wiki/Q412143) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| triazolam | parent | 343.21 | C17H12Cl2N4 | DrugBank | [5556](https://pubchem.ncbi.nlm.nih.gov/compound/5556) | Gaudreault_1996, Karl_1997, Okada_2024 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:05 | 20:47 | 2/2/1 | 8/1/2 | 0/0/0 | 876,552/38,773 | ollama / glm-5.3-flash | 21 | 0/20 | 20/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Cha_2024_reference](drugs/drug_triazolam/Triazolam_Cha2024_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 | Cha HJ et al., Development of a Web Application for Si…, Pharmaceutics (2024) | [10.3390/pharmaceutics16050689](https://doi.org/10.3390/pharmaceutics16050689) |
| <span class="pk-badge pk-badge--green">extracted</span> | [van_2011_reference](drugs/drug_triazolam/Triazolam_van2011_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 | van Erp NP et al., Marginal increase of sunitinib exposure…, Cancer chemotherapy and pha… (2011) | [10.1007/s00280-010-1367-0](https://doi.org/10.1007/s00280-010-1367-0) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Gaudreault_1996_reference](drugs/drug_triazolam/Triazolam_Gaudreault1996_reference.md) | — | 1-compartment (no model) | 5 | Gaudreault J et al., Anticonvulsant pharmacodynamics and dis…, Journal of pharmaceutical s… (1996) | [10.1021/js9503183](https://doi.org/10.1021/js9503183) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Karl_1997_reference](drugs/drug_triazolam/Triazolam_Karl1997_reference.md) | — | 1-compartment (no model) | 3 | Karl HW et al., Pharmacokinetics of oral triazolam in c…, Journal of clinical psychop… (1997) | [10.1097/00004714-199706000-00005](https://doi.org/10.1097/00004714-199706000-00005) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Okada_2024_reference](drugs/drug_triazolam/Triazolam_Okada2024_reference.md) | — | 1-compartment (no model) | 3 (+2 cov.) | Okada A et al., Appropriate use of triazolam in elderly…, BMC pharmacology & toxicolo… (2024) | [10.1186/s40360-024-00777-z](https://doi.org/10.1186/s40360-024-00777-z) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Baburin_2008_EC50_BZD](drugs/drug_triazolam/pd_Baburin_2008_EC50_BZD.md) | BZD-induced shift of the GABA concentration–response curve (ΔEC50(BZD)) versus GABA EC50 ← triazolam · direct linear effect | — | Baburin I et al., Estimating the efficiency of benzodiaze…, British journal of pharmaco… (2008) | [10.1038/bjp.2008.271](https://doi.org/10.1038/bjp.2008.271) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Chiba_2011_PAH_uptake](drugs/drug_triazolam/pd_Chiba_2011_PAH_uptake.md) | para-aminohippuric acid (PAH) uptake by hOAT1 ← triazolam · inhibition effect | — | Chiba S et al., Interactions of human organic anion tra…, Legal medicine (Tokyo, Japa… (2011) | [10.1016/j.legalmed.2011.04.001](https://doi.org/10.1016/j.legalmed.2011.04.001) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Chiba_2013_TEA_uptake](drugs/drug_triazolam/pd_Chiba_2013_TEA_uptake.md) | (14)C-TEA uptake by S2-hOCT2 cells ← triazolam · inhibition effect | — | Chiba S et al., Human organic cation transporter 2 (hOC…, Toxicology (2013) | [10.1016/j.tox.2013.06.001](https://doi.org/10.1016/j.tox.2013.06.001) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Gaudreault_1996_ratio_of_post_TZ_to_pre_TZ_threshold_convulsant_doses_of_pentylenetetrazol](drugs/drug_triazolam/pd_Gaudreault_1996_ratio_of_post_TZ_to_pre_TZ_threshold_convuls.md) | ratio of post-TZ to pre-TZ threshold convulsant doses of pentylenetetrazol ← triazolam · direct Emax (saturable) effect | — | Gaudreault J et al., Anticonvulsant pharmacodynamics and dis…, Journal of pharmaceutical s… (1996) | [10.1021/js9503183](https://doi.org/10.1021/js9503183) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Gupta_1990_DSST](drugs/drug_triazolam/pd_Gupta_1990_DSST.md) | digit symbol substitution test ← triazolam · direct sigmoid Emax (Hill) effect | — | Gupta SK et al., Simultaneous modeling of the pharmacoki…, Pharmaceutical research (1990) | [10.1023/a:1015805908792](https://doi.org/10.1023/a:1015805908792) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Gupta_1990_body_sway](drugs/drug_triazolam/pd_Gupta_1990_body_sway.md) | body sway ← triazolam · direct sigmoid Emax (Hill) effect | — | Gupta SK et al., Simultaneous modeling of the pharmacoki…, Pharmaceutical research (1990) | [10.1023/a:1015805908792](https://doi.org/10.1023/a:1015805908792) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Gupta_1990_subcritical_tracking_computerized_tracking_test](drugs/drug_triazolam/pd_Gupta_1990_subcritical_tracking_computerized_tracking_test.md) | subcritical tracking (computerized tracking test) ← triazolam · direct sigmoid Emax (Hill) effect | — | Gupta SK et al., Simultaneous modeling of the pharmacoki…, Pharmaceutical research (1990) | [10.1023/a:1015805908792](https://doi.org/10.1023/a:1015805908792) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.00).">in vitro</span> | [Kozlowski_1988_MeTRH_binding](drugs/drug_triazolam/pd_Kozlowski_1988_MeTRH_binding.md) | Inhibition of 3H-3-methyl-His-2-TRH (MeTRH) binding to TRH receptors ← triazolam · direct sigmoid Emax (Hill) effect | — | Kozlowski MR, Inhibition of the binding and the behav…, Pharmacology, biochemistry,… (1988) | [10.1016/0091-3057(88)90426-1](https://doi.org/10.1016/0091-3057(88)90426-1) |
| <span class="pk-badge pk-badge--green">extracted</span> | [McAuley_1995_CPT](drugs/drug_triazolam/pd_McAuley_1995_CPT.md) | continuous performance test ← triazolam · direct sigmoid Emax (Hill) effect | — | McAuley JW et al., Orally administered progesterone enhanc…, Journal of clinical psychop… (1995) | [10.1097/00004714-199502000-00002](https://doi.org/10.1097/00004714-199502000-00002) |
| <span class="pk-badge pk-badge--green">extracted</span> | [McAuley_1995_DSST](drugs/drug_triazolam/pd_McAuley_1995_DSST.md) | DSST (digit symbol substitution test) psychomotor performance ← triazolam · direct sigmoid Emax (Hill) effect | — | McAuley JW et al., Orally administered progesterone enhanc…, Journal of clinical psychop… (1995) | [10.1097/00004714-199502000-00002](https://doi.org/10.1097/00004714-199502000-00002) |
| <span class="pk-badge pk-badge--green">extracted</span> | [McAuley_1995_hand_eye_coordination](drugs/drug_triazolam/pd_McAuley_1995_hand_eye_coordination.md) | hand-eye coordination ← triazolam · direct sigmoid Emax (Hill) effect | — | McAuley JW et al., Orally administered progesterone enhanc…, Journal of clinical psychop… (1995) | [10.1097/00004714-199502000-00002](https://doi.org/10.1097/00004714-199502000-00002) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Smith_1987_memory_and_psychomotor_performance_effects](drugs/drug_triazolam/pd_Smith_1987_memory_and_psychomotor_performance_effects.md) | memory and psychomotor performance effects ← triazolam · direct Emax (saturable) effect | — | Smith RB et al., Pharmacodynamics of triazolam after int…, Journal of clinical pharmac… (1987) | [10.1002/j.1552-4604.1987.tb05599.x](https://doi.org/10.1002/j.1552-4604.1987.tb05599.x) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Derry_1995_recognition](drugs/drug_triazolam/pd_Derry_1995_recognition.md) | recognition ← triazolam (free) · categorical (graded) response model | — | Derry CL et al., Pharmacokinetics and pharmacodynamics o…, Journal of clinical psychop… (1995) | [10.1097/00004714-199506000-00008](https://doi.org/10.1097/00004714-199506000-00008) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Lloyd_1990_35S_TBPS_binding](drugs/drug_triazolam/pd_Lloyd_1990_35S_TBPS_binding.md) | 35S-TBPS binding to rat cerebral cortex membranes ← triazolam · direct Emax (saturable) effect | model (no simulator) | Lloyd GK et al., The activity of zolpidem and other hypn…, The Journal of pharmacology… (1990) | — |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Okada_2024_Cognitive_function](drugs/drug_triazolam/pd_Okada_2024_Cognitive_function.md) | Cognitive function ← triazolam · delayed effect through an effect compartment | model (no simulator) | Okada A et al., Appropriate use of triazolam in elderly…, BMC pharmacology & toxicolo… (2024) | [10.1186/s40360-024-00777-z](https://doi.org/10.1186/s40360-024-00777-z) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Okada_2024_Sedation](drugs/drug_triazolam/pd_Okada_2024_Sedation.md) | Sedation ← triazolam · delayed effect through an effect compartment | model (no simulator) | Okada A et al., Appropriate use of triazolam in elderly…, BMC pharmacology & toxicolo… (2024) | [10.1186/s40360-024-00777-z](https://doi.org/10.1186/s40360-024-00777-z) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Smith_1987_probability_of_a_subject_being_asleep](drugs/drug_triazolam/pd_Smith_1987_probability_of_a_subject_being_asleep.md) | probability of a subject being asleep ← triazolam · categorical (graded) response model | — | Smith RB et al., Pharmacodynamics of triazolam after int…, Journal of clinical pharmac… (1987) | [10.1002/j.1552-4604.1987.tb05599.x](https://doi.org/10.1002/j.1552-4604.1987.tb05599.x) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Derry_1995_psychomotor_impairment](drugs/drug_triazolam/pd_Derry_1995_psychomotor_impairment.md) | psychomotor impairment ← triazolam (free) · direct sigmoid Emax (Hill) effect | — | Derry CL et al., Pharmacokinetics and pharmacodynamics o…, Journal of clinical psychop… (1995) | [10.1097/00004714-199506000-00008](https://doi.org/10.1097/00004714-199506000-00008) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Derry_1995_sedation](drugs/drug_triazolam/pd_Derry_1995_sedation.md) | sedation ← triazolam (free) · direct sigmoid Emax (Hill) effect | — | Derry CL et al., Pharmacokinetics and pharmacodynamics o…, Journal of clinical psychop… (1995) | [10.1097/00004714-199506000-00008](https://doi.org/10.1097/00004714-199506000-00008) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=triazolam) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP2C8` inhibitor, `CYP3A4` substrate, `CYP3A5` substrate, `CYP3A7` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: GABRA1 (positive allosteric modulator), GABRA1 (target), TSPO (modulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 408 matched, 147 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 5  ·  extracted 2  ·  needs_review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gaudreault_1996.pdf` | Gaudreault J et al., Anticonvulsant pharmacodynamics and dis…, Journal of pharmaceutical s… (1996) | popPK | 10 | [10.1021/js9503183](https://doi.org/10.1021/js9503183) | [8877893](https://pubmed.ncbi.nlm.nih.gov/8877893) | Population/compartmental PK parameters (CL, Vss, two-compartment model) for triazolam are reported numerically in the abstract. |
| `Smith_1987.pdf` | Smith RB et al., Pharmacodynamics of triazolam after int…, Journal of clinical pharmac… (1987) | popPK | 8 | [10.1002/j.1552-4604.1987.tb05599.x](https://doi.org/10.1002/j.1552-4604.1987.tb05599.x) | [3437069](https://pubmed.ncbi.nlm.nih.gov/3437069) | Human IV triazolam PK with two-compartment model and CL/V/half-life reported, but the evidence gives only ranges (extraction ratio 0.14–0.37) without full numeric parameter values. |
| `Baneyx_2014.pdf` | Baneyx G et al., Physiologically based pharmacokinetic m…, European journal of pharmac… (2014) | popPK | 7 | [10.1016/j.ejps.2014.02.002](https://doi.org/10.1016/j.ejps.2014.02.002) | [24530864](https://pubmed.ncbi.nlm.nih.gov/24530864) | PBPK model verified for triazolam as CYP3A4 substrate with clinical plasma data, but numeric triazolam parameter values are not shown in the provided evidence (likely in figures/supplementary material). |
| `Karl_1997.pdf` | Karl HW et al., Pharmacokinetics of oral triazolam in c…, Journal of clinical psychop… (1997) | popPK | 7 | [10.1097/00004714-199706000-00005](https://doi.org/10.1097/00004714-199706000-00005) | [9169960](https://pubmed.ncbi.nlm.nih.gov/9169960) | Reports triazolam PK in children with numeric half-life, Cmax, and tmax, but no CL or V values are given. |
| `Raybon_2011.pdf` | Raybon JJ et al., Pharmacokinetic-pharmacodynamic modelin…, The Journal of pharmacology… (2011) | popPK | 7 | [10.1124/jpet.110.176677](https://doi.org/10.1124/jpet.110.176677) | [21205914](https://pubmed.ncbi.nlm.nih.gov/21205914) | PK-PD model includes triazolam PK in humanized mice, but only AUC ratio is given; parameter values likely in figures/supplementary not provided. |
| `Derry_1995.pdf` | Derry CL et al., Pharmacokinetics and pharmacodynamics o…, Journal of clinical psychop… (1995) | popPK | 5 | [10.1097/00004714-199506000-00008](https://doi.org/10.1097/00004714-199506000-00008) | [7635997](https://pubmed.ncbi.nlm.nih.gov/7635997) | Human IV triazolam PK study reporting half-life values, but no CL/V or full compartmental parameters in the evidence. |

<sub>queue written 2026-10-06T22:55:47.712481+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Arayne_2005 | not_relevant | 3 | 2 | Grapefruit juice (CYP3A4 inhibition) interaction with triazolam is mentioned but no gene variant/genotype effect on a PK/PD parameter is reported. |
| popPK | Baburin_2008 | irrelevant | 0 | 0 | In-vitro electrophysiology study of triazolam's GABAA receptor modulation in Xenopus oocytes; no pharmacokinetic disposition parameters (CL, V, ka, half-life) are reported. |
| PGx | Bailey_1998 | not_relevant | 3 | 2 | Triazolam-grapefruit juice interaction mentioned only as a prediction; no gene variant effect on triazolam PK/PD parameters reported. |
| popPK | Baneyx_2014 | relevant | 7 | 3 | PBPK model verified for triazolam as CYP3A4 substrate with clinical plasma data, but numeric triazolam parameter values are not shown in the provided evidence (likely in figures/supplementary material). |
| PGx | Baneyx_2014 | not_relevant | 0 | 0 | Paper describes CYP3A4 induction by rifampicin (DDI/PBPK modeling), not a gene variant/genotype/phenotype effect on triazolam PK/PD. |
| popPK | Berteina-Raboin_2025 | irrelevant | 0 | 0 | This is a review of fruit juice drug interactions (CYP3A4/OATP/P-gp) with no triazolam PK parameters or numeric disposition values for triazolam. |
| popPK | Brill_2014 | irrelevant | 0 | 0 | This is a population-PK study of midazolam, not triazolam; triazolam is only mentioned as a CYP3A substrate comparator, and no triazolam parameter values appear. |
| popPK | Brill_2016 | irrelevant | 0 | 0 | The study models midazolam and 1-OH-midazolam PK; triazolam is only mentioned as one of several CYP3A substrates in a SimCYP simulation, with no triazolam parameter values reported. |
| popPK | Cha_2024 | irrelevant | 0 | 0 | This is a population PK study of zolpidem, not triazolam; triazolam is only mentioned as a comparator benzodiazepine class example. |
| popPK | Chetty_2012 | irrelevant | 4 | 2 | Simulation-based study using Simcyp/IVIVE; triazolam is a test substrate but no actual numeric disposition parameters for triazolam appear in the evidence, only sample-size/power results. |
| PGx | Chetty_2012 | not_relevant | 2 | 3 | Sex-based clearance differences simulated, not gene variant/genotype effects on triazolam PK. |
| popPK | Chou_2025 | irrelevant | 0 | 0 | This is a PBPK review of other drugs (ruxolitinib, phytochemicals) with no triazolam-specific PK parameters reported. |
| popPK | Collins_2025 | irrelevant | 0 | 0 | Triazolam appears only as the LC–MS/MS internal standard; the population PK model and all parameters (CL, Vc, Vp, Q, ka) are for midazolam, not triazolam. |
| popPK | Costall_1987 | irrelevant | 0 | 0 | Behavioral anxiety model in mice; triazolam is only a test drug with doses, no PK parameters. |
| popPK | Cvetkovic_2003 | irrelevant | 0 | 0 | This is a review of lopinavir/ritonavir; triazolam is only mentioned as a contraindicated interacting drug, with no PK parameters for triazolam. |
| PGx | Cvetkovic_2003 | not_relevant | 0 | 0 | Review of lopinavir/ritonavir mentions triazolam only as a contraindicated CYP3A drug interaction; no gene variant/genotype effect on triazolam PK/PD reported. |
| PGx | Darwish_2008 | not_relevant | 0 | 0 | Triazolam is only mentioned as a CYP3A4 substrate example; no gene variant/genotype effect on its PK/PD is reported. |
| PGx | Deb_2014 | not_relevant | 0 | 0 | Study examines abiraterone inhibition of CYP3A4 metabolism in vitro; no gene variant/genotype effect on triazolam PK/PD reported. |
| popPK | Derry_1995 | relevant | 5 | 3 | Human IV triazolam PK study reporting half-life values, but no CL/V or full compartmental parameters in the evidence. |
| popPK | Dresser_2000 | irrelevant | 2 | 0 | Review article on CYP3A4 inhibition mentioning triazolam only as an example; no original PK parameter values are reported. |
| PGx | Dresser_2000 | not_relevant | 2 | 2 | Review of CYP3A4 inhibitor drug interactions; no gene variant/genotype effect on triazolam PK/PD parameters reported. |
| PGx | Ellingrod_1995 | not_relevant | 0 | 0 | Mentions only a drug-drug interaction (nefazodone inhibiting CYP3A4 raising triazolam levels), no gene variant/genotype effect on PK/PD. |
| popPK | Emoto_2019 | irrelevant | 0 | 0 | The paper is a PBPK model of tacrolimus, not triazolam; no triazolam parameters are reported. |
| PGx | Flanagan_2005 | not_relevant | 2 | 3 | Discusses grapefruit-CYP3A4 inhibition affecting triazolam bioavailability, but no gene variant/genotype effect or quantitative PK parameter reported. |
| popPK | Forster_2001 | irrelevant | 0 | 0 | In-vitro electrophysiology of GABA(A) receptors; triazolam is only a pharmacological agent, no PK parameters. |
| PGx | Fuhr_1998 | not_relevant | 0 | 0 | Grapefruit juice (drug-food interaction) affects triazolam PK, not a gene variant/genotype/phenotype effect. |
| popPK | Gaudreault_1995 | irrelevant | 0 | 0 | The PK parameters reported are for CL 284,846, not triazolam, which is only a comparator in the anticonvulsant test. |
| PGx | Greene_1997 | not_relevant | 2 | 3 | Reports a drug-drug interaction (nefazodone inhibiting CYP3A4 affecting triazolam), not a gene variant/genotype effect on triazolam PK/PD. |
| popPK | Gupta_1990 | irrelevant | 4 | 3 | PK-PD study in humans but reports only effect-compartment parameters (t½keo ~6 min, EC50 ~5 ng/ml), not disposition parameters (CL, V, ka) for triazolam. |
| PGx | Hesse_2003 | not_relevant | 2 | 1 | Review of drug interactions with zopiclone/zolpidem/zaleplon; no gene variant effect on triazolam PK/PD parameters reported. |
| PGx | Hohmann_2016 | not_relevant | 3 | 1 | Review abstract only mentions triazolam as a CYP3A phenotyping probe; no genotype/phenotype effect on triazolam PK/PD parameters reported. |
| popPK | Jang_2025 | irrelevant | 1 | 2 | This is an in vitro enzyme-inhibition methodology study (triazolam-ketoconazole CYP3A4 inhibition constants), not a PK study reporting disposition parameters for triazolam. |
| popPK | Karaźniewicz-Łada_2021 | irrelevant | 0 | 0 | Review of antiepileptic drug interactions; triazolam is not the subject drug and no triazolam PK parameters appear. |
| PGx | Kenworthy_1999 | not_relevant | 0 | 0 | In vitro CYP3A4 inhibition study with no gene variant/genotype/phenotype effects on triazolam PK/PD parameters. |
| PGx | Kim_2008 | not_relevant | 3 | 3 | Effect is drug-induced CYP3A induction by rifampicin, not a gene variant/genotype altering triazolam PK. |
| PGx | Kobayashi_1998 | not_relevant | 2 | 3 | In vitro enzyme identification study; no gene variant/genotype effect on triazolam PK/PD reported. |
| popPK | Kozlowski_1988 | irrelevant | 0 | 0 | In vitro receptor-binding/behavioral study with no pharmacokinetic disposition parameters for triazolam. |
| popPK | Kroboth_1997 | irrelevant | 4 | 2 | Triazolam is the challenge drug in an interaction study, but only EC50 changes are reported; no PK disposition parameters (CL, V, t½) values appear in the evidence. |
| popPK | Kudo_2016 | irrelevant | 2 | 3 | In-vitro HLM enzyme kinetics (Km, Vmax, CLint) for triazolam as a marker substrate, not a PK disposition study; some numeric CLint ratios but no disposition parameters. |
| PGx | Lin_2024 | not_relevant | 0 | 0 | The paper reports piperine–triazolam food–drug interaction via CYP3A4 inhibition, not any gene variant/genotype/phenotype effect on triazolam PK/PD. |
| popPK | Lloyd_1990 | irrelevant | 0 | 0 | In-vitro receptor binding study with no pharmacokinetic disposition parameters for triazolam. |
| PGx | Luurila_1994 | not_relevant | 0 | 0 | Drug-drug interaction study (erythromycin-temazepam) with no gene variant/genotype/phenotype effect reported. |
| popPK | McAuley_1995 | irrelevant | 3 | 2 | This is a pharmacodynamic interaction study; triazolam PK parameters (CL, V, half-life) are not reported, only AUC comparisons and EC50 values. |
| PGx | McAuley_1995 | not_relevant | 0 | 0 | Reports a progesterone–triazolam drug–hormone interaction on PD parameters, with no gene variant/genotype/phenotype involved. |
| PGx | Naidoo_2019 | not_relevant | 2 | 1 | Reports sex differences in DDI studies, not gene variant/genotype effects on triazolam PK/PD parameters. |
| PGx | Neuvonen_2012 | not_relevant | 2 | 1 | Triazolam effects are from CYP3A4 inhibitors/inducers (drug interactions), not gene variants; no pharmacogenomic PK/PD data reported. |
| PGx | Niemi_2003 | not_relevant | 0 | 0 | Paper describes rifampicin drug-drug interactions, not gene variant effects on triazolam PK/PD. |
| PGx | Otani_2003 | not_relevant | 2 | 3 | Discusses CYP3A4 metabolism of triazolam and drug interactions, but no gene variant/genotype effect on PK/PD parameters is reported. |
| PGx | Ozdemir_1998 | not_relevant | 0 | 0 | Grapefruit juice (environmental CYP3A inhibition), not a gene variant/genotype/phenotype, alters diazepam PK; triazolam only mentioned in background. |
| PGx | Palermo_2016 | not_relevant | 0 | 0 | In vitro drug-drug inhibition study of glucuronidation; no gene variant/genotype effect on triazolam PK/PD reported. |
| PGx | Pea_2001 | not_relevant | 0 | 0 | Paper discusses drug–drug interactions with anti-infectives affecting triazolam clearance, not gene variant/genotype effects on PK/PD parameters. |
| PGx | Perloff_2003 | not_relevant | 0 | 0 | In vitro P-gp/CYP3A4 inhibition screening; no gene variant/genotype effect on triazolam PK/PD reported. |
| popPK | Perucca_2008 | irrelevant | 2 | 1 | Triazolam is only a CYP3A4 probe substrate in a rufinamide interaction study; no triazolam PK parameter values are reported. |
| PGx | Perucca_2008 | not_relevant | 0 | 0 | No gene variant/genotype/phenotype effects on triazolam or rufinamide PK/PD are reported; only drug-drug interactions and covariates like body size. |
| popPK | Radukic_2026 | irrelevant | 0 | 0 | Neurobiology study of alprazolam withdrawal in rats; no triazolam PK parameters reported. |
| popPK | Raybon_2011 | relevant | 7 | 3 | PK-PD model includes triazolam PK in humanized mice, but only AUC ratio is given; parameter values likely in figures/supplementary not provided. |
| popPK | Robarge_2017 | irrelevant | 0 | 0 | This is a population PK study of efavirenz, not triazolam; no triazolam parameters are reported. |
| popPK | Robertson_1987 | irrelevant | 0 | 0 | Triazolam is only used as a PAF-antagonism comparator in an in vitro pharmacology study; no PK parameters are reported. |
| PGx | Robertson_2003 | not_relevant | 0 | 0 | Paper describes modafinil PK and drug-drug interactions (CYP3A4 induction affecting triazolam), but no gene variant/genotype/phenotype effects on PK/PD parameters. |
| popPK | Salahudeen_2015 | irrelevant | 0 | 0 | This is a pharmacoepidemiologic study of anticholinergic adverse events in older people; triazolam is not studied and no PK parameters appear. |
| popPK | Salari_1992 | irrelevant | 0 | 0 | Triazolam is only mentioned as a PAF antagonist in an in vitro platelet/cell study; no PK parameters reported. |
| popPK | Scharf_1993 | irrelevant | 0 | 0 | Clinical efficacy study of hypnotic effect only; no PK parameters reported. |
| popPK | Schrag_2000 | irrelevant | 2 | 4 | In-vitro CYP3A4 enzymology study; only Km/Vmax for triazolam 4-hydroxylation, no disposition PK parameters. |
| PGx | Schrag_2001 | not_relevant | 0 | 0 | In vitro CYP3A4 enzyme kinetics of triazolam metabolism; no gene variant/genotype/phenotype effect on PK/PD parameters reported. |
| popPK | Schärfe_2017 | irrelevant | 0 | 0 | This is a pharmacogenomic survey of genetic variation in drug-related genes; no triazolam PK parameters are reported, and any drug-specific values would live in supplementary tables not provided. |
| PGx | Selvakumar_2014 | not_relevant | 2 | 3 | Reports Km values for triazolam metabolism by monkey vs human CYP3A4 enzymes in vitro, not a gene variant/genotype effect on PK/PD in subjects. |
| PGx | Shader_1999 | not_relevant | 0 | 0 | Reports drug-drug inhibition (zafirlukast on CYP3A) in vitro, not a gene variant/genotype effect on triazolam PK/PD. |
| popPK | Shore_2019 | irrelevant | 0 | 0 | This is a population PK study of darolutamide, not triazolam; no triazolam parameters appear anywhere in the evidence. |
| popPK | Smith_1987 | relevant | 8 | 3 | Human IV triazolam PK with two-compartment model and CL/V/half-life reported, but the evidence gives only ranges (extraction ratio 0.14–0.37) without full numeric parameter values. |
| popPK | Suhara_1994 | irrelevant | 1 | 1 | PET receptor-binding study; triazolam is a diagnostic challenge drug, no PK disposition parameters reported. |
| PGx | Vanakoski_1996 | not_relevant | 0 | 0 | Grapefruit juice/erythromycin interaction study with no gene variant, genotype, or phenotype reported. |
| PGx | Varhe_1994 | not_relevant | 2 | 5 | Drug-drug interaction (CYP3A4 inhibition by ketoconazole/itraconazole), not a gene variant/genotype/phenotype effect on triazolam PK/PD. |
| PGx | Venkatakrishnan_2000 | not_relevant | 2 | 3 | Interactions described are drug-drug (azole inhibition of CYP3A4 affecting triazolam), not pharmacogenomic variant/genotype effects on PK/PD parameters. |
| PGx | Villikka_1997 | not_relevant | 0 | 0 | Drug-drug interaction (rifampin-zolpidem), no gene variant/genotype/phenotype effect reported. |
| PGx | Villikka_1998 | not_relevant | 0 | 0 | Drug-drug interaction (dexamethasone) study with no gene variant/genotype/phenotype effect on triazolam PK/PD. |
| popPK | Wu_2016 | irrelevant | 0 | 0 | The paper reports PK of GSK2647544 and simvastatin, not triazolam; no triazolam parameters appear. |
| popPK | Yamashita_2013 | irrelevant | 0 | 0 | This is a rifampicin/CYP3A4 induction DDI modeling study; triazolam is not mentioned and no triazolam PK parameters appear. |
| popPK | Yang_2025 | irrelevant | 0 | 0 | This is a review of PBPK/QSP/AI modeling across the lifespan; triazolam is not the subject drug and no triazolam PK parameters appear. |
| popPK | van_2011 | irrelevant | 0 | 0 | The study models sunitinib (with midazolam as a CYP3A4 probe); triazolam is not the subject drug and no triazolam parameters appear. |
| PGx | von_1995 | not_relevant | 0 | 0 | Review of macrolide drug interactions; no gene variant/genotype effect on triazolam PK/PD reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 22:55 UTC</sub>
