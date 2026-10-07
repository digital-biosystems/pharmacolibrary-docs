<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;fluoxetine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fluoxetine_Burlot2026_reference&quot;,&quot;label&quot;:&quot;Burlot_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fluoxetine/Fluoxetine_Burlot2026_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# fluoxetine

- **generic name:** fluoxetine
- **ATC codes:** `N06AB03`, `N06CA03`
- **DrugBank:** [DB00472](https://go.drugbank.com/drugs/DB00472) · **PubChem:** [CID 3386](https://pubchem.ncbi.nlm.nih.gov/compound/3386)
- **molar mass:** 309.3261 g/mol (C17H18F3NO) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Fluoxetine is a selective serotonin reuptake inhibitor antidepressant used for conditions such as depression and mood disorders, anxiety and panic disorders, obsessive-compulsive disorder, post-traumatic stress disorder, and bulimia nervosa. It is widely used in human medicine and is also an approved veterinary drug; it appears on the WHO list of essential medicines.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q422244](https://www.wikidata.org/wiki/Q422244) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| norfluoxetine | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:04 | 3:17 | 1/2/0 | 4/0/0 | 0/0/0 | 196,414/11,417 | ollama / glm-5.3-flash | 18 | 1/6 | 7/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Burlot_2026_reference](drugs/drug_fluoxetine/Fluoxetine_Burlot2026_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Burlot C et al., PK and PK/PD Modeling of Bcl2 Inhibitor…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70288](https://doi.org/10.1002/psp4.70288) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Wilens_2002_reference](drugs/drug_fluoxetine/Fluoxetine_Wilens2002_reference.md) | — | parent + metabolite (no model) | 0 | Wilens TE et al., Fluoxetine pharmacokinetics in pediatri…, Journal of clinical psychop… (2002) | [10.1097/00004714-200212000-00006](https://doi.org/10.1097/00004714-200212000-00006) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="Data from bacteria, fungi or plants, not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">other organism</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [van_2024_reference](drugs/drug_fluoxetine/Fluoxetine_van2024_reference.md) | — | parent + metabolite (no model) | 0 | van der Most MA et al., Toxicokinetics of the Antidepressant Fl…, Environmental science & tec… (2024) | [10.1021/acs.est.3c07744](https://doi.org/10.1021/acs.est.3c07744) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Kecskeméti_2005_IBa](drugs/drug_fluoxetine/pd_Kecskem_ti_2005_IBa.md) | peak Ba2+ current through voltage-gated Ca2+ channels ← fluoxetine · direct sigmoid Emax (Hill) effect | — | Kecskeméti V et al., Norfluoxetine and fluoxetine have simil…, Brain research bulletin (2005) | [10.1016/j.brainresbull.2005.06.027](https://doi.org/10.1016/j.brainresbull.2005.06.027) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Maringwa_2025_HAMD_change_from_baseline](drugs/drug_fluoxetine/pd_Maringwa_2025_HAMD_change_from_baseline.md) | Change from baseline in Hamilton Depression Rating (HAMD) scale score ← fluoxetine · direct linear effect | — | Maringwa J et al., Partial Residual Plots as an Integrated…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3418](https://doi.org/10.1002/cpt.3418) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Vieira-Coelho_2023_K_current](drugs/drug_fluoxetine/pd_Vieira_Coelho_2023_K_current.md) | K+ currents in OK cells (in vitro inhibition) ← fluoxetine · direct Emax (saturable) effect | — | Vieira-Coelho MA et al., Inhibition of kidney potassium channels…, Fundamental & clinical phar… (2023) | [10.1111/fcp.12833](https://doi.org/10.1111/fcp.12833) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Vieira-Coelho_2023_urinary_K](drugs/drug_fluoxetine/pd_Vieira_Coelho_2023_urinary_K.md) | urinary K+ (dose-dependent decrease, acute in vivo) ← fluoxetine · direct Emax (saturable) effect | — | Vieira-Coelho MA et al., Inhibition of kidney potassium channels…, Fundamental & clinical phar… (2023) | [10.1111/fcp.12833](https://doi.org/10.1111/fcp.12833) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Wojtovich_2010_mKATP](drugs/drug_fluoxetine/pd_Wojtovich_2010_mKATP.md) | mKATP channel activity (Tl+ flux, % inhibition) biomarker turnover ← fluoxetine | — | Wojtovich AP et al., A novel mitochondrial K(ATP) channel as…, Circulation research (2010) | [10.1161/CIRCRESAHA.109.215400](https://doi.org/10.1161/CIRCRESAHA.109.215400) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Kecskeméti_2005_IBa_2](drugs/drug_fluoxetine/pd_Kecskem_ti_2005_IBa_2.md) | peak Ba2+ current through voltage-gated Ca2+ channels (norfluoxetine) ← norfluoxetine · direct sigmoid Emax (Hill) effect | — | Kecskeméti V et al., Norfluoxetine and fluoxetine have simil…, Brain research bulletin (2005) | [10.1016/j.brainresbull.2005.06.027](https://doi.org/10.1016/j.brainresbull.2005.06.027) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=fluoxetine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| absorption | brain | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor | DrugBank actor |
| distribution | blood | `ALB` substrate, `ORM1` substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` inhibitor/substrate, `CYP2B6` substrate, `CYP2C19` inhibitor/substrate, `CYP2C9` inhibitor/substrate, `CYP2D6` inhibitor/substrate, `CYP3A4` inhibitor/substrate, `CYP3A5` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| — | brain | `SLC6A4` inhibitor | DrugBank actor |
| — | platelet | `SLC6A4` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: CHRNA2 (target), CHRNA3 (target), CHRNB4 (target), CKS1B (inhibitor), CYP2B (inducer), HTR2C (target), KCNH2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 178 matched, 20 returned
- **screened:** 2  ·  **relevant:** 1
- **records:** 3  ·  extracted 1  ·  needs_review 0  ·  rejected 2  ·  stale 3
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Wilens_2002.pdf` | Wilens TE et al., Fluoxetine pharmacokinetics in pediatri…, Journal of clinical psychop… (2002) | popPK | 8 | [10.1097/00004714-200212000-00006](https://doi.org/10.1097/00004714-200212000-00006) | [12454556](https://pubmed.ncbi.nlm.nih.gov/12454556) | Population PK model of fluoxetine/norfluoxetine in pediatric patients is described, but specific parameter values (CL, V) are not given in the evidence, only mean concentrations. |
| `Yang_2022.pdf` | Yang XY et al., [Pharmacokinetic interaction of Jiaotai…, Zhongguo Zhong yao za zhi =… (2022) | popPK | 5 | [10.19540/j.cnki.cjcmm.20220606.501](https://doi.org/10.19540/j.cnki.cjcmm.20220606.501) | [36164918](https://pubmed.ncbi.nlm.nih.gov/36164918) | Fluoxetine PK measured in rats (NCA parameters), but abstract reports no numeric fluoxetine values, only qualitative "no significant difference"; numbers likely in tables not provided. |

<sub>queue written 2026-10-06T23:01:29.967547+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Baumann_1996 | irrelevant | 2 | 0 | This is a review of SSRI pharmacokinetics and interactions with no original quantitative disposition parameters for fluoxetine reported in the evidence. |
| PD | Baumann_1996 | not_relevant | 1 | 0 | The text is a review of PK properties and drug interactions, explicitly stating that no clear plasma concentration-clinical effectiveness relationship has been shown, and provides no numeric PD parameters. |
| popPK | Boswell_2023 | irrelevant | 0 | 0 | Clinical trial on impulsivity and CBT/fluoxetine outcomes in binge-eating disorder; no PK parameters reported. |
| popPK | Burlot_2026 | irrelevant | 0 | 0 | This is a population PK study of the Bcl2 inhibitor S65487, not fluoxetine; fluoxetine does not appear as the subject drug. |
| popPK | Chen_2008 | irrelevant | 0 | 0 | This is a review of nitric oxide signaling pathways; fluoxetine is not mentioned and no PK parameters for it appear. |
| PD | Chen_2008 | not_relevant | 0 | 0 | The paper is a review and theoretical modeling study of nitric oxide (NO) production and distribution in the vasculature; it does not report pharmacodynamic or exposure-response data for fluoxetine. |
| popPK | DiPietro_2023 | irrelevant | 0 | 0 | This is a fetal heart rate/sleep apnea study with no fluoxetine or pharmacokinetic data whatsoever. |
| popPK | Hai_2016 | irrelevant | 1 | 0 | Fluoxetine is used as a pharmacological probe in a molecular fMRI study of serotonin transport; no PK parameters for fluoxetine are reported. |
| popPK | Jung_2022 | irrelevant | 0 | 0 | This is a medicinal chemistry/SAR paper on tianeptine hybrid compounds; fluoxetine appears only as a pharmacophore and positive control, with no PK parameters for fluoxetine. |
| PD | Jung_2022 | not_relevant | 0 | 0 | The paper focuses on novel tianeptine derivatives; fluoxetine is only mentioned as a pharmacophore source for synthesis, and no PD or exposure-response data for fluoxetine itself are reported. |
| popPK | Kecskeméti_2005 | irrelevant | 0 | 0 | This is a pharmacodynamic (anticonvulsant/Ca2+ channel) study in mice and rat neurons with no PK disposition parameters for fluoxetine. |
| popPK | LLoyd_2025 | irrelevant | 0 | 0 | Clinical efficacy trial of fluoxetine in anorexia nervosa with no pharmacokinetic parameters (no CL, V, ka, half-life, or PK model) reported anywhere. |
| popPK | Magalhães_2020 | irrelevant | 3 | 2 | TDM/PK-PD association study reporting plasma concentrations and genetic associations, not quantitative disposition parameters (CL, V, half-life); no numeric PK values appear in the evidence. |
| PD | Magalhães_2020 | not_relevant | 2 | 0 | The study performs a multivariate analysis of genetic factors on PK and clinical outcomes but does not report a quantitative exposure-response or dose-response model with numeric PD parameters (e.g., Emax, EC50). |
| popPK | Maringwa_2025 | irrelevant | 0 | 0 | This is an MBMA efficacy (HAMD dose-response) methodology paper; fluoxetine is only an example drug and no PK disposition parameters (CL, V, ka, half-life) are reported. |
| popPK | Nakagawa_2011 | irrelevant | 0 | 0 | This is a statistics methods review with no fluoxetine PK data or parameters. |
| popPK | Vieira-Coelho_2023 | irrelevant | 2 | 1 | This is a pharmacodynamic study of fluoxetine's effect on renal K+ excretion in rats, with no PK disposition parameters (CL, V, half-life, or PK model) reported. |
| popPK | Vlase_2006 | irrelevant | 2 | 2 | Fluoxetine is only the interacting pre-treatment; all reported PK parameters (Cmax, AUC, t1/2) are for metoclopramide, not fluoxetine. |
| popPK | Wilens_2002 | relevant | 8 | 4 | Population PK model of fluoxetine/norfluoxetine in pediatric patients is described, but specific parameter values (CL, V) are not given in the evidence, only mean concentrations. |
| popPK | Wojtovich_2010 | irrelevant | 0 | 0 | In-vitro/mitochondrial pharmacology study of fluoxetine's effect on mKATP channels (IC50 only), not a PK study with disposition parameters. |
| popPK | Xie_2023 | irrelevant | 1 | 1 | Algal bioremediation/toxicity study with no pharmacokinetic disposition parameters for fluoxetine; only EC50 and removal percentages are given. |
| popPK | Yang_2022 | relevant | 5 | 2 | Fluoxetine PK measured in rats (NCA parameters), but abstract reports no numeric fluoxetine values, only qualitative "no significant difference"; numbers likely in tables not provided. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 23:01 UTC</sub>
