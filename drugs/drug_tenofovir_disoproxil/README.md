<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;tenofovir disoproxil&quot;}]"></div>

# tenofovir disoproxil

- **generic name:** tenofovir disoproxil
- **ATC codes:** `J05AF07`, `J05AR03`, `J05AR06`, `J05AR08`, `J05AR11`, `J05AR12`, `J05AR24`, `J05AR27`
- **DrugBank:** [DB00300](https://go.drugbank.com/drugs/DB00300) · **PubChem:** [CID 5481350](https://pubchem.ncbi.nlm.nih.gov/compound/5481350)
- **molar mass:** 519.448 g/mol (C19H30N5O10P) — DrugBank
- **groups:** approved, investigational

## About

Tenofovir disoproxil is an antiviral used to treat HIV infection and chronic hepatitis B. It is widely used and is authorised in the European Union, available both alone and in combination products for HIV.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27132753](https://www.wikidata.org/wiki/Q27132753) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| tenofovir | metabolite | 288.1 | — | the paper | — | Burns_2015, Rungtivasuwan_2017 |
| tenofovir_diphosphate | metabolite | 447.174 | C9H16N5O10P3 | PubChem | [5481180](https://pubchem.ncbi.nlm.nih.gov/compound/5481180) | Burns_2015 |
| tenofovir_disoproxil | metabolite | 519.448 | C19H30N5O10P | DrugBank | [5481350](https://pubchem.ncbi.nlm.nih.gov/compound/5481350) | Burns_2015, Rungtivasuwan_2017, Scott_2023 |
| TFV-DP | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 14:26 | 6:27 | 0/7/0 | 0/0/1 | 0/0/0 | 174,191/14,944 | einfracz / qwen3.8-27b | 6 | 0/6 | 6/0 | 1 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Bouazza_2011_reference](drugs/drug_tenofovir_disoproxil/TenofovirDisoproxil_Bouazza2011_reference.md) | — | 1-compartment (no model) | 0 | Bouazza N et al., Population pharmacokinetics of tenofovi…, Journal of acquired immune… (2011) | [10.1097/QAI.0b013e3182302ea8](https://doi.org/10.1097/QAI.0b013e3182302ea8) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Burns_2015_base](drugs/drug_tenofovir_disoproxil/TenofovirDisoproxil_Burns2015_base.md) | — | general linear (no model) | 7 | Burns RN et al., Population pharmacokinetics of tenofovi…, Journal of clinical pharmac… (2015) | [10.1002/jcph.461](https://doi.org/10.1002/jcph.461) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Burns_2015_final](drugs/drug_tenofovir_disoproxil/TenofovirDisoproxil_Burns2015_final.md) | — | general linear (no model) | 7 (+1 cov.) | Burns RN et al., Population pharmacokinetics of tenofovi…, Journal of clinical pharmac… (2015) | [10.1002/jcph.461](https://doi.org/10.1002/jcph.461) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Jayachandran_2021_reference](drugs/drug_tenofovir_disoproxil/TenofovirDisoproxil_Jayachandran2021_reference.md) | — | general linear (no model) | 0 | Jayachandran P et al., A Mechanistic In Vivo/Ex Vivo Pharmacok…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12583](https://doi.org/10.1002/psp4.12583) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Mugwanya_2025_reference](drugs/drug_tenofovir_disoproxil/TenofovirDisoproxil_Mugwanya2025_reference.md) | — | 1-compartment (no model) | 0 | Mugwanya KK et al., Adherence thresholds for emtricitabine-…, PLoS medicine (2025) | [10.1371/journal.pmed.1004732](https://doi.org/10.1371/journal.pmed.1004732) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Rungtivasuwan_2017_reference](drugs/drug_tenofovir_disoproxil/TenofovirDisoproxil_Rungtivasuwan2017_reference.md) | — | 1-compartment (no model) | 1 | Rungtivasuwan K et al., Pharmacogenetics-based population pharm…, Pharmacogenomics (2017) | [10.2217/pgs-2017-0128](https://doi.org/10.2217/pgs-2017-0128) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Scott_2023_reference](drugs/drug_tenofovir_disoproxil/TenofovirDisoproxil_Scott2023_reference.md) | — | parent + metabolite (no model) | 5 | Scott RK et al., Clinical trial simulation to evaluate t…, Frontiers in reproductive h… (2023) | [10.3389/frph.2023.1224580](https://doi.org/10.3389/frph.2023.1224580) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Jayachandran_2021_p24](drugs/drug_tenofovir_disoproxil/pd_Jayachandran_2021_p24.md) | cumulative p24 antigen expression ← tenofovir-diphosphate · direct linear effect | — | Jayachandran P et al., A Mechanistic In Vivo/Ex Vivo Pharmacok…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12583](https://doi.org/10.1002/psp4.12583) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=tenofovir_disoproxil) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `ABCC2` substrate, `ABCC4` substrate, `SLC22A6` substrate, `SLC22A8` substrate | DrugBank actor |
| excretion | liver | `ABCC2` substrate, `ABCC4` substrate | DrugBank actor |
| excretion | small intestine | `ABCC2` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ABCC10 (substrate), AK2 (substrate), AK4 (substrate), CKB (inducer), CKB (substrate), NME1 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 119 matched, 20 returned
- **screened:** 6  ·  **relevant:** 6
- **records:** 7  ·  extracted 0  ·  needs_review 0  ·  rejected 7  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bouazza_2011.pdf` | Bouazza N et al., Population pharmacokinetics of tenofovi…, Journal of acquired immune… (2011) | popPK | 10 | [10.1097/QAI.0b013e3182302ea8](https://doi.org/10.1097/QAI.0b013e3182302ea8) | [21857359](https://pubmed.ncbi.nlm.nih.gov/21857359) | The paper reports a population pharmacokinetic model for tenofovir (active metabolite of tenofovir disoproxil) with explicit numeric values for clearance, volumes, intercompartmental clearance, and absorption rate constant. |
| `Garrett_2018.pdf` | Garrett KL et al., A Pharmacokinetic/Pharmacodynamic Model…, The Journal of pharmacology… (2018) | popPK | 10 | [10.1124/jpet.118.251009](https://doi.org/10.1124/jpet.118.251009) | [30150483](https://pubmed.ncbi.nlm.nih.gov/30150483) | The paper describes a population PK/PD model for TDF in healthy women, but the specific numeric parameter values (CL, V, ka, etc.) are not listed in the provided abstract/evidence text. |
| `Rungtivasuwan_2017.pdf` | Rungtivasuwan K et al., Pharmacogenetics-based population pharm…, Pharmacogenomics (2017) | popPK | 9 | [10.2217/pgs-2017-0128](https://doi.org/10.2217/pgs-2017-0128) | [29061086](https://pubmed.ncbi.nlm.nih.gov/29061086) | The study is a population PK analysis of tenofovir (active metabolite of tenofovir disoproxil) in humans, and the abstract provides specific quantitative effect estimates for covariates on CL/F (e.g., 25% decrease, 11% increase), though baseline parameter values are not listed. |
| `Ibrahim_2021.pdf` | Ibrahim ME et al., Individualized Adherence Benchmarks for…, AIDS research and human ret… (2021) | popPK | 5 | [10.1089/AID.2020.0108](https://doi.org/10.1089/AID.2020.0108) | [33191774](https://pubmed.ncbi.nlm.nih.gov/33191774) | The study uses a pharmacokinetic model to derive adherence benchmarks for tenofovir diphosphate (TFV-DP), the intracellular metabolite of the subject drug, but explicit quantitative parameter estimates (CL, V, ka) are not listed in the provided text. |

<sub>queue written 2026-10-07T14:21:22.904106+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aouri_2017 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of rilpivirine, with tenofovir disoproxil fumarate only mentioned as part of the background regimen. |
| popPK | Barceló_2016 | irrelevant | 0 | 0 | The study reports population PK parameters only for elvitegravir and cobicistat; tenofovir disoproxil is mentioned only as part of the co-formulation but its own disposition parameters are not modeled or reported. |
| popPK | Bierhoff_2019 | irrelevant | 2 | 1 | This is a systematic review that summarizes findings from other studies and does not report original quantitative population pharmacokinetic parameter estimates (such as CL, V, or ka) derived from a specific dataset. |
| popPK | Garrett_2018 | relevant | 10 | 2 | The paper describes a population PK/PD model for TDF in healthy women, but the specific numeric parameter values (CL, V, ka, etc.) are not listed in the provided abstract/evidence text. |
| popPK | Ibrahim_2020 | irrelevant | 0 | 0 | The study reports renal safety outcomes (eGFR slopes) rather than quantitative pharmacokinetic parameters for tenofovir disoproxil. |
| popPK | Ibrahim_2021 | relevant | 5 | 2 | The study uses a pharmacokinetic model to derive adherence benchmarks for tenofovir diphosphate (TFV-DP), the intracellular metabolite of the subject drug, but explicit quantitative parameter estimates (CL, V, ka) are not listed in the provided text. |
| popPK | Nicol_2015 | irrelevant | 2 | 0 | The study focuses on efficacy models (Emax) and tissue concentrations for HIV chemoprevention rather than population pharmacokinetic parameters (CL, V, ka) for tenofovir disoproxil. |
| popPK | Néant_2019 | irrelevant | 0 | 0 | The study is a pharmacodynamic model of rilpivirine, not a pharmacokinetic study of tenofovir disoproxil, and no TDF PK parameters are reported. |
| popPK | Souza-Silva_2023 | irrelevant | 0 | 0 | The study is an ecotoxicological evaluation of tenofovir disoproxil fumarate in a mollusk, focusing on toxicity and hemocyte activity rather than pharmacokinetic disposition parameters (clearance, volume, etc.). |
| popPK | Uglietti_2012 | irrelevant | 1 | 0 | The paper is a review of PK/PD features without providing specific original quantitative parameter values (CL, V, etc.) for tenofovir disoproxil in the provided evidence. |
| popPK | Wahl_2017 | irrelevant | 2 | 1 | The study reports concentration-time points (AUC implied by dosing and single time points) and PK-PD efficacy correlations, but does not estimate compartmental pharmacokinetic parameters (CL, V, Q, ka) or provide a population PK model for tenofovir disoproxil/tenofovir. |
| popPK | Yee_2019 | irrelevant | 0 | 0 | The study focuses on the population pharmacokinetics of doravirine, with tenofovir disoproxil only mentioned as a co-administered component in a fixed-dose combination without specific PK parameters reported for it. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 14:21 UTC</sub>
