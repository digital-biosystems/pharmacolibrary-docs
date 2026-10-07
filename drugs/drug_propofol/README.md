<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N01A&quot;,&quot;href&quot;:&quot;atc/N01A.md&quot;},{&quot;label&quot;:&quot;propofol&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Propofol_Eleveld2018_reference&quot;,&quot;label&quot;:&quot;Eleveld_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_propofol/Propofol_Eleveld2018_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Propofol_Jones1990_reference&quot;,&quot;label&quot;:&quot;Jones_1990_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_propofol/Propofol_Jones1990_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Propofol_de2025_reference&quot;,&quot;label&quot;:&quot;de_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_propofol/Propofol_de2025_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# propofol

- **generic name:** propofol
- **ATC codes:** `N01AX10`
- **DrugBank:** [DB00818](https://go.drugbank.com/drugs/DB00818) · **PubChem:** [CID 4943](https://pubchem.ncbi.nlm.nih.gov/compound/4943)
- **molar mass:** 178.2707 g/mol (C12H18O) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Propofol is an intravenous medication used to induce and maintain general anaesthesia, and also for sedation and to treat status epilepticus. It is widely used in human medicine and is also an approved veterinary medicine; it appears on the WHO list of essential medicines.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q422740](https://www.wikidata.org/wiki/Q422740) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| propofol | parent | 178.271 | C12H18O | DrugBank | [4943](https://pubchem.ncbi.nlm.nih.gov/compound/4943) | Eleveld_2018, Jones_1990, Kim_2023 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 04:29 | 1:49 | 3/1/0 | 5/0/0 | 0/0/0 | 158,451/15,080 | einfracz / qwen3.8-27b | 5 | 2/3 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Eleveld_2018_reference](drugs/drug_propofol/Propofol_Eleveld2018_reference.md) | ▶ model + simulator | 2-compartment, IV | 6 | Eleveld DJ et al., Pharmacokinetic-pharmacodynamic model f…, British journal of anaesthe… (2018) | [10.1016/j.bja.2018.01.018](https://doi.org/10.1016/j.bja.2018.01.018) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Jones_1990_reference](drugs/drug_propofol/Propofol_Jones1990_reference.md) | ▶ model + simulator | 1-compartment, IV | 4 | Jones RD et al., Pharmacokinetics of propofol in children, British journal of anaesthe… (1990) | [10.1093/bja/65.5.661](https://doi.org/10.1093/bja/65.5.661) |
| <span class="pk-badge pk-badge--green">extracted</span> | [de_2025_reference](drugs/drug_propofol/Propofol_de2025_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | de Jong BT et al., Clinical Pharmacokinetics and Pharmacod…, Clinical pharmacokinetics (2025) | [10.1007/s40262-025-01548-7](https://doi.org/10.1007/s40262-025-01548-7) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Kim_2023_reference](drugs/drug_propofol/Propofol_Kim2023_reference.md) | — | 2-compartment (no model) | 6 | Kim KM et al., Population pharmacokinetic and pharmaco…, Journal of pharmacokinetics… (2023) | [10.1007/s10928-022-09836-6](https://doi.org/10.1007/s10928-022-09836-6) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Eleveld_2018_BIS](drugs/drug_propofol/pd_Eleveld_2018_BIS.md) | bispectral index ← propofol · delayed effect through an effect compartment | — | Eleveld DJ et al., Pharmacokinetic-pharmacodynamic model f…, British journal of anaesthe… (2018) | [10.1016/j.bja.2018.01.018](https://doi.org/10.1016/j.bja.2018.01.018) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Kim_2023_BIS](drugs/drug_propofol/pd_Kim_2023_BIS.md) | bispectral index ← propofol · direct sigmoid Emax (Hill) effect | model (no simulator) | Kim KM et al., Population pharmacokinetic and pharmaco…, Journal of pharmacokinetics… (2023) | [10.1007/s10928-022-09836-6](https://doi.org/10.1007/s10928-022-09836-6) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Morales_2025_PSI](drugs/drug_propofol/pd_Morales_2025_PSI.md) | patient state index ← propofol · delayed effect through an effect compartment | — | Morales Castro D et al., Propofol and Fentanyl Pharmacokinetics…, Annals of the American Thor… (2025) | [10.1513/AnnalsATS.202407-795OC](https://doi.org/10.1513/AnnalsATS.202407-795OC) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Rigouzzo_2010_BIS](drugs/drug_propofol/pd_Rigouzzo_2010_BIS.md) | bispectral index ← propofol · delayed effect through an effect compartment | — | Rigouzzo A et al., Pharmacokinetic-pharmacodynamic modelin…, Anesthesiology (2010) | [10.1097/ALN.0b013e3181e4f4ca](https://doi.org/10.1097/ALN.0b013e3181e4f4ca) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Su_2022_HR](drugs/drug_propofol/pd_Su_2022_HR.md) | Heart rate ← propofol · direct Emax (saturable) effect | — | Su H et al., Mechanism-based pharmacodynamic model f…, British journal of anaesthe… (2022) | [10.1016/j.bja.2022.01.022](https://doi.org/10.1016/j.bja.2022.01.022) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Su_2022_HR_2](drugs/drug_propofol/pd_Su_2022_HR_2.md) | Heart rate ← propofol · indirect response — drug inhibits the production of Heart rate | — | Su H et al., Mechanism-based pharmacodynamic model f…, British journal of anaesthe… (2022) | [10.1016/j.bja.2022.01.022](https://doi.org/10.1016/j.bja.2022.01.022) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Su_2022_MAP](drugs/drug_propofol/pd_Su_2022_MAP.md) | Mean arterial pressure ← propofol · direct Emax (saturable) effect | — | Su H et al., Mechanism-based pharmacodynamic model f…, British journal of anaesthe… (2022) | [10.1016/j.bja.2022.01.022](https://doi.org/10.1016/j.bja.2022.01.022) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Su_2022_PP](drugs/drug_propofol/pd_Su_2022_PP.md) | Pulse pressure ← propofol · direct Emax (saturable) effect | — | Su H et al., Mechanism-based pharmacodynamic model f…, British journal of anaesthe… (2022) | [10.1016/j.bja.2022.01.022](https://doi.org/10.1016/j.bja.2022.01.022) |
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> | [Su_2022_SV](drugs/drug_propofol/pd_Su_2022_SV.md) | Stroke volume ← propofol · direct Emax (saturable) effect | model (no simulator) | Su H et al., Mechanism-based pharmacodynamic model f…, British journal of anaesthe… (2022) | [10.1016/j.bja.2022.01.022](https://doi.org/10.1016/j.bja.2022.01.022) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Su_2022_TPR](drugs/drug_propofol/pd_Su_2022_TPR.md) | Total peripheral resistance ← propofol · direct sigmoid Emax (Hill) effect | model (no simulator) | Su H et al., Mechanism-based pharmacodynamic model f…, British journal of anaesthe… (2022) | [10.1016/j.bja.2022.01.022](https://doi.org/10.1016/j.bja.2022.01.022) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=propofol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inducer | DrugBank actor |
| absorption | brain | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | kidney | `ABCB1` inducer | DrugBank actor |
| absorption | liver | `ABCB1` inducer | DrugBank actor |
| absorption | placenta | `ABCB1` inducer | DrugBank actor |
| absorption | small intestine | `ABCB1` inducer | DrugBank actor |
| absorption | testis | `ABCB1` inducer | DrugBank actor |
| distribution | blood | `ALB` unknown | DrugBank actor |
| metabolism | kidney | `UGT1A9` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` inhibitor, `CYP2B6` substrate, `CYP2C19` substrate, `CYP2C8` substrate, `CYP2C9` substrate, `CYP2E1` inhibitor, `UGT1A1` inhibitor/substrate, `UGT1A6` substrate, `UGT1A9` substrate | DrugBank actor |
| metabolism | lung | `CYP1A1` inhibitor, `CYP1B1` inhibitor | DrugBank actor |
| metabolism | skin | `CYP1B1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP1A1` inhibitor, `UGT1A1` inhibitor/substrate, `UGT1A6` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CYP2C18 (substrate), FAAH (substrate), GABRA1 (positive allosteric modulator), GABRB2 (potentiator), GABRB3 (potentiator), SCN2A (inhibitor), SCN4A (inhibitor), UGT1A8 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 731 matched, 20 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 4  ·  extracted 3  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Eleveld_2018.pdf` | Eleveld DJ et al., Pharmacokinetic-pharmacodynamic model f…, British journal of anaesthe… (2018) | popPK | 10 | [10.1016/j.bja.2018.01.018](https://doi.org/10.1016/j.bja.2018.01.018) | [29661412](https://pubmed.ncbi.nlm.nih.gov/29661412) | The abstract explicitly reports quantitative population PK parameters (V1, V2, V3, CL, Q2, Q3) for propofol in a broad human population. |
| `Jones_1990.pdf` | Jones RD et al., Pharmacokinetics of propofol in children, British journal of anaesthe… (1990) | popPK | 10 | [10.1093/bja/65.5.661](https://doi.org/10.1093/bja/65.5.661) | [2248844](https://pubmed.ncbi.nlm.nih.gov/2248844) | The text explicitly reports quantitative PK parameters (clearance, volumes, half-life) for propofol in children. |
| `Kim_2023.pdf` | Kim KM et al., Population pharmacokinetic and pharmaco…, Journal of pharmacokinetics… (2023) | popPK | 10 | [10.1007/s10928-022-09836-6](https://doi.org/10.1007/s10928-022-09836-6) | [36522561](https://pubmed.ncbi.nlm.nih.gov/36522561) | The paper reports a population PK model for propofol in humans with all specific numeric parameter values (V1, V2, V3, Cl, Q1, Q2) explicitly listed in the abstract text. |
| `Morales_2025.pdf` | Morales Castro D et al., Propofol and Fentanyl Pharmacokinetics…, Annals of the American Thor… (2025) | popPK | 10 | [10.1513/AnnalsATS.202407-795OC](https://doi.org/10.1513/AnnalsATS.202407-795OC) | [39383576](https://pubmed.ncbi.nlm.nih.gov/39383576) | The paper describes a population PK/PD study for propofol in humans but the provided evidence text contains only qualitative descriptions of parameter changes (increased clearance, sex differences) without any specific numeric parameter values. |
| `Dahaba_2022.pdf` | Dahaba AA et al., Location matters: Overlooked ethnic-geo…, Fundamental & clinical phar… (2022) | popPK | 7 | [10.1111/fcp.12704](https://doi.org/10.1111/fcp.12704) | [34050969](https://pubmed.ncbi.nlm.nih.gov/34050969) | The study is a population pharmacokinetic analysis of propofol in humans, but the specific numeric parameter values (clearance, volume) are not provided in the text, only qualitative covariate findings and pharmacodynamic concentration differences. |

<sub>queue written 2026-10-07T04:27:53.051235+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bidkar_2024 | irrelevant | 2 | 0 | This is a review article discussing TCI technology that cites existing PK models (Marsh, Schnider, etc.) without reporting original quantitative parameter values in the provided text. |
| popPK | Dahaba_2020 | irrelevant | 3 | 2 | The study reports PK/PD covariate analysis and specific PD parameters (Ke0, IC50, Emax) rather than classic disposition parameters (CL, V, Q, ka), and while PK data was collected, specific numeric PK values are not listed in the provided text. |
| popPK | Dahaba_2022 | relevant | 7 | 0 | The study is a population pharmacokinetic analysis of propofol in humans, but the specific numeric parameter values (clearance, volume) are not provided in the text, only qualitative covariate findings and pharmacodynamic concentration differences. |
| popPK | De_2005 | irrelevant | 2 | 0 | The text is a narrative review of propofol's clinical utility and safety that mentions the existence of a 3-compartment model but provides no specific quantitative pharmacokinetic parameter values (e.g., CL, V, Q). |
| popPK | Introna_2026 | irrelevant | 0 | 0 | This is an editorial discussing the transparency of PK/PD model implementation in software, containing no original pharmacokinetic data or numeric parameter values for propofol. |
| popPK | Mazoit_2006 | irrelevant | 1 | 0 | The text is a review discussing the general pharmacokinetic characteristics of anesthetics in children and does not report specific quantitative disposition parameter values (e.g., CL, V) for propofol. |
| popPK | Morales_2025 | relevant | 10 | 0 | The paper describes a population PK/PD study for propofol in humans but the provided evidence text contains only qualitative descriptions of parameter changes (increased clearance, sex differences) without any specific numeric parameter values. |
| popPK | Morse_2022 | irrelevant | 0 | 0 | The paper discusses propofol decrement times (time to concentration reduction) and mentions clearance qualitatively, but it does not report quantitative pharmacokinetic parameters (CL, V, Q, ka) or a population-PK model for propofol; it focuses on effect-compartment dynamics and context-sensitive half-times. |
| popPK | Rigouzzo_2010 | irrelevant | 2 | 5 | The study evaluates existing PK models (Schnider, Kataria, etc.) to derive pharmacodynamic parameters (kE0, Ce50) but does not report new population pharmacokinetic parameter estimates (CL, V, Q) for propofol itself. |
| popPK | Sepúlveda_2019 | irrelevant | 2 | 0 | The paper is a review discussing the validity of effect-site models (ke0, Emax) and EEG indices rather than reporting original quantitative pharmacokinetic disposition parameters (CL, V, Q) for propofol. |
| popPK | Sharpee_2016 | irrelevant | 0 | 0 | The paper is a conference program for Computational Neuroscience and does not report pharmacokinetic parameters for propofol. |
| popPK | Su_2022 | irrelevant | 1 | 0 | The study models the pharmacodynamics (haemodynamic effects) of propofol, using a pre-existing pharmacokinetic model (Schnider/Eleveld) for simulation, but does not estimate or report original quantitative pharmacokinetic parameter values (CL, V, etc.) for propofol. |
| popPK | Vellinga_2021 | relevant | 8 | 2 | The study validates a population PK model for propofol and reports predictive performance metrics (bias, precision) for the model's clearance and volume predictions, but does not list the specific numeric PK parameter values (e.g., CL/F, V1) directly in the text provided. |
| popPK | de_2025 | irrelevant | 0 | 0 | The paper is a review of the pharmacokinetics of remimazolam, not propofol; propofol is mentioned only as a comparator agent. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 04:27 UTC</sub>
