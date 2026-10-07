<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07B&quot;,&quot;href&quot;:&quot;atc/N07B.md&quot;},{&quot;label&quot;:&quot;nicotine&quot;}]"></div>

# nicotine

- **generic name:** nicotine
- **ATC codes:** `N07BA01`
- **DrugBank:** [DB00184](https://go.drugbank.com/drugs/DB00184) · **PubChem:** [CID 89594](https://pubchem.ncbi.nlm.nih.gov/compound/89594)
- **molar mass:** 162.2316 g/mol (C10H14N2) — DrugBank
- **groups:** approved, investigational

## About

Nicotine is used to treat nicotine dependence, helping people stop smoking. It is an approved medicine, available in products such as replacement therapies, and is also being studied for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q12144](https://www.wikidata.org/wiki/Q12144) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| nicotine | parent | 162.232 | C10H14N2 | DrugBank | [89594](https://pubchem.ncbi.nlm.nih.gov/compound/89594) | Marchand_2017, Olsson_2021, Vélez_2015 |
| cotinine | metabolite | 176.219 | C10H12N2O | PubChem | [408](https://pubchem.ncbi.nlm.nih.gov/compound/408) | Vélez_2015 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 03:48 | 9:35 | 1/4/2 | 6/0/0 | 0/0/0 | 469,106/28,816 | ollama / glm-5.3-flash | 10 | 2/8 | 9/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Vélez_2015_reference](drugs/drug_nicotine/Nicotine_Vlez2015_reference.md) | held back | 1-compartment, IV | 5 | Vélez de Mendizábal N et al., Nicotine and cotinine exposure from ele…, Clinical pharmacokinetics (2015) | [10.1007/s40262-014-0221-7](https://doi.org/10.1007/s40262-014-0221-7) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — clearance/elimination from this paper; review-gap-fill…</sub><br><sub>route_to: `human_review`</sub> | [Olsson_2021_chewing_gum](drugs/drug_nicotine/Nicotine_Olsson2021_chewing_gum.md) | — | 1-compartment (no model) | 7 | Olsson Gisleskog PO et al., Nicotine Population Pharmacokinetics in…, Clinical pharmacokinetics (2021) | [10.1007/s40262-020-00960-5](https://doi.org/10.1007/s40262-020-00960-5) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — clearance/elimination from this paper; review-gap-fill…</sub><br><sub>route_to: `human_review`</sub> | [Olsson_2021_lozenge](drugs/drug_nicotine/Nicotine_Olsson2021_lozenge.md) | — | 1-compartment (no model) | 6 | Olsson Gisleskog PO et al., Nicotine Population Pharmacokinetics in…, Clinical pharmacokinetics (2021) | [10.1007/s40262-020-00960-5](https://doi.org/10.1007/s40262-020-00960-5) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C7 apparent-parameter coherence violated (double correction)</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Marchand_2017_reference](drugs/drug_nicotine/Nicotine_Marchand2017_reference.md) | — | 2-compartment (no model) | 12 | Marchand M et al., Nicotine Population Pharmacokinetics in…, European journal of drug me… (2017) | [10.1007/s13318-017-0405-2](https://doi.org/10.1007/s13318-017-0405-2) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Olsson_2021_estimate](drugs/drug_nicotine/Nicotine_Olsson2021_estimate.md) | — | 2-compartment (no model) | 13 | Olsson Gisleskog PO et al., Nicotine Population Pharmacokinetics in…, Clinical pharmacokinetics (2021) | [10.1007/s40262-020-00960-5](https://doi.org/10.1007/s40262-020-00960-5) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Olsson_2021_inhaler](drugs/drug_nicotine/Nicotine_Olsson2021_inhaler.md) | — | 1-compartment (no model) | 7 | Olsson Gisleskog PO et al., Nicotine Population Pharmacokinetics in…, Clinical pharmacokinetics (2021) | [10.1007/s40262-020-00960-5](https://doi.org/10.1007/s40262-020-00960-5) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Olsson_2021_mouth_spray](drugs/drug_nicotine/Nicotine_Olsson2021_mouth_spray.md) | — | 1-compartment (no model) | 6 | Olsson Gisleskog PO et al., Nicotine Population Pharmacokinetics in…, Clinical pharmacokinetics (2021) | [10.1007/s40262-020-00960-5](https://doi.org/10.1007/s40262-020-00960-5) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Beani_1985_3H_efflux](drugs/drug_nicotine/pd_Beani_1985_3H_efflux.md) | 3H-efflux from electrically-stimulated cortical slices (S2/S1 ratio) ← nicotine · stimulation effect | — | Beani L et al., The effect of nicotine and cytisine on…, Naunyn-Schmiedeberg's archi… (1985) | [10.1007/BF00634252](https://doi.org/10.1007/BF00634252) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Buisson_2001_peak_current](drugs/drug_nicotine/pd_Buisson_2001_peak_current.md) | Nicotine-evoked peak current amplitude (biphasic dose-response in K-177 cells expressing human α4β2 nAChRs) ← nicotine · direct sigmoid Emax (Hill) effect | — | Buisson B et al., Chronic exposure to nicotine upregulate…, The Journal of neuroscience… (2001) | [10.1523/JNEUROSCI.21-06-01819.2001](https://doi.org/10.1523/JNEUROSCI.21-06-01819.2001) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Guo_2026_4_2_nAChR_activation](drugs/drug_nicotine/pd_Guo_2026_4_2_nAChR_activation.md) | α4β2 nAChR activation ← nicotine · stimulation effect | — | Guo X et al., Anatabine: a substitute for the medicin…, European journal of pharmac… (2026) | [10.1016/j.ejphar.2026.178537](https://doi.org/10.1016/j.ejphar.2026.178537) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Huang_2022_peak_current](drugs/drug_nicotine/pd_Huang_2022_peak_current.md) | nicotine-induced inward whole-cell current (peak amplitude) in α4β2-nAChR-expressing SH-EP1 cells ← nicotine · direct sigmoid Emax (Hill) effect | — | Huang YB et al., Levo-tetrahydropalmatine inhibits α4β2…, Acta pharmacologica Sinica (2022) | [10.1038/s41401-021-00709-1](https://doi.org/10.1038/s41401-021-00709-1) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Huang_2022_peak_current_l_THP](drugs/drug_nicotine/pd_Huang_2022_peak_current_l_THP.md) | nicotine-induced inward whole-cell current (peak amplitude) in the presence of 30 µM l-THP ← nicotine · direct sigmoid Emax (Hill) effect | — | Huang YB et al., Levo-tetrahydropalmatine inhibits α4β2…, Acta pharmacologica Sinica (2022) | [10.1038/s41401-021-00709-1](https://doi.org/10.1038/s41401-021-00709-1) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Livett_1983_CA_release](drugs/drug_nicotine/pd_Livett_1983_CA_release.md) | catecholamine release evoked by nicotine ← nicotine · direct Emax (saturable) effect | — | Livett BG et al., Use of isolated chromaffin cells to stu…, Journal of the autonomic ne… (1983) | [10.1016/0165-1838(83)90069-3](https://doi.org/10.1016/0165-1838(83)90069-3) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Porchet_1988_HR](drugs/drug_nicotine/pd_Porchet_1988_HR.md) | heart rate ← nicotine · stimulation effect | — | Porchet HC et al., Pharmacodynamic model of tolerance: app…, The Journal of pharmacology… (1988) | — |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=nicotine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | kidney | `SLC22A4` inhibitor, `SLC22A5` inhibitor | DrugBank actor |
| absorption | skeletal muscle | `SLC22A5` inhibitor | DrugBank actor |
| absorption | small intestine | `SLC22A4` inhibitor, `SLC22A5` inhibitor | DrugBank actor |
| distribution | liver | `SLC22A3` inhibitor | DrugBank actor |
| distribution | placenta | `SLC22A3` inhibitor | DrugBank actor |
| distribution | skeletal muscle | `SLC22A3` inhibitor | DrugBank actor |
| metabolism | brain | `CYP2D6` substrate, `MAOA` inhibitor, `MAOB` inhibitor | DrugBank actor |
| metabolism | liver | `CYP1A2` inducer/substrate, `CYP2A6` inhibitor/substrate, `CYP2B6` substrate, `CYP2C19` substrate, `CYP2C8` substrate, `CYP2C9` substrate, `CYP2D6` substrate, `CYP2E1` inducer/inhibitor/substrate, `CYP3A4` substrate, `MAOA` inhibitor, `SLC22A1` inhibitor | DrugBank actor |
| metabolism | lung | `CYP1A1` inducer/substrate | DrugBank actor |
| metabolism | platelet | `MAOB` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP1A1` inducer/substrate, `CYP3A4` substrate, `MAOA` inhibitor | DrugBank actor |
| excretion | kidney | `SLC22A2` inhibitor | DrugBank actor |
| — | adipose tissue | `CYP19A1` inhibitor | DrugBank actor |
| — | ovary | `CYP19A1` inhibitor | DrugBank actor |
| — | testis | `CYP19A1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: CHAT (inhibitor), CHRNA10 (target), CHRNA2 (target), CHRNA3 (target), CHRNA4 (target), CHRNA5 (target), CHRNA6 (target), CHRNA7 (target), CHRNA9 (target), CHRNB2 (target), CHRNB3 (target), CHRNB4 (target), CYP2A13 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 453 matched, 20 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 7  ·  extracted 1  ·  needs_review 2  ·  rejected 4  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Linakis_2017.pdf` | Linakis MW et al., Population pharmacokinetic model of tra…, British journal of clinical… (2017) | popPK | 10 | [10.1111/bcp.13393](https://doi.org/10.1111/bcp.13393) | [28771779](https://pubmed.ncbi.nlm.nih.gov/28771779) | Population PK model of transdermal nicotine in 25 humans, but only qualitative results (scaling factor 1.42) appear; parameter values likely in tables/supplementary not provided. |
| `Porchet_1988.pdf` | Porchet HC et al., Pharmacodynamic model of tolerance: app…, The Journal of pharmacology… (1988) | popPK | 7 | not captured | [3336000](https://pubmed.ncbi.nlm.nih.gov/3336000) | Human i.v. nicotine PK-PD tolerance model with quantitative parameters (kantO, Cant50), but numeric PK disposition values (CL, V) are not shown in the abstract evidence. |

<sub>queue written 2026-10-07T03:40:03.693456+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Beani_1985 | irrelevant | 0 | 0 | In-vitro pharmacodynamic study of nicotine on acetylcholine release in guinea-pig brain slices; no PK disposition parameters reported. |
| popPK | Buisson_2001 | irrelevant | 0 | 0 | In vitro electrophysiology study of nAChR upregulation in HEK cells; no PK disposition parameters (CL, V, half-life) for nicotine are reported. |
| popPK | Costa_2026 | irrelevant | 0 | 0 | This is a pharmacodynamic study of IV nicotine's subjective and cardiovascular effects; no PK disposition parameters (CL, V, half-life, PK model) are reported, and no numeric PK values appear. |
| popPK | Flanigan_2024 | irrelevant | 0 | 0 | This is a cardiovascular physiology study in rats with nicotine exposure; no PK parameters (CL, V, half-life, model) are reported. |
| popPK | Guo_2026 | irrelevant | 0 | 0 | A review of anatabine's pharmacology with receptor-binding EC50 values, no PK disposition parameters for nicotine. |
| popPK | Herr_2014 | irrelevant | 0 | 0 | Nicotine is only mentioned as a risk factor in vulvar cancer pathogenesis; no PK parameters or data are present. |
| popPK | Huang_2022 | irrelevant | 0 | 0 | This is an in-vitro electrophysiology study of l-THP inhibition of α4β2-nAChRs; nicotine is only an agonist probe, with no PK disposition parameters (CL, V, ka, half-life, or PK model) reported. |
| popPK | Johnstone_2022 | irrelevant | 0 | 0 | Clinical study of varenicline's effects on craving/withdrawal; no nicotine PK parameters reported. |
| popPK | Linakis_2017 | relevant | 10 | 3 | Population PK model of transdermal nicotine in 25 humans, but only qualitative results (scaling factor 1.42) appear; parameter values likely in tables/supplementary not provided. |
| popPK | Livett_1983 | irrelevant | 0 | 0 | In vitro chromaffin cell study where nicotine is only a receptor agonist probe; no PK disposition parameters for nicotine. |
| popPK | Moore_2024 | relevant | 5 | 3 | A compartmental model with first-order rate constants for nicotine skin disposition (nicotine patch) is presented, but the numeric best-fit values are largely garbled or reside in figures/tables not fully provided; only k3 = 0.2 h−1 is readable. |
| popPK | Nian_2026 | irrelevant | 0 | 0 | Behavioral survey study of ENDS use and smoking cessation; no pharmacokinetic parameters for nicotine are reported. |
| popPK | Porchet_1988 | relevant | 7 | 3 | Human i.v. nicotine PK-PD tolerance model with quantitative parameters (kantO, Cant50), but numeric PK disposition values (CL, V) are not shown in the abstract evidence. |
| popPK | Ravva_2015 | irrelevant | 0 | 0 | The PK model and parameters are for varenicline, not nicotine; no nicotine disposition values are reported. |
| popPK | Wall_2017 | irrelevant | 0 | 0 | PK parameters (half-life, bioavailability) are reported for TC299423, a novel nAChR agonist, not for nicotine; nicotine is only a comparator. |
| popPK | Wang_2022 | irrelevant | 0 | 0 | This is an epidemiological exposure-response study of smoking/vaping and birth outcomes with no PK parameters (CL, V, ka, half-life, or compartmental model) for nicotine. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 03:40 UTC</sub>
