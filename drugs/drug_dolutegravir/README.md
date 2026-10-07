<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;dolutegravir&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Dolutegravir_Kengo2023_reference&quot;,&quot;label&quot;:&quot;Kengo_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dolutegravir/Dolutegravir_Kengo2023_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Dolutegravir_Zhang2015_reference&quot;,&quot;label&quot;:&quot;Zhang_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dolutegravir/Dolutegravir_Zhang2015_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

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
| dolutegravir | parent | 419.379 | C20H19F2N3O5 | DrugBank | [54726191](https://pubchem.ncbi.nlm.nih.gov/compound/54726191) | Kawuma_2021, Kawuma_2022, Kawuma_2023, Kengo_2023, Naidoo_2025, Zhang_2015 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:29 | 5:07 | 2/3/2 | 0/0/1 | 0/0/0 | 232,194/18,605 | ollama / glm-5.3-flash | 7 | 2/5 | 7/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Kengo_2023_reference](drugs/drug_dolutegravir/Dolutegravir_Kengo2023_reference.md) | ▶ model + simulator | 1-compartment, oral | 5 | Kengo A et al., Dolutegravir pharmacokinetics in Uganda…, Antimicrobial agents and ch… (2023) | [10.1128/aac.00430-23](https://doi.org/10.1128/aac.00430-23) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Zhang_2015_reference](drugs/drug_dolutegravir/Dolutegravir_Zhang2015_reference.md) | ▶ model + simulator | 1-compartment, oral | 6 | Zhang J et al., Population pharmacokinetics of dolutegr…, British journal of clinical… (2015) | [10.1111/bcp.12639](https://doi.org/10.1111/bcp.12639) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q61 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Kawuma_2023_reference](drugs/drug_dolutegravir/Dolutegravir_Kawuma2023_reference.md) | — | 1-compartment (no model) | 1 | Kawuma AN et al., Drug-drug interaction between rifabutin…, British journal of clinical… (2023) | [10.1111/bcp.15604](https://doi.org/10.1111/bcp.15604) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — clearance/elimination from this paper; review-gap-fill…</sub><br><sub>route_to: `human_review`</sub> | [Naidoo_2025_reference](drugs/drug_dolutegravir/Dolutegravir_Naidoo2025_reference.md) | — | 1-compartment (no model) | 2 | Naidoo A et al., Pharmacokinetics and safety of dolutegr…, The lancet. HIV (2025) | [10.1016/S2352-3018(24)00312-6](https://doi.org/10.1016/S2352-3018(24)00312-6) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Chandasana_2024_reference](drugs/drug_dolutegravir/Dolutegravir_Chandasana2024_reference.md) | — | 1-compartment (no model) | 0 | Chandasana H et al., Population Pharmacokinetic Analysis of…, Journal of clinical pharmac… (2024) | [10.1002/jcph.2494](https://doi.org/10.1002/jcph.2494) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Kawuma_2021_reference](drugs/drug_dolutegravir/Dolutegravir_Kawuma2021_reference.md) | — | 2-compartment (no model) | 5 | Kawuma AN et al., Dolutegravir pharmacokinetics during co…, The Journal of antimicrobia… (2021) | [10.1093/jac/dkab022](https://doi.org/10.1093/jac/dkab022) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Kawuma_2022_reference](drugs/drug_dolutegravir/Dolutegravir_Kawuma2022_reference.md) | — | 2-compartment (no model) | 4 | Kawuma AN et al., Population Pharmacokinetic Model and Al…, Antimicrobial agents and ch… (2022) | [10.1128/aac.00215-22](https://doi.org/10.1128/aac.00215-22) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Chandasana_2024_2_Virologic_response_HIV_1_RNA_50_copies_ml](drugs/drug_dolutegravir/pd_Chandasana_2024_2_Virologic_response_HIV_1_RNA_50_copies_ml.md) | Virologic response (HIV-1 RNA &lt; 50 copies/ml) ← dolutegravir · categorical (graded) response model | — | Chandasana H et al., Bridging dolutegravir clinical viral re…, AIDS (London, England) (2024) | [10.1097/QAD.0000000000003929](https://doi.org/10.1097/QAD.0000000000003929) |

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
- **screened:** 7  ·  **relevant:** 7
- **records:** 7  ·  extracted 2  ·  needs_review 2  ·  rejected 3  ·  stale 6
- **scholar-agent fallback query used:** not captured

## Full text wanted

_8 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chandasana_2024.pdf` | Chandasana H et al., Population Pharmacokinetic Analysis of…, Journal of clinical pharmac… (2024) | popPK | 10 | [10.1002/jcph.2494](https://doi.org/10.1002/jcph.2494) | [39011960](https://pubmed.ncbi.nlm.nih.gov/39011960) | Population PK model of dolutegravir with full numeric parameter estimates (CL/F, V/F, Ka, lag time) reported directly in the abstract. |
| `Kawuma_2021.pdf` | Kawuma AN et al., Dolutegravir pharmacokinetics during co…, The Journal of antimicrobia… (2021) | popPK | 10 | [10.1093/jac/dkab022](https://doi.org/10.1093/jac/dkab022) | [33550391](https://pubmed.ncbi.nlm.nih.gov/33550391) | Population PK model of dolutegravir with full numeric parameters (CL, Vc, Vp, ka, transit time) reported directly in the abstract. |
| `Kawuma_2022.pdf` | Kawuma AN et al., Population Pharmacokinetic Model and Al…, Antimicrobial agents and ch… (2022) | popPK | 10 | [10.1128/aac.00215-22](https://doi.org/10.1128/aac.00215-22) | [35604212](https://pubmed.ncbi.nlm.nih.gov/35604212) | Population PK model of dolutegravir with full numeric parameters (CL, ka, Vc, Vp) reported directly in the abstract. |
| `Kengo_2023.pdf` | Kengo A et al., Dolutegravir pharmacokinetics in Uganda…, Antimicrobial agents and ch… (2023) | popPK | 10 | [10.1128/aac.00430-23](https://doi.org/10.1128/aac.00430-23) | [37850738](https://pubmed.ncbi.nlm.nih.gov/37850738) | Population PK model of dolutegravir with numeric CL, ka, and V reported directly in the abstract. |
| `Naidoo_2025.pdf` | Naidoo A et al., Pharmacokinetics and safety of dolutegr…, The lancet. HIV (2025) | popPK | 10 | [10.1016/S2352-3018(24)00312-6](https://doi.org/10.1016/S2352-3018(24)00312-6) | [40023169](https://pubmed.ncbi.nlm.nih.gov/40023169) | Population PK model of dolutegravir in children with numeric CL (0·584 L/h) and rifampicin effect reported in text; V and ka values may be in tables/supplements not shown. |
| `Piscitelli_2022.pdf` | Piscitelli J et al., Optimizing Dolutegravir Initiation in N…, Journal of acquired immune… (2022) | popPK | 8 | [10.1097/QAI.0000000000002830](https://doi.org/10.1097/QAI.0000000000002830) | [34629412](https://pubmed.ncbi.nlm.nih.gov/34629412) | Population PK modeling of dolutegravir in neonates, but numeric CL/V parameters appear to live in the full model/supplementary material, not in the provided evidence. |
| `Labarthe_2022.pdf` | Labarthe L et al., Pharmacokinetics and tissue distributio…, The Journal of antimicrobia… (2022) | popPK | 7 | [10.1093/jac/dkab501](https://doi.org/10.1093/jac/dkab501) | [35022753](https://pubmed.ncbi.nlm.nih.gov/35022753) | Mouse PK study of dolutegravir with NCA parameters, but numeric values appear only in tables/figures not included in the evidence. |
| `Chandasana_2024_2.pdf` | Chandasana H et al., Bridging dolutegravir clinical viral re…, AIDS (London, England) (2024) | popPK | 6 | [10.1097/QAD.0000000000003929](https://doi.org/10.1097/QAD.0000000000003929) | [38768443](https://pubmed.ncbi.nlm.nih.gov/38768443) | Population PK/exposure-response analysis of dolutegravir in children, but the abstract contains no numeric PK parameter values, which likely reside in tables/figures not provided. |

<sub>queue written 2026-10-07T16:25:33.194616+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chandasana_2024_2 | relevant | 6 | 2 | Population PK/exposure-response analysis of dolutegravir in children, but the abstract contains no numeric PK parameter values, which likely reside in tables/figures not provided. |
| popPK | Chandasana_2024_3 | irrelevant | 3 | 2 | This is an exposure-response/viral dynamics analysis using DTG exposures as input; no PK disposition parameters (CL, V, ka, half-life) for dolutegravir are reported, and any exposure metrics derive from prior population PK models not provided here. |
| popPK | Cheung_2022 | irrelevant | 0 | 0 | In-vitro phenotypic resistance study with no pharmacokinetic disposition parameters for dolutegravir. |
| popPK | Cottrell_2013 | irrelevant | 3 | 2 | A narrative review with only a half-life range (13–14 h) and no clearance, volume, or population-PK model parameters reported. |
| popPK | Di_2026 | irrelevant | 2 | 3 | This is a narrative review of BIC/FTC/TAF; dolutegravir appears only as a comparator in a multi-drug table (Vd, half-life) with no dedicated PK model or disposition analysis for DTG. |
| popPK | Griesel_2022 | irrelevant | 3 | 2 | This is a PK/PD concentration-response study using AUC estimates from an external population PK model; no CL/V/Q/ka or model parameters are reported here, only median AUC values. |
| popPK | Labarthe_2022 | relevant | 7 | 3 | Mouse PK study of dolutegravir with NCA parameters, but numeric values appear only in tables/figures not included in the evidence. |
| popPK | Lee_2022 | irrelevant | 0 | 0 | In-vitro antiviral entry-inhibition study; dolutegravir is a screened drug with EC50 values, no PK disposition parameters (CL, V, half-life, or PK model) reported. |
| popPK | Li_2022 | irrelevant | 0 | 0 | This is a review of HIV reverse transcriptase inhibitors; dolutegravir is only mentioned as a comparator/co-formulated drug, with no PK parameters for DTG reported. |
| popPK | Mehta_2023 | irrelevant | 3 | 2 | Reports only trough concentrations (C0) and exposure-response summaries; no CL/V/ka or population-PK parameter values are given, and numeric C0 values are not in the evidence. |
| popPK | Piscitelli_2022 | relevant | 8 | 3 | Population PK modeling of dolutegravir in neonates, but numeric CL/V parameters appear to live in the full model/supplementary material, not in the provided evidence. |
| popPK | Smith_2022 | irrelevant | 0 | 0 | This is an in-vitro phenotypic resistance study reporting EC50 values, not pharmacokinetic disposition parameters for dolutegravir. |
| popPK | Souza-Silva_2026 | irrelevant | 0 | 0 | Ecotoxicity study of dolutegravir in microalgae (EC50 values), not a pharmacokinetic study with disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 16:25 UTC</sub>
