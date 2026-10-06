<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;risperidone&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Risperidone_Kozielska2012_reference&quot;,&quot;label&quot;:&quot;Kozielska_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_risperidone/Risperidone_Kozielska2012_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# risperidone

- **generic name:** risperidone
- **ATC codes:** `N05AX08`
- **DrugBank:** [DB00734](https://go.drugbank.com/drugs/DB00734) · **PubChem:** [CID 5073](https://pubchem.ncbi.nlm.nih.gov/compound/5073)
- **molar mass:** 410.4845 g/mol (C23H27FN4O2) — DrugBank
- **groups:** approved, investigational

## About

Risperidone is an atypical antipsychotic used for schizophrenia and a range of other mental disorders such as bipolar disorder, autism-related irritability, and Tourette syndrome. It is widely used worldwide, is included on the WHO list of essential medicines, and is authorised in the European Union for schizophrenia.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q412443](https://www.wikidata.org/wiki/Q412443) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| risperidone | parent | 410.485 | C23H27FN4O2 | DrugBank | [5073](https://pubchem.ncbi.nlm.nih.gov/compound/5073) | Kozielska_2012, Wang_2024 |
| 9-OH risperidone | metabolite | — (mass units only) | — | — | — | — |
| paliperidone (9-OH-risperidone) | metabolite | 426.492 | C23H27FN4O3 | PubChem | [115237](https://pubchem.ncbi.nlm.nih.gov/compound/115237) | Kozielska_2012, Wang_2024 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 17:16 | 7:37 | 1/6/0 | 7/2/0 | 0/0/0 | 344,764/33,484 | ollama / glm-5.3-flash | 21 | 1/9 | 10/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Kozielska_2012_reference](drugs/drug_risperidone/Risperidone_Kozielska2012_reference.md) | ▶ model + simulator | parent 2-cmt + liver + 1 metabolite (2-cmt) | 15 | Kozielska M et al., Pharmacokinetic-pharmacodynamic modelin…, Pharmaceutical research (2012) | [10.1007/s11095-012-0722-8](https://doi.org/10.1007/s11095-012-0722-8) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Ivaturi_2017_reference](drugs/drug_risperidone/Risperidone_Ivaturi2017_reference.md) | — | parent + metabolite (no model) | 0 | Ivaturi V et al., Exposure-response analysis after subcut…, British journal of clinical… (2017) | [10.1111/bcp.13246](https://doi.org/10.1111/bcp.13246) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Perlstein_2022_reference](drugs/drug_risperidone/Risperidone_Perlstein2022_reference.md) | — | parent + metabolite (no model) | 0 | Perlstein I et al., Population Pharmacokinetic Modeling and…, Clinical pharmacology in dr… (2022) | [10.1002/cpdd.1078](https://doi.org/10.1002/cpdd.1078) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Perlstein_2025_reference](drugs/drug_risperidone/Risperidone_Perlstein2025_reference.md) | — | parent + metabolite (no model) | 0 | Perlstein I et al., Population Pharmacokinetic Modeling of…, Neurology and therapy (2025) | [10.1007/s40120-025-00723-z](https://doi.org/10.1007/s40120-025-00723-z) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Toja-Camba_2021_reference](drugs/drug_risperidone/Risperidone_TojaCamba2021_reference.md) | — | parent + metabolite (no model) | 0 | Toja-Camba FJ et al., Review of Pharmacokinetics and Pharmaco…, Pharmaceutics (2021) | [10.3390/pharmaceutics13070935](https://doi.org/10.3390/pharmaceutics13070935) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Wang_2024_consta](drugs/drug_risperidone/Risperidone_Wang2024_consta.md) | — | parent + metabolite (no model) | 6 | Wang W et al., Population Pharmacokinetic Analysis to…, Neurology and therapy (2024) | [10.1007/s40120-024-00578-w](https://doi.org/10.1007/s40120-024-00578-w) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Wang_2024_rykindo](drugs/drug_risperidone/Risperidone_Wang2024_rykindo.md) | — | parent + metabolite (no model) | 7 (+1 cov.) | Wang W et al., Population Pharmacokinetic Analysis to…, Neurology and therapy (2024) | [10.1007/s40120-024-00578-w](https://doi.org/10.1007/s40120-024-00578-w) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.00).">in vitro</span> | [Alenazi_2024_ATP](drugs/drug_risperidone/pd_Alenazi_2024_ATP.md) | ATP production in isolated monocytes' mitochondria ← risperidone · inhibition effect | — | Alenazi B et al., Risperidone-induced bioenergetic disrup…, Toxicology in vitro : an in… (2024) | [10.1016/j.tiv.2024.105936](https://doi.org/10.1016/j.tiv.2024.105936) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Huang_2024_PANSS](drugs/drug_risperidone/pd_Huang_2024_PANSS.md) | PANSS total scores ← risperidone · direct sigmoid Emax (Hill) effect | — | Huang Z et al., Population Pharmacodynamic Models of Ri…, Pharmaceuticals (Basel, Swi… (2024) | [10.3390/ph17020148](https://doi.org/10.3390/ph17020148) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Huang_2024_PRL](drugs/drug_risperidone/pd_Huang_2024_PRL.md) | prolactin levels ← risperidone · direct Emax (saturable) effect | — | Huang Z et al., Population Pharmacodynamic Models of Ri…, Pharmaceuticals (Basel, Swi… (2024) | [10.3390/ph17020148](https://doi.org/10.3390/ph17020148) |
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> | [Ivaturi_2017_PANSS](drugs/drug_risperidone/pd_Ivaturi_2017_PANSS.md) | PANSS total score ← total active moiety (risperidone + 9-OH-risperidone) · direct Emax (saturable) effect | model (no simulator) | Ivaturi V et al., Exposure-response analysis after subcut…, British journal of clinical… (2017) | [10.1111/bcp.13246](https://doi.org/10.1111/bcp.13246) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Kozielska_2012_5_HT2A_RO](drugs/drug_risperidone/pd_Kozielska_2012_5_HT2A_RO.md) | 5-HT2A receptor occupancy ← risperidone (and paliperidone, competitive binding) · target-mediated drug disposition | — | Kozielska M et al., Pharmacokinetic-pharmacodynamic modelin…, Pharmaceutical research (2012) | [10.1007/s11095-012-0722-8](https://doi.org/10.1007/s11095-012-0722-8) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Kozielska_2012_D2_RO](drugs/drug_risperidone/pd_Kozielska_2012_D2_RO.md) | D2 receptor occupancy ← risperidone (and paliperidone, competitive binding) · target-mediated drug disposition | — | Kozielska M et al., Pharmacokinetic-pharmacodynamic modelin…, Pharmaceutical research (2012) | [10.1007/s11095-012-0722-8](https://doi.org/10.1007/s11095-012-0722-8) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Magyar_2002_APD](drugs/drug_risperidone/pd_Magyar_2002_APD.md) | Action potential duration in guinea-pig papillary muscles ← risperidone · direct Emax (saturable) effect | — | Magyar J et al., Electrophysiological effects of risperi…, Naunyn-Schmiedeberg's archi… (2002) | [10.1007/s00210-002-0595-1](https://doi.org/10.1007/s00210-002-0595-1) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Magyar_2002_APD_2](drugs/drug_risperidone/pd_Magyar_2002_APD_2.md) | Action potential duration in single canine ventricular myocytes ← risperidone · direct Emax (saturable) effect | — | Magyar J et al., Electrophysiological effects of risperi…, Naunyn-Schmiedeberg's archi… (2002) | [10.1007/s00210-002-0595-1](https://doi.org/10.1007/s00210-002-0595-1) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Magyar_2002_IKr](drugs/drug_risperidone/pd_Magyar_2002_IKr.md) | Rapid component of the delayed rectifier K(+) current (IKr) block in canine ventricular myocytes ← risperidone · direct Emax (saturable) effect | — | Magyar J et al., Electrophysiological effects of risperi…, Naunyn-Schmiedeberg's archi… (2002) | [10.1007/s00210-002-0595-1](https://doi.org/10.1007/s00210-002-0595-1) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Olsen_2008_CAR](drugs/drug_risperidone/pd_Olsen_2008_CAR.md) | conditioned avoidance response suppression ← risperidone · inhibition effect | — | Olsen CK et al., Using pharmacokinetic-pharmacodynamic m…, European journal of pharmac… (2008) | [10.1016/j.ejphar.2008.02.005](https://doi.org/10.1016/j.ejphar.2008.02.005) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Pilla_2013_PANSS_G](drugs/drug_risperidone/pd_Pilla_2013_PANSS_G.md) | PANSS general subscale score ← risperidone · direct Emax (saturable) effect | — | Pilla Reddy V et al., Pharmacokinetic-pharmacodynamic modelli…, Schizophrenia research (2013) | [10.1016/j.schres.2013.02.010](https://doi.org/10.1016/j.schres.2013.02.010) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Pilla_2013_PANSS_N](drugs/drug_risperidone/pd_Pilla_2013_PANSS_N.md) | PANSS negative subscale score ← risperidone · direct Emax (saturable) effect | — | Pilla Reddy V et al., Pharmacokinetic-pharmacodynamic modelli…, Schizophrenia research (2013) | [10.1016/j.schres.2013.02.010](https://doi.org/10.1016/j.schres.2013.02.010) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Pilla_2013_PANSS_P](drugs/drug_risperidone/pd_Pilla_2013_PANSS_P.md) | PANSS positive subscale score ← risperidone · direct Emax (saturable) effect | — | Pilla Reddy V et al., Pharmacokinetic-pharmacodynamic modelli…, Schizophrenia research (2013) | [10.1016/j.schres.2013.02.010](https://doi.org/10.1016/j.schres.2013.02.010) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Ivaturi_2017_CGI_S](drugs/drug_risperidone/pd_Ivaturi_2017_CGI_S.md) | CGI-S score (consolidated, 4 categories) ← total active moiety (risperidone + 9-OH-risperidone) · categorical (graded) response model | — | Ivaturi V et al., Exposure-response analysis after subcut…, British journal of clinical… (2017) | [10.1111/bcp.13246](https://doi.org/10.1111/bcp.13246) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Ji_2016_PANSS](drugs/drug_risperidone/pd_Ji_2016_PANSS.md) | Decrease in PANSS score ← risperidone and 9-hydroxy-risperidone (AUCtotal) · delayed effect through transit (transduction) compartments | — | Ji S et al., Population pharmacokinetic-pharmacodyna…, International journal of cl… (2016) | [10.5414/CP202498](https://doi.org/10.5414/CP202498) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Lee_1999_EEG_delta_effect](drugs/drug_risperidone/pd_Lee_1999_EEG_delta_effect.md) | difference in absolute power in the delta frequency band (F3 lead) between risperidone and placebo ← risperidone (or sum of risperidone and 9-hydroxyrisperidone) · direct linear effect | — | Lee DY et al., Pharmacokinetic-pharmacodynamic modelin…, Psychopharmacology (1999) | [10.1007/s002130051003](https://doi.org/10.1007/s002130051003) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=risperidone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| distribution | blood | `ALB` binder, `ORM1` binder | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` inhibitor/substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ADRA1A (target), ADRA1B (target), ADRA2B (target), ADRA2C (target), DRD1 (target), DRD2 (target), HRH1 (target), HTR1A (target), HTR1D (target), HTR2A (target), HTR2C (target), HTR7 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 125 matched, 20 returned
- **screened:** 6  ·  **relevant:** 6
- **records:** 7  ·  extracted 1  ·  needs_review 0  ·  rejected 6  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ji_2016.pdf` | Ji S et al., Population pharmacokinetic-pharmacodyna…, International journal of cl… (2016) | popPK | 10 | [10.5414/CP202498](https://doi.org/10.5414/CP202498) | [27007997](https://pubmed.ncbi.nlm.nih.gov/27007997) | A population PK model of risperidone and its metabolite in Chinese patients is clearly relevant, but the abstract reports no numeric parameter values (CL, V, ka), which likely reside in tables/supplementary material not provided. |
| `Lee_1999.pdf` | Lee DY et al., Pharmacokinetic-pharmacodynamic modelin…, Psychopharmacology (1999) | popPK | 7 | [10.1007/s002130051003](https://doi.org/10.1007/s002130051003) | [10435394](https://pubmed.ncbi.nlm.nih.gov/10435394) | Human PK-PD study of risperidone with effect-compartment modeling, but no numeric PK parameter values appear in the provided evidence (likely in tables/figures not included). |

<sub>queue written 2026-10-06T17:10:19.603524+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alenazi_2024 | irrelevant | 0 | 0 | In-vitro toxicity study of risperidone in isolated monocytes with no PK disposition parameters (CL, V, ka, half-life, or PK model). |
| popPK | Carrascosa-Arteaga_2025 | irrelevant | 2 | 2 | The paper concerns paliperidone/paliperidone palmitate (a different drug), not risperidone as the subject; garbled text shows paliperidone PK parameters only. |
| popPK | Cooper_2023 | irrelevant | 0 | 0 | Risperidone is only a co-ingested agent in a serotonin toxicity study; no PK parameters for risperidone are reported. |
| popPK | Huang_2024 | irrelevant | 2 | 2 | This is a population pharmacodynamic (Emax) model of PANSS scores and prolactin, not a PK model; no CL/V/ka/half-life for risperidone, and plasma risperidone concentrations were not even measured. |
| popPK | Ji_2016 | relevant | 10 | 3 | A population PK model of risperidone and its metabolite in Chinese patients is clearly relevant, but the abstract reports no numeric parameter values (CL, V, ka), which likely reside in tables/supplementary material not provided. |
| popPK | Karatza_2022 | relevant | 8 | 4 | Population PK external evaluation of risperidone/9-OH-risperidone models in pediatric patients, but the actual parameter values (CL, V) live in Supplementary Table 1 and figures not provided; only RMSE/MPE bias metrics appear. |
| popPK | Le_2025 | irrelevant | 0 | 0 | This is an efficacy/response IPD meta-analysis of risperidone in dementia with no PK disposition parameters (no CL, V, ka, half-life, or PK model); no numeric PK values present. |
| popPK | Lee_1999 | relevant | 7 | 3 | Human PK-PD study of risperidone with effect-compartment modeling, but no numeric PK parameter values appear in the provided evidence (likely in tables/figures not included). |
| popPK | Magyar_2002 | irrelevant | 0 | 0 | In-vitro electrophysiology study of cardiac ion channels; no PK disposition parameters for risperidone. |
| popPK | Megens_1994 | irrelevant | 1 | 0 | This is a pharmacodynamics review with receptor binding/ED50 values, not a PK study reporting disposition parameters for risperidone. |
| popPK | Németh_2017 | irrelevant | 0 | 0 | This is a clinical efficacy trial where risperidone is only a comparator; no PK parameters are reported. |
| popPK | Olsen_2008 | irrelevant | 4 | 2 | PK/PD modelling in rats with risperidone as one of several study drugs, but no numeric disposition parameters (CL, V, half-life) are present in the evidence. |
| popPK | Pilla_2013 | irrelevant | 3 | 1 | PKPD modelling of PANSS scores with risperidone as one of several drugs; no quantitative PK disposition parameters (CL, V, ka) for risperidone are reported in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 17:10 UTC</sub>
