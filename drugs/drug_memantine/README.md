<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06D&quot;,&quot;href&quot;:&quot;atc/N06D.md&quot;},{&quot;label&quot;:&quot;memantine&quot;}]"></div>

# memantine

- **generic name:** memantine
- **ATC codes:** `N06DA52`, `N06DA53`, `N06DX01`
- **DrugBank:** [DB01043](https://go.drugbank.com/drugs/DB01043) · **PubChem:** [CID 4054](https://pubchem.ncbi.nlm.nih.gov/compound/4054)
- **molar mass:** 179.3018 g/mol (C12H21N) — DrugBank
- **groups:** approved, investigational

## About

Memantine is an anti-dementia drug used to treat Alzheimer's disease and other forms of dementia, including vascular dementia. It is approved and widely used, with several products authorised in the European Union for Alzheimer's disease.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q412189](https://www.wikidata.org/wiki/Q412189) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 03:05 | 4:38 | 0/2/0 | 4/0/0 | 0/0/0 | 241,867/23,276 | ollama / glm-5.3-flash | 9 | 2/7 | 8/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Kornhuber_2007_reference](drugs/drug_memantine/Memantine_Kornhuber2007_reference.md) | — | 1-compartment (no model) | 0 | Kornhuber J et al., Memantine pharmacotherapy: a naturalist…, Clinical pharmacokinetics (2007) | [10.2165/00003088-200746070-00005](https://doi.org/10.2165/00003088-200746070-00005) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Noetzli_2013_reference](drugs/drug_memantine/Memantine_Noetzli2013_reference.md) | — | 1-compartment (no model) | 0 | Noetzli M et al., Population pharmacokinetic study of mem…, Clinical pharmacokinetics (2013) | [10.1007/s40262-013-0032-2](https://doi.org/10.1007/s40262-013-0032-2) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Karanian_2006_LDH](drugs/drug_memantine/pd_Karanian_2006_LDH.md) | 3-NP-induced cytotoxicity (lactate dehydrogenase release) ← memantine · inhibition effect | — | Karanian DA et al., 3-Nitropropionic acid toxicity in hippo…, Hippocampus (2006) | [10.1002/hipo.20214](https://doi.org/10.1002/hipo.20214) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Pereira_2021_CHIKV_replication_nanoluciferase_activity](drugs/drug_memantine/pd_Pereira_2021_CHIKV_replication_nanoluciferase_activity.md) | CHIKV replication (nanoluciferase activity) ← memantine hydrochloride (mtnH) · direct sigmoid Emax (Hill) effect | — | Pereira AKDS et al., Memantine hydrochloride: a drug to be r…, Pharmacological reports : PR (2021) | [10.1007/s43440-021-00216-4](https://doi.org/10.1007/s43440-021-00216-4) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Pereira_2021_Cell_viability_MTT_assay](drugs/drug_memantine/pd_Pereira_2021_Cell_viability_MTT_assay.md) | Cell viability (MTT assay) ← memantine hydrochloride (mtnH) · direct sigmoid Emax (Hill) effect | — | Pereira AKDS et al., Memantine hydrochloride: a drug to be r…, Pharmacological reports : PR (2021) | [10.1007/s43440-021-00216-4](https://doi.org/10.1007/s43440-021-00216-4) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Ridley_2022_inhibition](drugs/drug_memantine/pd_Ridley_2022_inhibition.md) | Inhibition of pH 6.5-evoked hASIC1a current (% inhibition) ← Memantine · direct sigmoid Emax (Hill) effect | — | Ridley J et al., Development of ASIC1a ligand-gated ion…, Frontiers in molecular neur… (2022) | [10.3389/fnmol.2022.982689](https://doi.org/10.3389/fnmol.2022.982689) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Tozzi_2007_fP_loss](drugs/drug_memantine/pd_Tozzi_2007_fP_loss.md) | irreversible loss of field potential amplitude induced by in vitro ischemia ← memantine · inhibition effect | — | Tozzi A et al., Memantine reduces neuronal dysfunctions…, Experimental neurology (2007) | [10.1016/j.expneurol.2007.06.008](https://doi.org/10.1016/j.expneurol.2007.06.008) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Tozzi_2007_fP_loss_3_NP](drugs/drug_memantine/pd_Tozzi_2007_fP_loss_3_NP.md) | irreversible field potential loss induced by 3-nitropropionic acid ← memantine · inhibition effect | — | Tozzi A et al., Memantine reduces neuronal dysfunctions…, Experimental neurology (2007) | [10.1016/j.expneurol.2007.06.008](https://doi.org/10.1016/j.expneurol.2007.06.008) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Tozzi_2007_fP_loss_Mg2_free](drugs/drug_memantine/pd_Tozzi_2007_fP_loss_Mg2_free.md) | irreversible field potential loss induced by in vitro ischemia in the absence of external magnesium ← memantine · inhibition effect | — | Tozzi A et al., Memantine reduces neuronal dysfunctions…, Experimental neurology (2007) | [10.1016/j.expneurol.2007.06.008](https://doi.org/10.1016/j.expneurol.2007.06.008) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=memantine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | kidney | `SLC22A4` unknown | DrugBank actor |
| absorption | small intestine | `SLC22A4` unknown | DrugBank actor |
| metabolism | liver | `CYP2A6` inhibitor, `CYP2B6` inhibitor, `CYP2C19` inhibitor | DrugBank actor |
| excretion | kidney | `SLC22A2` substrate, `SLC47A1` unknown | DrugBank actor |
| excretion | liver | `SLC47A1` unknown | DrugBank actor |

<sub>Actors without a tissue in the table: CHRNA7 (target), DRD2 (target), GABRA1 (binder), GRIN1 (binder), GRIN1 (target), HTR3A (target), SLC9A1 (unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 49 matched, 20 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kornhuber_2007.pdf` | Kornhuber J et al., Memantine pharmacotherapy: a naturalist…, Clinical pharmacokinetics (2007) | popPK | 10 | [10.2165/00003088-200746070-00005](https://doi.org/10.2165/00003088-200746070-00005) | [17596105](https://pubmed.ncbi.nlm.nih.gov/17596105) | Population PK (NONMEM two-compartment) study in memantine patients with the final CL/F regression equation given numerically in the abstract; other parameters (V, ka) not shown but CL values are present. |
| `Noetzli_2013.pdf` | Noetzli M et al., Population pharmacokinetic study of mem…, Clinical pharmacokinetics (2013) | popPK | 10 | [10.1007/s40262-013-0032-2](https://doi.org/10.1007/s40262-013-0032-2) | [23371894](https://pubmed.ncbi.nlm.nih.gov/23371894) | Population PK model of memantine in 108 patients with CL reported (5.2 L/h, 27% IIV); other parameters (V, covariate model coefficients) not shown in the abstract. |
| `Prieto_2014.pdf` | Prieto E et al., Vitreous pharmacokinetics and bioavaila…, Journal of ocular pharmacol… (2014) | popPK | 8 | [10.1089/jop.2013.0193](https://doi.org/10.1089/jop.2013.0193) | [24597794](https://pubmed.ncbi.nlm.nih.gov/24597794) | PK study of memantine in rabbits with compartmental model, but numeric parameters (half-life, etc.) are not given in the evidence beyond bioavailability values. |

<sub>queue written 2026-10-07T03:01:41.155105+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chapp_2019 | irrelevant | 0 | 0 | In-vitro cell study where memantine is only a co-applied NMDAR blocker; no PK parameters reported. |
| popPK | Chayrov_2022 | irrelevant | 0 | 0 | This is a synthesis/neuroprotection/solubility study of memantine derivatives with no PK disposition parameters (no CL, V, half-life, or PK model) reported. |
| popPK | Chen_2025 | irrelevant | 0 | 0 | This is an observational registry study of cognitive trajectories (MMSE) with memantine as treatment, not a PK study; no disposition parameters are reported. |
| popPK | Frölich_2019 | irrelevant | 0 | 0 | This is an efficacy/safety trial of BI 409306 (a PDE9 inhibitor), not a PK study of memantine; memantine is only mentioned as background AD therapy with no PK parameters reported. |
| popPK | Grant_2023 | irrelevant | 0 | 0 | Clinical efficacy trial of memantine with no pharmacokinetic parameters reported. |
| popPK | He_2020 | irrelevant | 0 | 0 | Medicinal chemistry study of memantine-derived compounds; no PK parameters for memantine itself. |
| popPK | Karanian_2006 | irrelevant | 0 | 0 | In vitro hippocampal slice toxicity study with no pharmacokinetic parameters for memantine; only EC50 efficacy values reported. |
| popPK | Kennedy_2018 | irrelevant | 0 | 0 | Meta-analysis of cognitive outcomes in AD trials; memantine is only a concomitant medication with no PK parameters reported. |
| popPK | Nagaeva_2015 | irrelevant | 0 | 0 | This is an in-vitro electrophysiology (patch clamp) study of memantine's effect on ASIC channels, with no pharmacokinetic disposition parameters. |
| popPK | Parsons_2000 | irrelevant | 0 | 0 | In vitro receptor-binding/antagonism study with no PK disposition parameters for memantine. |
| popPK | Peeters_2004 | irrelevant | 0 | 0 | In vitro receptor binding/pharmacology study with Ki values, no PK disposition parameters for memantine. |
| popPK | Pereira_2021 | irrelevant | 0 | 0 | In-vitro antiviral/antiviral repurposing study of memantine against CHIKV with no PK disposition parameters (CL, V, half-life, or PK model) reported. |
| popPK | Prieto_2014 | relevant | 8 | 3 | PK study of memantine in rabbits with compartmental model, but numeric parameters (half-life, etc.) are not given in the evidence beyond bioavailability values. |
| popPK | Ridley_2022 | irrelevant | 0 | 0 | This is an in-vitro automated patch clamp assay study of ASIC1a channels where memantine is only a reference antagonist; no PK parameters for memantine are reported. |
| popPK | Tozzi_2007 | irrelevant | 0 | 0 | In vitro electrophysiology study with no pharmacokinetic parameters for memantine. |
| popPK | Vaci_2021 | irrelevant | 0 | 0 | This is an observational effectiveness study of cognitive outcomes (MMSE/MoCA) with memantine as treatment, not a pharmacokinetic study; no PK parameters are reported. |
| popPK | Yang_2026 | irrelevant | 3 | 2 | This is a Phase I study of MN-08 (a memantine nitrate derivative, not memantine itself), and the evidence contains only sex-difference t-statistics/p-values and trough concentrations, not actual PK parameter values (Cmax/AUC/t1/2 numbers are not given). |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 03:01 UTC</sub>
