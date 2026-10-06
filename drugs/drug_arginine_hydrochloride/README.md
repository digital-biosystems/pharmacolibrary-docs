<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B05X&quot;,&quot;href&quot;:&quot;atc/B05X.md&quot;},{&quot;label&quot;:&quot;arginine hydrochloride&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;ArginineHydrochloride_Gaudinski2018_reference&quot;,&quot;label&quot;:&quot;Gaudinski_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_arginine_hydrochloride/ArginineHydrochloride_Gaudinski2018_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# arginine hydrochloride

- **generic name:** arginine hydrochloride
- **ATC codes:** `B05XB01`
- **DrugBank:** [DB00125](https://go.drugbank.com/drugs/DB00125) · **PubChem:** [CID 6322](https://pubchem.ncbi.nlm.nih.gov/compound/6322)
- **molar mass:** 174.201 g/mol (C6H14N4O2) — DrugBank
- **groups:** approved, investigational, nutraceutical

## About

Arginine hydrochloride is an amino acid used as an additive to intravenous solutions, and has also been studied for other uses. It is an approved medicine and is also sold as a nutritional supplement.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q173670](https://www.wikidata.org/wiki/Q173670) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| arginine (arginine_hydrochloride, L-arginine) | parent | 174.201 | C6H14N4O2 | DrugBank | [6322](https://pubchem.ncbi.nlm.nih.gov/compound/6322) | Wang_2018, Yeo_2013 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 00:23 | 11:33 | 3/1/2 | 0/0/0 | 0/0/0 | 205,468/29,537 | ollama / qwen3.8:27b-mtp-q8_0 | 9 | 0/11 | 9/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | [Gaudinski_2018_reference](drugs/drug_arginine_hydrochloride/ArginineHydrochloride_Gaudinski2018_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Gaudinski MR et al., Safety and pharmacokinetics of the Fc-m…, PLoS medicine (2018) | [10.1371/journal.pmed.1002493](https://doi.org/10.1371/journal.pmed.1002493) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.667). The first reading is what the record holds.">cross-check: disputed</span> | [Yeo_2013_moderately_severemalaria_ref_15](drugs/drug_arginine_hydrochloride/ArginineHydrochloride_Yeo2013_moderately_severemalaria_ref_1.md) | held back | 2-compartment, IV | 4 | Yeo TW et al., A randomized pilot study of L-arginine…, PloS one (2013) | [10.1371/journal.pone.0069587](https://doi.org/10.1371/journal.pone.0069587) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.6). The first reading is what the record holds.">cross-check: disputed</span> | [Yeo_2013_severemalaria](drugs/drug_arginine_hydrochloride/ArginineHydrochloride_Yeo2013_severemalaria.md) | held back | 2-compartment, IV | 4 | Yeo TW et al., A randomized pilot study of L-arginine…, PloS one (2013) | [10.1371/journal.pone.0069587](https://doi.org/10.1371/journal.pone.0069587) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.222). The first reading is what the record holds.">cross-check: disputed</span><br><sub>caveat: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only…</sub><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — clearance/elimination from this paper; review-gap-fill…</sub><br><sub>route_to: `human_review`</sub> | [Wang_2018_reference](drugs/drug_arginine_hydrochloride/ArginineHydrochloride_Wang2018_reference.md) | — | 1-compartment (no model) | 2 | Wang J et al., Population pharmacokinetics of arginine…, Xenobiotica; the fate of fo… (2018) | [10.1080/00498254.2017.1370745](https://doi.org/10.1080/00498254.2017.1370745) |
| <span class="pk-badge pk-badge--neutral">None</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: not captured</sub> | [Yeo_2013_reference](drugs/drug_arginine_hydrochloride/ArginineHydrochloride_Yeo2013_reference.md) | — | — (no model) | 0 | Yeo TW et al., A randomized pilot study of L-arginine…, PloS one (2013) | [10.1371/journal.pone.0069587](https://doi.org/10.1371/journal.pone.0069587) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.571). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Awan_2024_reference](drugs/drug_arginine_hydrochloride/ArginineHydrochloride_Awan2024_reference.md) | — | 1-compartment (no model) | 2 | Awan SF et al., Phase 1 trial evaluating safety and pha…, JCI insight (2024) | [10.1172/jci.insight.175375](https://doi.org/10.1172/jci.insight.175375) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=arginine_hydrochloride) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | kidney | `SLC22A4` inhibitor, `SLC22A5` inhibitor | DrugBank actor |
| absorption | skeletal muscle | `SLC22A5` inhibitor | DrugBank actor |
| absorption | small intestine | `SLC22A4` inhibitor, `SLC22A5` inhibitor | DrugBank actor |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ARG2 (unknown), ASL (unknown), ASS1 (unknown), AZIN2 (unknown), NOS2 (unknown), NOS3 (unknown), SLC16A10 (inhibitor), SLC7A1 (unknown), SLC7A3 (unknown), SLC7A4 (unknown), TK1 (modulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 20 matched, 18 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 6  ·  extracted 3  ·  needs_review 1  ·  rejected 1  ·  stale 3
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Wang_2018.pdf` | Wang J et al., Population pharmacokinetics of arginine…, Xenobiotica; the fate of fo… (2018) | popPK | 10 | [10.1080/00498254.2017.1370745](https://doi.org/10.1080/00498254.2017.1370745) | [28925806](https://pubmed.ncbi.nlm.nih.gov/28925806) | The study reports quantitative population PK parameters (CL, Q, V1, V2) for arginine, which is the active moiety of arginine hydrochloride, in healthy volunteers. |
| `Avogaro_2003.pdf` | Avogaro A et al., L-arginine-nitric oxide kinetics in nor…, Diabetes (2003) | popPK | 9 | [10.2337/diabetes.52.3.795](https://doi.org/10.2337/diabetes.52.3.795) | [12606522](https://pubmed.ncbi.nlm.nih.gov/12606522) | The study reports compartmental and noncompartmental PK parameters for L-arginine in humans, but the specific numeric values are not present in the provided abstract text. |

<sub>queue written 2026-10-06T00:13:07.514517+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Amantana_2007 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of a cell-penetrating peptide-morpholino oligomer conjugate, not arginine hydrochloride, which is only mentioned as a supplement for toxicity assessment. |
| popPK | Avogaro_2003 | relevant | 9 | 2 | The study reports compartmental and noncompartmental PK parameters for L-arginine in humans, but the specific numeric values are not present in the provided abstract text. |
| popPK | Avontuur_1998 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of L-NAME and its metabolite L-NOARG, not arginine_hydrochloride. |
| popPK | Awan_2024 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of HIV-1 broadly neutralizing monoclonal antibodies (10E8VLS and VRC07-523LS), not arginine_hydrochloride. |
| PD | Awan_2024 | not_relevant | 0 | 0 | The paper reports PK and safety data for HIV-1 monoclonal antibodies (10E8VLS and VRC07-523LS), not arginine hydrochloride, and does not provide a pharmacodynamic exposure-response model for the queried drug. |
| popPK | Barr_2007 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for citrulline, not arginine_hydrochloride. |
| popPK | Beardwell_1975 | irrelevant | 0 | 0 | The study measures arginine-vasopressin (AVP), not arginine hydrochloride, and reports PK parameters for AVP only. |
| popPK | Cruz_2025 | irrelevant | 0 | 0 | The paper is a review on formulation development for protein biotherapeutics and does not contain pharmacokinetic data for arginine_hydrochloride. |
| PD | Cruz_2025 | not_relevant | 0 | 0 | The paper is a review on formulation development and viscosity mitigation for biotherapeutics; it does not report pharmacodynamic or exposure-response data for arginine hydrochloride. |
| popPK | Ferl_2009 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of the radiotracer 64Cu-DOTA-RGD in mice, not the drug arginine_hydrochloride. |
| popPK | Fike_2023 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for L-citrulline, not arginine_hydrochloride. |
| popPK | Gaudinski_2018 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for the monoclonal antibody VRC01LS, not for arginine_hydrochloride (which is only mentioned as a formulation buffer component). |
| PD | Gaudinski_2018 | not_relevant | 0 | 0 | The paper reports pharmacokinetics and neutralization activity for VRC01LS, not arginine hydrochloride. |
| popPK | Ghosh_2026 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of pegzilarginase (an enzyme therapy), not arginine_hydrochloride, which is the substrate/metabolite being measured. |
| popPK | Gonce_1990 | irrelevant | 0 | 0 | The study is a nutritional/immunological efficacy trial in guinea pigs reporting survival and nitrogen balance, not a pharmacokinetic study with disposition parameters. |
| PD | Gonce_1990 | not_relevant | 3 | 2 | The paper reports a qualitative dose-response trend for amino acid levels and survival outcomes across dietary groups, but it does not provide numeric PD parameters (e.g., EC50, Emax) or a fitted concentration-effect curve for arginine hydrochloride. |
| popPK | Green_1994 | irrelevant | 0 | 0 | The study investigates atrial natriuretic peptide (ANP) in cultured human cells and does not involve arginine_hydrochloride. |
| popPK | Lambert_2022 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for the radiopharmaceutical 177Lu-Dotatate, not for arginine_hydrochloride, which is only a co-administered amino acid component. |
| popPK | Longo_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of glycerol phenylbutyrate (GPB) and its metabolites, not arginine hydrochloride. |
| PD | Longo_2021 | not_relevant | 0 | 0 | The paper reports PK parameters (clearance) and clinical outcomes (ammonia levels) for glycerol phenylbutyrate, but does not report a pharmacodynamic model or exposure-response relationship for arginine hydrochloride. |
| popPK | Modi_1995 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of TP-9201 (a GPIIbIIIa antagonist), not arginine_hydrochloride. |
| popPK | Modi_1996 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of TP-9201 (an RGD peptide), not arginine_hydrochloride. |
| popPK | Nilsson_1990 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of terlipressin (TGLVP), not arginine_hydrochloride. |
| popPK | Niu_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of losartan potassium, not arginine_hydrochloride. |
| popPK | Preijers_2021 | irrelevant | 0 | 0 | The paper is a review of population pharmacokinetics for clotting factors (FVIII, FIX) and desmopressin, not arginine hydrochloride. |
| popPK | Soria-Chacartegui_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for tramadol, not arginine_hydrochloride (which is only present as the salt form of the co-administered ibuprofen). |
| popPK | Vertiz-Hernandez_2007 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of phenacetin, with L-arginine serving only as a co-administered agent to test its effect on hepatic blood flow, not as the subject drug for PK parameter extraction. |
| popPK | Yeo_2008 | irrelevant | 2 | 0 | The study is a safety and hemodynamic assessment of L-arginine infusion that does not report quantitative pharmacokinetic parameters (e.g., clearance, volume, half-life) for the drug. |
| PD | Yeo_2013 | not_relevant | 2 | 1 | The paper reports population PK parameters and qualitative safety/efficacy outcomes (no significant change in RH-PAT or lactate), but does not provide a quantitative exposure-response or dose-response model with numeric PD parameters (e.g., Emax, EC50). |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 00:13 UTC</sub>
