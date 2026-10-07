<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;dolutegravir&quot;}]"></div>

# dolutegravir

- **generic name:** dolutegravir
- **ATC codes:** `J05AJ03`, `J05AR13`, `J05AR21`, `J05AR25`, `J05AR27`, `J05AR29`, `J05AX12`
- **DrugBank:** [DB08930](https://go.drugbank.com/drugs/DB08930) · **PubChem:** [CID 54726191](https://pubchem.ncbi.nlm.nih.gov/compound/54726191)
- **molar mass:** 419.3788 g/mol (C20H19F2N3O5) — DrugBank
- **groups:** approved, investigational

## About

Dolutegravir is an integrase inhibitor used to treat HIV infection. It is an approved medicine, authorised in the European Union for HIV infections, and is included on the WHO list of essential medicines, so it is widely used.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q937224](https://www.wikidata.org/wiki/Q937224) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| dolutegravir | parent | 419.379 | C20H19F2N3O5 | DrugBank | [54726191](https://pubchem.ncbi.nlm.nih.gov/compound/54726191) | Kawuma_2022, Kawuma_2023, Zhang_2015 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 14:14 | 9:08 | 0/5/1 | 0/0/1 | 0/0/0 | 231,459/19,108 | einfracz / qwen3.8-27b | 7 | 2/5 | 7/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q22 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Zhang_2015_reference](drugs/drug_dolutegravir/Dolutegravir_Zhang2015_reference.md) | — | 1-compartment (no model) | 5 | Zhang J et al., Population pharmacokinetics of dolutegr…, British journal of clinical… (2015) | [10.1111/bcp.12639](https://doi.org/10.1111/bcp.12639) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Chandasana_2024_reference](drugs/drug_dolutegravir/Dolutegravir_Chandasana2024_reference.md) | — | 1-compartment (no model) | 0 | Chandasana H et al., Population Pharmacokinetic Analysis of…, Journal of clinical pharmac… (2024) | [10.1002/jcph.2494](https://doi.org/10.1002/jcph.2494) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Kawuma_2022_reference](drugs/drug_dolutegravir/Dolutegravir_Kawuma2022_reference.md) | — | 2-compartment (no model) | 4 | Kawuma AN et al., Population Pharmacokinetic Model and Al…, Antimicrobial agents and ch… (2022) | [10.1128/aac.00215-22](https://doi.org/10.1128/aac.00215-22) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C2 negative clearance/volume in a covariate scenario or base (implausible — bas…</sub><br><sub>route_to: `human_review`</sub> | [Kawuma_2023_reference](drugs/drug_dolutegravir/Dolutegravir_Kawuma2023_reference.md) | — | 1-compartment (no model) | 1 | Kawuma AN et al., Drug-drug interaction between rifabutin…, British journal of clinical… (2023) | [10.1111/bcp.15604](https://doi.org/10.1111/bcp.15604) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Kengo_2023_reference](drugs/drug_dolutegravir/Dolutegravir_Kengo2023_reference.md) | — | 1-compartment (no model) | 0 | Kengo A et al., Dolutegravir pharmacokinetics in Uganda…, Antimicrobial agents and ch… (2023) | [10.1128/aac.00430-23](https://doi.org/10.1128/aac.00430-23) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Naidoo_2025_reference](drugs/drug_dolutegravir/Dolutegravir_Naidoo2025_reference.md) | — | 1-compartment (no model) | 0 | Naidoo A et al., Pharmacokinetics and safety of dolutegr…, The lancet. HIV (2025) | [10.1016/S2352-3018(24)00312-6](https://doi.org/10.1016/S2352-3018(24)00312-6) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Chandasana_2024_2_virologic_response](drugs/drug_dolutegravir/pd_Chandasana_2024_2_virologic_response.md) | virologic response ← dolutegravir · categorical (graded) response model | — | Chandasana H et al., Bridging dolutegravir clinical viral re…, AIDS (London, England) (2024) | [10.1097/QAD.0000000000003929](https://doi.org/10.1097/QAD.0000000000003929) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=dolutegravir) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| distribution | blood | `ALB` binder, `ORM1` binder | DrugBank actor |
| metabolism | kidney | `UGT1A9` substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate, `UGT1A1` substrate, `UGT1A3` substrate, `UGT1A9` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `UGT1A1` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC22A2` inhibitor, `SLC22A6` inhibitor, `SLC22A8` inhibitor, `SLC47A1` inhibitor | DrugBank actor |
| excretion | liver | `SLC47A1` inhibitor | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 102 matched, 20 returned
- **screened:** 6  ·  **relevant:** 7
- **records:** 6  ·  extracted 0  ·  needs_review 1  ·  rejected 5  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_8 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chandasana_2024.pdf` | Chandasana H et al., Population Pharmacokinetic Analysis of…, Journal of clinical pharmac… (2024) | popPK | 10 | [10.1002/jcph.2494](https://doi.org/10.1002/jcph.2494) | [39011960](https://pubmed.ncbi.nlm.nih.gov/39011960) | The paper reports a population pharmacokinetic model for dolutegravir with specific numeric values for CL/F, V/F, Ka, and lag time provided in the text. |
| `Kawuma_2021.pdf` | Kawuma AN et al., Dolutegravir pharmacokinetics during co…, The Journal of antimicrobia… (2021) | popPK | 10 | [10.1093/jac/dkab022](https://doi.org/10.1093/jac/dkab022) | [33550391](https://pubmed.ncbi.nlm.nih.gov/33550391) | The abstract explicitly lists quantitative population PK parameters (CL, ka, Vc, Vp) for dolutegravir in healthy human volunteers. |
| `Kawuma_2022.pdf` | Kawuma AN et al., Population Pharmacokinetic Model and Al…, Antimicrobial agents and ch… (2022) | popPK | 10 | [10.1128/aac.00215-22](https://doi.org/10.1128/aac.00215-22) | [35604212](https://pubmed.ncbi.nlm.nih.gov/35604212) | The paper is a population pharmacokinetic study of dolutegravir and explicitly reports quantitative values for clearance (1.03 L/h), absorption rate constant (1.61 h-1), and volumes (Vc 12.7 L, Vp 3.85 L) in the abstract. |
| `Kengo_2023.pdf` | Kengo A et al., Dolutegravir pharmacokinetics in Uganda…, Antimicrobial agents and ch… (2023) | popPK | 10 | [10.1128/aac.00430-23](https://doi.org/10.1128/aac.00430-23) | [37850738](https://pubmed.ncbi.nlm.nih.gov/37850738) | The paper reports specific population PK parameters (CL, ka, Vd) for dolutegravir in humans, with numeric values clearly stated in the text. |
| `Naidoo_2025.pdf` | Naidoo A et al., Pharmacokinetics and safety of dolutegr…, The lancet. HIV (2025) | popPK | 10 | [10.1016/S2352-3018(24)00312-6](https://doi.org/10.1016/S2352-3018(24)00312-6) | [40023169](https://pubmed.ncbi.nlm.nih.gov/40023169) | Reports quantitative population PK parameters (clearance, interaction effect) for dolutegravir in children, though specific values for volume and absorption rate are not explicitly listed in the abstract text. |
| `Piscitelli_2022.pdf` | Piscitelli J et al., Optimizing Dolutegravir Initiation in N…, Journal of acquired immune… (2022) | popPK | 10 | [10.1097/QAI.0000000000002830](https://doi.org/10.1097/QAI.0000000000002830) | [34629412](https://pubmed.ncbi.nlm.nih.gov/34629412) | The paper reports a population PK model for dolutegravir in neonates, but specific parameter estimates (CL, V, Q) are not listed in the provided abstract evidence. |
| `Labarthe_2022.pdf` | Labarthe L et al., Pharmacokinetics and tissue distributio…, The Journal of antimicrobia… (2022) | popPK | 8 | [10.1093/jac/dkab501](https://doi.org/10.1093/jac/dkab501) | [35022753](https://pubmed.ncbi.nlm.nih.gov/35022753) | The study reports quantitative pharmacokinetic parameters for dolutegravir in mice, but the specific numeric values are not included in the provided evidence text. |
| `Cottrell_2013.pdf` | Cottrell ML et al., Clinical pharmacokinetic, pharmacodynam…, Clinical pharmacokinetics (2013) | popPK | 6 | [10.1007/s40262-013-0093-2](https://doi.org/10.1007/s40262-013-0093-2) | [23824675](https://pubmed.ncbi.nlm.nih.gov/23824675) | The text describes dolutegravir's PK profile and mentions a half-life of 13-14 h, but specific quantitative disposition parameters like clearance (CL), volume (V), and absorption rate (ka) are not provided in the evidence. |

<sub>queue written 2026-10-07T14:07:07.436126+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chandasana_2024_2 | irrelevant | 3 | 0 | This is a pharmacodynamic exposure-response analysis regarding viral response, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, etc.) for dolutegravir. |
| popPK | Chandasana_2024_3 | irrelevant | 2 | 0 | The study focuses on exposure-response and viral dynamics rather than reporting quantitative population pharmacokinetic parameters (e.g., CL, V) for dolutegravir. |
| popPK | Cheung_2022 | irrelevant | 0 | 0 | The paper is an in-vitro phenotypic resistance study measuring fold-change in susceptibility (EC50/IC50 shifts), not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume. |
| popPK | Cottrell_2013 | relevant | 6 | 2 | The text describes dolutegravir's PK profile and mentions a half-life of 13-14 h, but specific quantitative disposition parameters like clearance (CL), volume (V), and absorption rate (ka) are not provided in the evidence. |
| popPK | Di_2026 | irrelevant | 0 | 0 | The paper is a review focused on the BIC/FTC/TAF regimen, and dolutegravir is only mentioned as a comparator or class representative without specific original PK parameter data for dolutegravir being reported. |
| popPK | Griesel_2022 | irrelevant | 2 | 0 | The study is a pharmacogenetic/pharmacodynamic analysis of neuropsychiatric adverse events that uses AUC estimates from a separate population PK model; it does not report the model parameters (CL, V, Q, ka) themselves, only summary exposure metrics (AUC). |
| popPK | Labarthe_2022 | relevant | 8 | 0 | The study reports quantitative pharmacokinetic parameters for dolutegravir in mice, but the specific numeric values are not included in the provided evidence text. |
| popPK | Lee_2022 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of dolutegravir's mechanism of action as a viral entry inhibitor against SARS-CoV-2, reporting potency (EC50) values but containing no pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Li_2022 | irrelevant | 0 | 0 | This is a review of HIV reverse transcriptase inhibitors (NRTIs/NNRTIs) and does not contain pharmacokinetic studies or quantitative disposition parameters for dolutegravir. |
| popPK | Mehta_2023 | irrelevant | 2 | 0 | The study reports trough concentrations (C0) as exposure metrics but does not provide quantitative disposition parameters such as clearance, volume of distribution, or population PK model parameter estimates. |
| popPK | Piscitelli_2022 | relevant | 10 | 2 | The paper reports a population PK model for dolutegravir in neonates, but specific parameter estimates (CL, V, Q) are not listed in the provided abstract evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 14:07 UTC</sub>
