<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R01A&quot;,&quot;href&quot;:&quot;atc/R01A.md&quot;},{&quot;label&quot;:&quot;azelastine&quot;}]"></div>

# azelastine

- **generic name:** azelastine
- **ATC codes:** `R01AC03`, `R06AX19`, `S01GX07`
- **DrugBank:** [DB00972](https://go.drugbank.com/drugs/DB00972) · **PubChem:** [CID 2267](https://pubchem.ncbi.nlm.nih.gov/compound/2267)
- **molar mass:** 381.898 g/mol (C22H24ClN3O) — DrugBank
- **groups:** approved, investigational

## About

Azelastine is an antihistamine used for allergic conditions such as seasonal allergic rhinitis, vasomotor rhinitis, sinusitis, and giant papillary conjunctivitis. It is an approved medicine, available as nasal, eye, and systemic antihistamine preparations, and is used widely for allergy treatment.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q419820](https://www.wikidata.org/wiki/Q419820) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| azelastine | parent | 381.898 | C22H24ClN3O | DrugBank | [2267](https://pubchem.ncbi.nlm.nih.gov/compound/2267) | Dings_2022 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 12:41 | 3:43 | 0/0/1 | 7/0/0 | 0/0/0 | 280,505/17,548 | ollama / glm-5.3-flash | 6 | 1/5 | 6/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q22 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Dings_2022_reference](drugs/drug_azelastine/Azelastine_Dings2022_reference.md) | — | 1-compartment (no model) | 3 | Dings C et al., Pharmacometric Modeling of the Impact o…, Pharmaceutics (2022) | [10.3390/pharmaceutics14102059](https://doi.org/10.3390/pharmaceutics14102059) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Ge_2021_KD](drugs/drug_azelastine/pd_Ge_2021_KD.md) | azelastine binding to ACE2 (SPR equilibrium dissociation constant) ← azelastine · model not identified | — | Ge S et al., Azelastine inhibits viropexis of SARS-C…, Virology (2021) | [10.1016/j.virol.2021.05.009](https://doi.org/10.1016/j.virol.2021.05.009) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Ge_2021_SARS_CoV_2_spike_pseudovirus_entry_luciferase_activity_inhibition_of_viropexis](drugs/drug_azelastine/pd_Ge_2021_SARS_CoV_2_spike_pseudovirus_entry_luciferase_activi.md) | SARS-CoV-2 spike pseudovirus entry (luciferase activity, % inhibition of viropexis) ← azelastine · direct sigmoid Emax (Hill) effect | — | Ge S et al., Azelastine inhibits viropexis of SARS-C…, Virology (2021) | [10.1016/j.virol.2021.05.009](https://doi.org/10.1016/j.virol.2021.05.009) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Girard_1996_PS_amplitude_recovery](drugs/drug_azelastine/pd_Girard_1996_PS_amplitude_recovery.md) | CA1 antidromic population spike amplitude recovery after fluid percussion trauma ← azelastine · stimulation effect | — | Girard J et al., Azelastine protects against CA1 traumat…, European journal of pharmac… (1996) | [10.1016/0014-2999(95)00804-7](https://doi.org/10.1016/0014-2999(95)00804-7) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Konrat_2022_viral_RNA_inhibition](drugs/drug_azelastine/pd_Konrat_2022_viral_RNA_inhibition.md) | SARS-CoV-2 viral RNA copy number (percent inhibition of infection relative to virus-only control) ← azelastine-HCl · direct sigmoid Emax (Hill) effect | — | Konrat R et al., The Anti-Histamine Azelastine, Identifi…, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.861295](https://doi.org/10.3389/fphar.2022.861295) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Li_2001_ICa_L](drugs/drug_azelastine/pd_Li_2001_ICa_L.md) | L-type Ca2+ current (ICa,L) blockade ← azelastine · direct sigmoid Emax (Hill) effect | — | Li S et al., Effects of azelastine on contractility,…, European journal of pharmac… (2001) | [10.1016/s0014-2999(01)00923-2](https://doi.org/10.1016/s0014-2999(01)00923-2) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Li_2001_low_voltage_activated_Ca2_current_blockade](drugs/drug_azelastine/pd_Li_2001_low_voltage_activated_Ca2_current_blockade.md) | low-voltage-activated Ca2+ current blockade ← azelastine · direct sigmoid Emax (Hill) effect | — | Li S et al., Effects of azelastine on contractility,…, European journal of pharmac… (2001) | [10.1016/s0014-2999(01)00923-2](https://doi.org/10.1016/s0014-2999(01)00923-2) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Peniche_2020_parasite_burden_L_major_ex_vivo_lymph_node_explant_luminometry](drugs/drug_azelastine/pd_Peniche_2020_parasite_burden_L_major_ex_vivo_lymph_node_expl.md) | parasite burden (L. major, ex vivo lymph node explant, luminometry) ← azelastine · inhibition effect | — | Peniche AG et al., Efficacy of histamine H1 receptor antag…, PLoS neglected tropical dis… (2020) | [10.1371/journal.pntd.0008482](https://doi.org/10.1371/journal.pntd.0008482) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Wallis_1993_CA1_population_spike_amplitude_recovery_after_hypoxic_injury](drugs/drug_azelastine/pd_Wallis_1993_CA1_population_spike_amplitude_recovery_after_hy.md) | CA1 population spike amplitude recovery after hypoxic injury ← azelastine · stimulation effect | — | Wallis RA et al., Protection from hypoxic and N-methyl-D-…, European journal of pharmac… (1993) | [10.1016/0014-2999(93)90844-8](https://doi.org/10.1016/0014-2999(93)90844-8) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Yang_2021_MERS_CoV_infectivity](drugs/drug_azelastine/pd_Yang_2021_MERS_CoV_infectivity.md) | MERS-CoV S pseudovirus infection (luciferase, % of control) ← azelastine · direct sigmoid Emax (Hill) effect | — | Yang L et al., Identification of SARS-CoV-2 entry inhi…, Acta pharmacologica Sinica (2021) | [10.1038/s41401-020-00556-6](https://doi.org/10.1038/s41401-020-00556-6) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Yang_2021_SARS2_S_infectivity](drugs/drug_azelastine/pd_Yang_2021_SARS2_S_infectivity.md) | SARS2-S pseudovirus infection (luciferase, % of control) ← azelastine · direct sigmoid Emax (Hill) effect | — | Yang L et al., Identification of SARS-CoV-2 entry inhi…, Acta pharmacologica Sinica (2021) | [10.1038/s41401-020-00556-6](https://doi.org/10.1038/s41401-020-00556-6) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Yang_2021_SARS_CoV_infectivity](drugs/drug_azelastine/pd_Yang_2021_SARS_CoV_infectivity.md) | SARS-CoV S pseudovirus infection (luciferase, % of control) ← azelastine · direct sigmoid Emax (Hill) effect | — | Yang L et al., Identification of SARS-CoV-2 entry inhi…, Acta pharmacologica Sinica (2021) | [10.1038/s41401-020-00556-6](https://doi.org/10.1038/s41401-020-00556-6) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=azelastine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2A6` inhibitor/substrate, `CYP2B6` inhibitor, `CYP2C19` inhibitor/substrate, `CYP2C8` substrate, `CYP2C9` inhibitor/substrate, `CYP2D6` inhibitor/substrate, `CYP2E1` inhibitor, `CYP3A4` inhibitor/substrate, `CYP3A5` substrate | DrugBank actor |
| metabolism | lung | `CYP1A1` inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP1A1` inhibitor/substrate, `CYP3A4` inhibitor/substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: HRH1 (target), HRH2 (inhibitor), LTC4S (inhibitor), PLA2G1B (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Adusumalli_1992.pdf` | Adusumalli VE et al., Pharmacokinetics of azelastine and its…, Drug metabolism and disposi… (1992) | popPK | 8 | not captured | [1356730](https://pubmed.ncbi.nlm.nih.gov/1356730) | Compartmental PK modeling of azelastine and its metabolite in guinea pigs, but numeric parameters (V, CL, ka, half-lives) are only partially given (F=0.19, ratios); full values likely in tables/figures not provided. |

<sub>queue written 2026-10-07T12:38:02.977701+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adusumalli_1992 | relevant | 8 | 4 | Compartmental PK modeling of azelastine and its metabolite in guinea pigs, but numeric parameters (V, CL, ka, half-lives) are only partially given (F=0.19, ratios); full values likely in tables/figures not provided. |
| popPK | Ge_2021 | irrelevant | 0 | 0 | In vitro antiviral mechanism study (ACE2 binding, pseudovirus entry) with no PK disposition parameters for azelastine. |
| popPK | Girard_1996 | irrelevant | 0 | 0 | This is a neuroprotection pharmacology study with no PK disposition parameters for azelastine. |
| popPK | Kamikawa_1993 | irrelevant | 0 | 0 | In-vitro pharmacodynamic study of antihistaminic activity in guinea-pig airway; no PK disposition parameters reported. |
| popPK | Konrat_2022 | irrelevant | 0 | 0 | In vitro antiviral study of azelastine against SARS-CoV-2 with no pharmacokinetic disposition parameters (CL, V, ka, half-life, or PK model) reported. |
| popPK | Li_2001 | irrelevant | 0 | 0 | In-vitro electrophysiology/pharmacodynamics study with no PK disposition parameters for azelastine. |
| popPK | Peniche_2020 | irrelevant | 0 | 0 | This is an anti-leishmanial efficacy study of azelastine with EC50/CC50 values but no PK disposition parameters (CL, V, ka, t1/2 with volume, or PK model). |
| popPK | Sousa-Pinto_2022 | irrelevant | 0 | 0 | Real-world effectiveness study of allergic rhinitis treatments using app symptom data; no PK parameters for azelastine are reported. |
| popPK | Tamaoki_1991 | irrelevant | 0 | 0 | In-vitro Ussing chamber mechanistic study of azelastine's pharmacodynamic antagonism of histamine; no PK disposition parameters reported. |
| popPK | Wallis_1993 | irrelevant | 0 | 0 | In-vitro hippocampal slice neuroprotection study with no PK disposition parameters for azelastine. |
| popPK | Yang_2021 | irrelevant | 0 | 0 | In-vitro antiviral screening study; azelastine is a hit compound with EC50/CC50 values but no pharmacokinetic disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 12:38 UTC</sub>
