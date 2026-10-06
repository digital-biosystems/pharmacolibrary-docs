<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05C&quot;,&quot;href&quot;:&quot;atc/N05C.md&quot;},{&quot;label&quot;:&quot;flunitrazepam&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Flunitrazepam_GmezSegura2022_reference&quot;,&quot;label&quot;:&quot;G\u00f3mez-Segura_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_flunitrazepam/Flunitrazepam_GmezSegura2022_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Flunitrazepam_Han2025_reference&quot;,&quot;label&quot;:&quot;Han_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_flunitrazepam/Flunitrazepam_Han2025_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# flunitrazepam

- **generic name:** flunitrazepam
- **ATC codes:** `N05CD03`
- **DrugBank:** [DB01544](https://go.drugbank.com/drugs/DB01544) · **PubChem:** [CID 3380](https://pubchem.ncbi.nlm.nih.gov/compound/3380)
- **molar mass:** 313.2832 g/mol (C16H12FN3O3) — DrugBank
- **groups:** approved, illicit

## About

Flunitrazepam is a benzodiazepine sedative used as a hypnotic for insomnia and as an anxiolytic. It remains an approved medicine in some countries but is tightly controlled, and its misuse as an illicit drug has led to restrictions or withdrawal in many places.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q62947](https://www.wikidata.org/wiki/Q62947) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| flunitrazepam | parent | 313.283 | C16H12FN3O3 | DrugBank | [3380](https://pubchem.ncbi.nlm.nih.gov/compound/3380) | Kangas_1982 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 20:51 | 23:25 | 2/2/1 | 9/0/0 | 0/0/0 | 760,069/42,349 | ollama / glm-5.3-flash | 13 | 2/9 | 13/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span> | [Gómez-Segura_2022_reference](drugs/drug_flunitrazepam/Flunitrazepam_GmezSegura2022_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Gómez-Segura L et al., Swine as the Animal Model for Testing N…, Pharmaceutics (2022) | [10.3390/pharmaceutics14051045](https://doi.org/10.3390/pharmaceutics14051045) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">in vitro</span> | [Han_2025_reference](drugs/drug_flunitrazepam/Flunitrazepam_Han2025_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Han S et al., Wedelolactone, a natural coumestan with…, Frontiers in pharmacology (2025) | [10.3389/fphar.2025.1670032](https://doi.org/10.3389/fphar.2025.1670032) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — clearance/elimination from this paper; review-gap-fill…</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Kangas_1982_reference](drugs/drug_flunitrazepam/Flunitrazepam_Kangas1982_reference.md) | — | 1-compartment (no model) | 4 | Kangas L et al., A pharmacokinetic and pharmacodynamic s…, International journal of cl… (1982) | — |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Franken_2016_reference](drugs/drug_flunitrazepam/Flunitrazepam_Franken2016_reference.md) | — | 2-compartment (no model) | 4 | Franken LG et al., Pharmacokinetics of Morphine, Morphine-…, Clinical pharmacokinetics (2016) | [10.1007/s40262-015-0345-4](https://doi.org/10.1007/s40262-015-0345-4) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Wickstrøm_1980_reference](drugs/drug_flunitrazepam/Flunitrazepam_Wickstrm1980_reference.md) | — | 1-compartment (no model) | 0 | Wickstrøm E et al., Pharmacokinetic and clinical observatio…, European journal of clinica… (1980) | [10.1007/BF00561899](https://doi.org/10.1007/BF00561899) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Bareggi_1998_attention](drugs/drug_flunitrazepam/pd_Bareggi_1998_attention.md) | attention impairment (Z-score) ← flunitrazepam · direct Emax (saturable) effect | — | Bareggi SR et al., Impairment of memory and plasma flunitr…, Psychopharmacology (1998) | [10.1007/s002130050753](https://doi.org/10.1007/s002130050753) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Bareggi_1998_prose](drugs/drug_flunitrazepam/pd_Bareggi_1998_prose.md) | prose delayed recall impairment (Z-score) ← flunitrazepam · direct Emax (saturable) effect | — | Bareggi SR et al., Impairment of memory and plasma flunitr…, Psychopharmacology (1998) | [10.1007/s002130050753](https://doi.org/10.1007/s002130050753) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Bareggi_1998_trigrams](drugs/drug_flunitrazepam/pd_Bareggi_1998_trigrams.md) | trigrams delayed recall impairment (Z-score) ← flunitrazepam · direct Emax (saturable) effect | — | Bareggi SR et al., Impairment of memory and plasma flunitr…, Psychopharmacology (1998) | [10.1007/s002130050753](https://doi.org/10.1007/s002130050753) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Danhof_1992_EEG_amplitude_12_30_Hz](drugs/drug_flunitrazepam/pd_Danhof_1992_EEG_amplitude_12_30_Hz.md) | amplitudes in the 12-30 Hz frequency band of the EEG ← flunitrazepam · direct sigmoid Emax (Hill) effect | — | Danhof M et al., Modelling of the pharmacodynamics and p…, International journal of cl… (1992) | — |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Hoogerkamp_1996_anticonvulsant_effect_seizure_threshold_in_direct_cortical_stimulation_model](drugs/drug_flunitrazepam/pd_Hoogerkamp_1996_anticonvulsant_effect_seizure_threshold_in_d.md) | anticonvulsant effect (seizure threshold in direct cortical stimulation model) ← flunitrazepam · direct sigmoid Emax (Hill) effect | — | Hoogerkamp A et al., Pharmacokinetic/pharmacodynamic relatio…, The Journal of pharmacology… (1996) | — |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Horne_1993_GABA_response](drugs/drug_flunitrazepam/pd_Horne_1993_GABA_response.md) | GABA concentration-response (whole-cell current) potentiation by flunitrazepam ← flunitrazepam · direct sigmoid Emax (Hill) effect | — | Horne AL et al., The influence of the gamma 2L subunit o…, British journal of pharmaco… (1993) | [10.1111/j.1476-5381.1993.tb12866.x](https://doi.org/10.1111/j.1476-5381.1993.tb12866.x) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Mandema_1991_EEG_effect](drugs/drug_flunitrazepam/pd_Mandema_1991_EEG_effect.md) | EEG amplitude in the 11.5 to 30 Hz frequency range ← flunitrazepam · direct sigmoid Emax (Hill) effect | — | Mandema JW et al., Pharmacokinetic-pharmacodynamic modelin…, The Journal of pharmacology… (1991) | — |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Perillo_1999_3H_FNTZ_binding](drugs/drug_flunitrazepam/pd_Perillo_1999_3H_FNTZ_binding.md) | [3H]flunitrazepam specific binding to GABAA receptor ← flunitrazepam · model not identified | — | Perillo MA et al., Tagetone modulates the coupling of flun…, Molecular membrane biology (1999) | [10.1080/096876899294652](https://doi.org/10.1080/096876899294652) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Wafford_1993_Potentiation_of_GABA_evoked_current_alpha_1_beta_1_gamma_2L](drugs/drug_flunitrazepam/pd_Wafford_1993_Potentiation_of_GABA_evoked_current_alpha_1_bet.md) | Potentiation of GABA-evoked current (alpha 1 beta 1 gamma 2L) ← flunitrazepam · direct Emax (saturable) effect | — | Wafford KA et al., Differences in affinity and efficacy of…, Molecular pharmacology (1993) | — |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Wafford_1993_Potentiation_of_GABA_evoked_current_alpha_3_beta_1_gamma_2L](drugs/drug_flunitrazepam/pd_Wafford_1993_Potentiation_of_GABA_evoked_current_alpha_3_bet.md) | Potentiation of GABA-evoked current (alpha 3 beta 1 gamma 2L) ← flunitrazepam · direct Emax (saturable) effect | — | Wafford KA et al., Differences in affinity and efficacy of…, Molecular pharmacology (1993) | — |
| <span class="pk-badge pk-badge--green">extracted</span> | [Youdim_2008_IC50](drugs/drug_flunitrazepam/pd_Youdim_2008_IC50.md) | CYP inhibition (IC50 determination for flunitrazepam against CYP1A2, CYP2C9, CYP2C19, CYP2D6 and CYP3A4) ← flunitrazepam · inhibition effect | — | Youdim KA et al., An automated, high-throughput, 384 well…, Journal of pharmaceutical a… (2008) | [10.1016/j.jpba.2008.05.011](https://doi.org/10.1016/j.jpba.2008.05.011) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">mouse</span> | [Zavala_1984_3H_flunitrazepam_binding_to_mouse_peritoneal_macrophages](drugs/drug_flunitrazepam/pd_Zavala_1984_3H_flunitrazepam_binding_to_mouse_peritoneal_mac.md) | [3H]flunitrazepam binding to mouse peritoneal macrophages ← flunitrazepam · inhibition effect | — | Zavala F et al., Interaction of benzodiazepines with mou…, European journal of pharmac… (1984) | [10.1016/0014-2999(84)90059-1](https://doi.org/10.1016/0014-2999(84)90059-1) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=flunitrazepam) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | kidney | `UGT2B7` inhibitor | DrugBank actor |
| metabolism | liver | `CYP2A6` substrate, `CYP2B6` substrate, `CYP2C19` substrate, `CYP2C9` substrate, `CYP2E1` inhibitor, `CYP3A4` substrate, `UGT1A1` inhibitor, `UGT1A3` inhibitor, `UGT2B7` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `UGT1A1` inhibitor, `UGT2B7` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: GABRA1 (positive allosteric modulator), GABRA1 (target), TSPO (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 499 matched, 141 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 5  ·  extracted 2  ·  needs_review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_42 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kangas_1982.pdf` | Kangas L et al., A pharmacokinetic and pharmacodynamic s…, International journal of cl… (1982) | popPK | 10 | not captured | [6130046](https://pubmed.ncbi.nlm.nih.gov/6130046) | Human IV flunitrazepam PK with three-compartment volumes, half-life, and clearance reported numerically in the abstract. |
| `Cano_1977.pdf` | Cano JP et al., Bioavailability from various galenic fo…, Arzneimittel-Forschung (1977) | popPK | 8 | not captured | [23801](https://pubmed.ncbi.nlm.nih.gov/23801) | Human PK study of flunitrazepam with a three-compartment model, but only qualitative compartment ratios and bioavailability figures are given; no CL/V/ka numeric values appear (likely in the full paper/figures). |
| `Kanto_1981.pdf` | Kanto J et al., Effect of age on the pharmacokinetics a…, International journal of cl… (1981) | popPK | 8 | not captured | [6117521](https://pubmed.ncbi.nlm.nih.gov/6117521) | Human IV flunitrazepam PK with two-compartment model, but no numeric parameter values are present in the evidence. |
| `Mandema_1991.pdf` | Mandema JW et al., Pharmacokinetic-pharmacodynamic modelin…, The Journal of pharmacology… (1991) | popPK | 7 | not captured | [1850477](https://pubmed.ncbi.nlm.nih.gov/1850477) | PK-PD modeling of flunitrazepam in rats with some numeric values (EC50) present, but disposition parameters (CL, V) are not shown in the evidence and likely reside in figures/tables not provided. |
| `Wickstrøm_1980.pdf` | Wickstrøm E et al., Pharmacokinetic and clinical observatio…, European journal of clinica… (1980) | popPK | 7 | [10.1007/BF00561899](https://doi.org/10.1007/BF00561899) | [6102520](https://pubmed.ncbi.nlm.nih.gov/6102520) | Human PK study of flunitrazepam with a three-compartment model and beta half-life (20–36 h) reported, but no CL/V values are given numerically. |
| `Sumirtapura_1981.pdf` | Sumirtapura Y et al., [Clinical pharmacokinetics of flunitraz…, Annales de l'anesthesiologi… (1981) | popPK | 6 | not captured | [6115606](https://pubmed.ncbi.nlm.nih.gov/6115606) | Human ICU flunitrazepam PK with a three-compartment model, but no numeric parameter values (CL, V, half-lives) are given in the evidence. |
| `Danhof_1992.pdf` | Danhof M et al., Modelling of the pharmacodynamics and p…, International journal of cl… (1992) | pd | 5 | not captured | [1490817](https://www.ncbi.nlm.nih.gov/pubmed/1490817) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Squires_1990.pdf` | Squires RF et al., Development of benzodiazepine and picro…, Journal of neurochemistry (1990) | pd | 5 | [10.1111/j.1471-4159.1990.tb01896.x](https://doi.org/10.1111/j.1471-4159.1990.tb01896.x) | [2299347](https://www.ncbi.nlm.nih.gov/pubmed/2299347) | metadata signals extractable PD data (IC50) |
| `Tietz_1989.pdf` | Tietz EI et al., Regional GABA/benzodiazepine receptor/c…, European journal of pharmac… (1989) | pd | 5 | [10.1016/0014-2999(89)90747-4](https://doi.org/10.1016/0014-2999(89)90747-4) | [2476326](https://www.ncbi.nlm.nih.gov/pubmed/2476326) | metadata signals extractable PD data (Emax) |
| `Williamson_1998.pdf` | Williamson AV et al., Properties of GABA(A) receptors in cult…, Neuropharmacology (1998) | pd | 5 | [10.1016/s0028-3908(98)00016-1](https://doi.org/10.1016/s0028-3908(98)00016-1) | [9776382](https://www.ncbi.nlm.nih.gov/pubmed/9776382) | metadata signals extractable PD data (EC50) |
| `Zavala_1984.pdf` | Zavala F et al., Interaction of benzodiazepines with mou…, European journal of pharmac… (1984) | pd | 5 | [10.1016/0014-2999(84)90059-1](https://doi.org/10.1016/0014-2999(84)90059-1) | [6151510](https://www.ncbi.nlm.nih.gov/pubmed/6151510) | metadata signals extractable PD data (IC50) |
| `Bareggi_1998.pdf` | Bareggi SR et al., Impairment of memory and plasma flunitr…, Psychopharmacology (1998) | pd | 4 | [10.1007/s002130050753](https://doi.org/10.1007/s002130050753) | [9860106](https://www.ncbi.nlm.nih.gov/pubmed/9860106) | metadata signals extractable PD data (Emax) |
| `Brown_1997.pdf` | Brown MJ et al., Measurement of GABAA receptor function…, British journal of pharmaco… (1997) | pd | 4 | [10.1038/sj.bjp.0701106](https://doi.org/10.1038/sj.bjp.0701106) | [9146889](https://www.ncbi.nlm.nih.gov/pubmed/9146889) | metadata signals extractable PD data (EC50) |
| `Bruner_1998.pdf` | Bruner KR et al., Propofol modulation of [3H]flunitrazepa…, Brain research (1998) | pd | 4 | [10.1016/s0006-8993(98)00758-6](https://doi.org/10.1016/s0006-8993(98)00758-6) | [9739122](https://www.ncbi.nlm.nih.gov/pubmed/9739122) | metadata signals extractable PD data (EC50) |
| `Grahnén_1991.pdf` | Grahnén A et al., Inter- and intraindividual variability…, British journal of clinical… (1991) | pd | 4 | [10.1111/j.1365-2125.1991.tb03862.x](https://doi.org/10.1111/j.1365-2125.1991.tb03862.x) | [2015176](https://www.ncbi.nlm.nih.gov/pubmed/2015176) | metadata signals extractable PD data (concentration-effect) |
| `Green_1996.pdf` | Green AR et al., A behavioural and neurochemical study i…, Neuropharmacology (1996) | pd | 4 | [10.1016/s0028-3908(96)00060-3](https://doi.org/10.1016/s0028-3908(96)00060-3) | [9014139](https://www.ncbi.nlm.nih.gov/pubmed/9014139) | metadata signals extractable PD data (IC50) |
| `Horne_1993.pdf` | Horne AL et al., The influence of the gamma 2L subunit o…, British journal of pharmaco… (1993) | pd | 4 | [10.1111/j.1476-5381.1993.tb12866.x](https://doi.org/10.1111/j.1476-5381.1993.tb12866.x) | [8385534](https://www.ncbi.nlm.nih.gov/pubmed/8385534) | metadata signals extractable PD data (EC50) |
| `Malatynska_2000.pdf` | Malatynska E et al., Effects of treatment with GABA(A) recep…, Neurochemistry international (2000) | pd | 4 | [10.1016/s0197-0186(99)00100-x](https://doi.org/10.1016/s0197-0186(99)00100-x) | [10566958](https://www.ncbi.nlm.nih.gov/pubmed/10566958) | metadata signals extractable PD data (Emax) |
| `Nielsen_1988.pdf` | Nielsen M et al., High affinity of the naturally-occurrin…, Biochemical pharmacology (1988) | pd | 4 | [10.1016/0006-2952(88)90640-5](https://doi.org/10.1016/0006-2952(88)90640-5) | [2840912](https://www.ncbi.nlm.nih.gov/pubmed/2840912) | metadata signals extractable PD data (IC50) |
| `Ortiz_1999.pdf` | Ortiz JG et al., Effects of Valeriana officinalis extrac…, Neurochemical research (1999) | pd | 4 | [10.1023/a:1022576405534](https://doi.org/10.1023/a:1022576405534) | [10555777](https://www.ncbi.nlm.nih.gov/pubmed/10555777) | metadata signals extractable PD data (EC50) |
| `Pignataro_1996.pdf` | Pignataro L et al., Neurosteroid modulation of the benzodia…, Neurochemistry international (1996) | pd | 4 | [10.1016/0197-0186(95)00164-6](https://doi.org/10.1016/0197-0186(95)00164-6) | [8939449](https://www.ncbi.nlm.nih.gov/pubmed/8939449) | metadata signals extractable PD data (EC50) |
| `Sarantis_2008.pdf` | Sarantis K et al., Differential pharmacological properties…, Neurochemistry international (2008) | pd | 4 | [10.1016/j.neuint.2007.10.016](https://doi.org/10.1016/j.neuint.2007.10.016) | [18069090](https://www.ncbi.nlm.nih.gov/pubmed/18069090) | metadata signals extractable PD data (IC50) |
| `Simasko_1984.pdf` | Simasko S et al., Chlordiazepoxide displaces thyrotropin-…, European journal of pharmac… (1984) | pd | 4 | [10.1016/0014-2999(84)90291-7](https://doi.org/10.1016/0014-2999(84)90291-7) | [6426979](https://www.ncbi.nlm.nih.gov/pubmed/6426979) | metadata signals extractable PD data (IC50) |
| `Supavilai_1981.pdf` | Supavilai P et al., In vitro modulation by avermectin B1a o…, Journal of neurochemistry (1981) | pd | 4 | [10.1111/j.1471-4159.1981.tb01664.x](https://doi.org/10.1111/j.1471-4159.1981.tb01664.x) | [6259289](https://www.ncbi.nlm.nih.gov/pubmed/6259289) | metadata signals extractable PD data (EC50) |
| `Thibaut_2009.pdf` | Thibaut JP et al., The effects of 3-methylclonazepam on Sc…, European journal of pharmac… (2009) | pd | 4 | [10.1016/j.ejphar.2009.01.021](https://doi.org/10.1016/j.ejphar.2009.01.021) | [19374857](https://www.ncbi.nlm.nih.gov/pubmed/19374857) | metadata signals extractable PD data (Emax) |
| `Vale_1997.pdf` | Vale C et al., Allosteric interactions between gamma-a…, European journal of pharmac… (1997) | pd | 4 | [10.1016/s0014-2999(96)00866-7](https://doi.org/10.1016/s0014-2999(96)00866-7) | [9042610](https://www.ncbi.nlm.nih.gov/pubmed/9042610) | metadata signals extractable PD data (EC50) |
| `Wafford_1993.pdf` | Wafford KA et al., Differences in affinity and efficacy of…, Molecular pharmacology (1993) | pd | 4 | not captured | [8381510](https://www.ncbi.nlm.nih.gov/pubmed/8381510) | metadata signals extractable PD data (EC50) |
| `Wang_1998.pdf` | Wang XH et al., Chronic dizocilpine (MK-801) reversibly…, Journal of neurochemistry (1998) | pd | 4 | [10.1046/j.1471-4159.1998.71020693.x](https://doi.org/10.1046/j.1471-4159.1998.71020693.x) | [9681460](https://www.ncbi.nlm.nih.gov/pubmed/9681460) | metadata signals extractable PD data (EC50) |
| `Youdim_2008.pdf` | Youdim KA et al., An automated, high-throughput, 384 well…, Journal of pharmaceutical a… (2008) | pd | 4 | [10.1016/j.jpba.2008.05.011](https://doi.org/10.1016/j.jpba.2008.05.011) | [18584988](https://www.ncbi.nlm.nih.gov/pubmed/18584988) | metadata signals extractable PD data (IC50) |
| `de_1987.pdf` | de Vries DJ et al., Effect of ethanol on the GABA-benzodiaz…, Alcohol and alcoholism (Oxf… (1987) | pd | 4 | not captured | [2827699](https://www.ncbi.nlm.nih.gov/pubmed/2827699) | metadata signals extractable PD data (EC50) |
| `Gafni_2003.pdf` | Gafni I et al., The role of cytochrome P450 2C19 activi…, Journal of clinical psychop… (2003) | pgx | 8 | [10.1097/00004714-200304000-00009](https://doi.org/10.1097/00004714-200304000-00009) | [12640218](https://www.ncbi.nlm.nih.gov/pubmed/12640218) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Suzuki_1998.pdf` | Suzuki A et al., Effects of various factors including th…, Psychopharmacology (1998) | pgx | 8 | [10.1007/s002130050519](https://doi.org/10.1007/s002130050519) | [9539256](https://www.ncbi.nlm.nih.gov/pubmed/9539256) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Suzuki_2011.pdf` | Suzuki T et al., Effects of the CYP2D6*10 allele on the…, Therapeutic drug monitoring (2011) | pgx | 8 | [10.1097/FTD.0b013e3182031021](https://doi.org/10.1097/FTD.0b013e3182031021) | [21157400](https://www.ncbi.nlm.nih.gov/pubmed/21157400) | metadata signals extractable PGX data (CYP2D6*10, PK/PD-context) |
| `Suzuki_2014.pdf` | Suzuki T et al., Effects of genetic polymorphisms of CYP…, Therapeutic drug monitoring (2014) | pgx | 8 | [10.1097/FTD.0000000000000070](https://doi.org/10.1097/FTD.0000000000000070) | [24682161](https://www.ncbi.nlm.nih.gov/pubmed/24682161) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Galetin_2004.pdf` | Galetin A et al., Utility of recombinant enzyme kinetics…, Drug metabolism and disposi… (2004) | pgx | 7 | [10.1124/dmd.104.000844](https://doi.org/10.1124/dmd.104.000844) | [15342470](https://www.ncbi.nlm.nih.gov/pubmed/15342470) | metadata signals extractable PGX data (CYP3A5, PK/PD-context) |
| `Galetin_2006.pdf` | Galetin A et al., Intestinal and hepatic metabolic activi…, The Journal of pharmacology… (2006) | pgx | 7 | [10.1124/jpet.106.106013](https://doi.org/10.1124/jpet.106.106013) | [16763093](https://www.ncbi.nlm.nih.gov/pubmed/16763093) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |
| `Hallifax_2005.pdf` | Hallifax D et al., Prediction of metabolic clearance using…, Drug metabolism and disposi… (2005) | pgx | 7 | [10.1124/dmd.105.005389](https://doi.org/10.1124/dmd.105.005389) | [16174807](https://www.ncbi.nlm.nih.gov/pubmed/16174807) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Huang_2004.pdf` | Huang W et al., Evidence of significant contribution fr…, Drug metabolism and disposi… (2004) | pgx | 7 | [10.1124/dmd.104.001313](https://doi.org/10.1124/dmd.104.001313) | [15383492](https://www.ncbi.nlm.nih.gov/pubmed/15383492) | metadata signals extractable PGX data (CYP3A5, PK/PD-context) |
| `Shimakura_2003.pdf` | Shimakura J et al., In vitro drug-drug interactions with pe…, European journal of drug me… (2003) | pgx | 7 | [10.1007/BF03190869](https://doi.org/10.1007/BF03190869) | [14503667](https://www.ncbi.nlm.nih.gov/pubmed/14503667) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Kilicarslan_2000.pdf` | Kilicarslan T et al., Lack of interaction of buprenorphine wi…, The American journal of psy… (2000) | pgx | 5 | [10.1176/appi.ajp.157.7.1164](https://doi.org/10.1176/appi.ajp.157.7.1164) | [10873929](https://www.ncbi.nlm.nih.gov/pubmed/10873929) | metadata signals extractable PGX data (CYP2C19*1) |
| `Sellers_2000.pdf` | Sellers EM et al., Mimicking gene defects to treat drug de…, Annals of the New York Acad… (2000) | pgx | 5 | [10.1111/j.1749-6632.2000.tb06685.x](https://doi.org/10.1111/j.1749-6632.2000.tb06685.x) | [10911933](https://www.ncbi.nlm.nih.gov/pubmed/10911933) | metadata signals extractable PGX data (CYP2D6*10) |
| `Suzuki_2024.pdf` | Suzuki T et al., CYP1A2*F Polymorphism Contributes at Le…, Drug metabolism and bioanal… (2024) | pgx | 5 | [10.2174/0118723128246698230921095141](https://doi.org/10.2174/0118723128246698230921095141) | [37855290](https://www.ncbi.nlm.nih.gov/pubmed/37855290) | metadata signals extractable PGX data (CYP1A2*F) |

<sub>queue written 2026-10-06T20:40:49.617147+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Arias_2020 | irrelevant | 0 | 0 | Flunitrazepam is only used as a radioligand in binding assays; no PK parameters for flunitrazepam are reported. |
| popPK | Bareggi_1998 | irrelevant | 2 | 2 | This is a PK/PD study reporting plasma concentrations and Emax PD parameters, not disposition parameters (CL, V, half-life, or a population-PK model) for flunitrazepam. |
| popPK | Berger_1998 | irrelevant | 0 | 0 | This is an in-vitro patch-clamp study of GABA_A receptor kinetics in rat hippocampal slices; flunitrazepam is only a modulator, with no PK disposition parameters. |
| popPK | Brown_1997 | irrelevant | 0 | 0 | no_text gate: only 114 chars of text extracted (&lt; 400) |
| popPK | Bruner_1998 | irrelevant | 0 | 0 | In-vitro receptor binding study with flunitrazepam as radioligand, not a pharmacokinetic study. |
| popPK | Cano_1977 | relevant | 8 | 4 | Human PK study of flunitrazepam with a three-compartment model, but only qualitative compartment ratios and bioavailability figures are given; no CL/V/ka numeric values appear (likely in the full paper/figures). |
| PGx | Cheng_1998 | not_relevant | 0 | 0 | Flunitrazepam is only studied as an inhibitor of UGT-mediated glucuronidation of other substrates; no gene variant effect on flunitrazepam PK/PD is reported. |
| popPK | Cloesmeijer_2020 | irrelevant | 0 | 0 | This is a population PK study of clonidine, not flunitrazepam; flunitrazepam is not mentioned at all. |
| popPK | Coller_1999 | irrelevant | 3 | 6 | In-vitro human liver microsome enzyme kinetics (Ks, Vmax, Clmax) for metabolite formation, not in-vivo disposition/PK parameters of flunitrazepam. |
| PGx | Coller_1999 | not_relevant | 3 | 5 | In vitro enzyme identification with chemical inhibitors/antibodies; no gene variant/genotype effect on flunitrazepam PK/PD parameters reported. |
| popPK | Corkery_2022 | irrelevant | 0 | 0 | This is a review of the novel psychoactive stimulant 4F-EPH; flunitrazepam is not the subject and no PK parameters are reported. |
| popPK | Danhof_1992 | irrelevant | 3 | 1 | This is a PK/PD modeling abstract focused on EEG pharmacodynamics; no numeric disposition parameters (CL, V, half-life) for flunitrazepam are reported, and values appear only in referenced studies/figures not provided. |
| popPK | Davies_2001 | irrelevant | 0 | 0 | In-vitro electrophysiology study of GABA(A) receptor subunits; flunitrazepam is only a pharmacological probe with no PK parameters. |
| popPK | Davis_1986 | irrelevant | 2 | 0 | Review abstract mentioning flunitrazepam only as one of several benzodiazepines, with no PK parameters for it; abstract truncated before any values. |
| popPK | Dunn_1994 | irrelevant | 0 | 0 | In-vitro receptor binding study using flunitrazepam as a radioligand, not a pharmacokinetic study. |
| popPK | Feigenspan_1994 | irrelevant | 0 | 0 | Flunitrazepam is used only as a pharmacological modulator of GABA receptors in vitro; no PK parameters are reported. |
| popPK | Feigenspan_2000 | irrelevant | 0 | 0 | In-vitro electrophysiology of GABA(A) receptors; flunitrazepam is only a pharmacological tool, no PK parameters. |
| popPK | Franken_2016 | irrelevant | 0 | 0 | This is a population-PK study of morphine and its glucuronide metabolites, not flunitrazepam; no flunitrazepam parameters appear anywhere. |
| PGx | Galetin_2004 | not_relevant | 0 | 0 | Paper concerns CYP3A4 probe substrates and CYP3A5/CYP2C19 variability, not flunitrazepam PK/PD. |
| PGx | Galetin_2006 | not_relevant | 0 | 0 | In vitro hepatic vs intestinal microsome metabolism comparison; no gene variant/genotype effect on flunitrazepam PK/PD reported. |
| popPK | García_2006 | irrelevant | 0 | 0 | In vitro receptor binding study; flunitrazepam is only a radioligand probe, no PK parameters. |
| PGx | Ghosal_2004 | not_relevant | 0 | 0 | Flunitrazepam is only used as a UGT inhibitor in vitro; no gene variant effect on its PK/PD is reported. |
| popPK | Grahnén_1991 | irrelevant | 0 | 0 | no_text gate: only 107 chars of text extracted (&lt; 400) |
| popPK | Gómez-Segura_2022 | irrelevant | 0 | 0 | This is a population PK study of carprofen in swine, not flunitrazepam; flunitrazepam is never mentioned. |
| PGx | Hallifax_2005 | not_relevant | 0 | 0 | In vitro hepatocyte clearance variability across donors, no gene variant/genotype/phenotype effect on flunitrazepam PK/PD reported. |
| popPK | Han_2025 | irrelevant | 0 | 0 | This is a review of wedelolactone pharmacology; flunitrazepam is not mentioned at all and no PK parameters for it appear. |
| popPK | Hao_2017 | irrelevant | 0 | 0 | This is a computational drug-target interaction prediction study with no pharmacokinetic parameters for flunitrazepam; no PK values are present. |
| PGx | Harris_2004 | not_relevant | 0 | 0 | Paper describes an HPLC-MS/MS assay for midazolam in dog plasma; flunitrazepam is only an internal standard, with no gene variant or PK/PD effect reported. |
| PGx | Hesse_2001 | not_relevant | 3 | 5 | In vitro enzyme kinetics of recombinant CYPs; no gene variant/genotype/phenotype effect on in vivo PK/PD parameters reported. |
| popPK | Hoogerkamp_1996 | irrelevant | 3 | 2 | This is a rat pharmacodynamic (concentration-anticonvulsant effect) study where flunitrazepam is one of six comparator benzodiazepines; only EC250/EC50 effect values are given, with no CL, V, ka, or PK model parameters for flunitrazepam. |
| popPK | Horne_1993 | irrelevant | 0 | 0 | In-vitro electrophysiology study of GABAA receptor modulation; flunitrazepam is a pharmacological probe, no PK disposition parameters. |
| popPK | Hosie_1996 | irrelevant | 0 | 0 | In vitro electrophysiology study on expressed Drosophila GABA receptors; flunitrazepam is only a test ligand with no PK parameters. |
| popPK | Hsin_2020 | irrelevant | 0 | 0 | This is a population-PK study of digoxin (ABCB1 genotypes), not flunitrazepam; no flunitrazepam parameters appear anywhere. |
| PGx | Huang_2004 | not_relevant | 4 | 6 | Compares recombinant CYP3A5 vs CYP3A4 enzyme kinetics and microsomal CYP3A5 content, not a gene variant/genotype effect on flunitrazepam PK/PD in vivo. |
| PGx | Jones_2007 | not_relevant | 2 | 1 | Mentions polymorphism of drug-metabolizing enzymes only as a general consideration; no gene-variant effect on flunitrazepam PK/PD is reported. |
| popPK | Kanto_1981 | relevant | 8 | 2 | Human IV flunitrazepam PK with two-compartment model, but no numeric parameter values are present in the evidence. |
| PGx | Kilicarslan_2000 | not_relevant | 2 | 5 | CYP2C19 genotype only describes microsome donors; no genotype-stratified effect on flunitrazepam PK/PD parameters is reported—findings concern buprenorphine inhibition. |
| PGx | Kilicarslan_2001 | not_relevant | 6 | 5 | In vitro enzyme kinetics identify CYP2C19/3A4 contributions but no genotype/phenotype effect on in vivo PK/PD parameters is reported. |
| PGx | King_2000 | not_relevant | 0 | 0 | Flunitrazepam is only an inhibitor of morphine glucuronidation in vitro; no gene variant/genotype effect on flunitrazepam PK/PD is reported. |
| popPK | Ku_2018 | irrelevant | 0 | 0 | This is a population PK study of diazepam in children, not flunitrazepam; flunitrazepam is not the subject drug. |
| popPK | Malatynska_2000 | irrelevant | 0 | 0 | In-vitro receptor binding study in rat brain; flunitrazepam is only a radioligand, no PK parameters reported. |
| popPK | Mandema_1991 | relevant | 7 | 4 | PK-PD modeling of flunitrazepam in rats with some numeric values (EC50) present, but disposition parameters (CL, V) are not shown in the evidence and likely reside in figures/tables not provided. |
| PGx | McAuley_1995 | not_relevant | 0 | 0 | Drug-drug/hormone interaction (progesterone-triazolam), no gene variant or pharmacogenomic effect on flunitrazepam PK/PD reported. |
| popPK | Megarbane_2005 | irrelevant | 2 | 1 | Flunitrazepam is only a co-administered agent; the PK model and parameters reported are for buprenorphine, not flunitrazepam. |
| PGx | Mitamura_2025 | not_relevant | 2 | 3 | Flunitrazepam is used as an AKR1C1/1C2 inhibitor affecting CYP3A4 induction in vitro; no gene variant/genotype effect on flunitrazepam PK/PD parameters is reported. |
| PGx | Mizuno_2009 | not_relevant | 2 | 3 | In vitro CYP3A4-mediated cytotoxicity of flunitrazepam, not a gene variant/genotype effect on a PK or PD parameter in humans. |
| popPK | Morinan_1992 | irrelevant | 0 | 0 | Flunitrazepam is only a radioligand for receptor binding assays; no pharmacokinetic parameters are reported. |
| popPK | Muraki_1984 | irrelevant | 0 | 0 | Receptor binding study, not a PK study; flunitrazepam is only a radioligand, no disposition parameters. |
| popPK | Ortiz_1999 | irrelevant | 0 | 0 | In vitro receptor binding study; flunitrazepam is only a radioligand probe, no PK parameters. |
| PGx | Otani_2003 | not_relevant | 2 | 3 | Only states flunitrazepam is partly metabolized by CYP3A4; no genotype/phenotype effect on a PK/PD parameter is reported. |
| PGx | Peng_2004 | not_relevant | 3 | 3 | In vitro enzyme involvement in flunitrazepam metabolism; no gene variant/genotype effect on a PK/PD parameter reported. |
| popPK | Perillo_1999 | irrelevant | 0 | 0 | In-vitro receptor binding study of [3H]flunitrazepam to chick brain membranes; no pharmacokinetic disposition parameters reported. |
| popPK | Pignataro_1996 | irrelevant | 0 | 0 | In-vitro receptor binding study using radiolabeled flunitrazepam as a ligand, not a pharmacokinetic study with disposition parameters. |
| popPK | Python_1993 | irrelevant | 0 | 0 | In vitro mechanistic study of benzodiazepine effects on aldosterone secretion and calcium channels; no PK parameters for flunitrazepam. |
| popPK | Roberge_2004 | irrelevant | 0 | 0 | In-vitro mechanistic study of CYP induction in rat hepatocytes; flunitrazepam is only an inducer ligand, no PK parameters reported. |
| popPK | Roca_1990 | irrelevant | 0 | 0 | In vitro receptor binding study in chick neuronal cultures; flunitrazepam is only a radioligand, no PK parameters. |
| popPK | Roca_1990_2 | irrelevant | 0 | 0 | In vitro receptor binding study using [3H]flunitrazepam as a radioligand probe, not a pharmacokinetic study of flunitrazepam disposition. |
| popPK | Sanna_1999 | irrelevant | 0 | 0 | This is a receptor pharmacodynamics study where flunitrazepam is only a radioligand tracer; no PK parameters for flunitrazepam are reported. |
| popPK | Sarantis_2008 | irrelevant | 0 | 0 | This is a receptor-binding study using radiolabeled flunitrazepam as a ligand, not a pharmacokinetic study of flunitrazepam disposition. |
| popPK | Schönrock_1993 | irrelevant | 0 | 0 | In-vitro electrophysiology study of GABAA receptors; flunitrazepam is only a pharmacological tool, no PK parameters. |
| PGx | Sellers_2000 | not_relevant | 3 | 1 | Flunitrazepam is only mentioned as a CYP2C19 substrate in vitro; no genotype/phenotype effect on any PK/PD parameter is reported. |
| PGx | Shimakura_2003 | not_relevant | 0 | 0 | In vitro DDI study with microsomes; no gene variant/genotype effect on flunitrazepam PK/PD reported. |
| popPK | Simasko_1984 | irrelevant | 0 | 0 | In-vitro receptor binding study; flunitrazepam only mentioned as an inactive co-incubated compound, no PK parameters. |
| popPK | Sumirtapura_1981 | relevant | 6 | 2 | Human ICU flunitrazepam PK with a three-compartment model, but no numeric parameter values (CL, V, half-lives) are given in the evidence. |
| popPK | Sun_2023 | irrelevant | 0 | 0 | Structural biology paper on GABAA receptors; flunitrazepam appears only as a radioligand binding probe (Kd 6 nM), with no PK disposition parameters. |
| popPK | Supavilai_1981 | irrelevant | 0 | 0 | In vitro receptor-binding study with flunitrazepam only as a radioligand; no PK parameters. |
| PGx | Suzuki_1998 | not_relevant | 3 | 5 | Flunitrazepam is only a coadministration factor altering bromperidol PK; no gene variant effect on flunitrazepam's own PK/PD is reported, and CYP2D6 had no significant effect. |
| PGx | Suzuki_2011 | not_relevant | 0 | 0 | Flunitrazepam is only mentioned as a coadministered drug; the pharmacogenomic CYP2D6*10 effects reported are on aripiprazole/dehydroaripiprazole concentrations, not on flunitrazepam PK/PD. |
| PGx | Suzuki_2014 | not_relevant | 0 | 0 | Flunitrazepam is only mentioned as a coadministered drug; no genotype effect on its PK/PD is reported. |
| PGx | Suzuki_2024 | not_relevant | 0 | 0 | Flunitrazepam is only mentioned as a permitted co-medication; no pharmacogenomic effect on its PK/PD is reported. |
| popPK | Thibaut_2009 | irrelevant | 0 | 0 | Flunitrazepam appears only as a comparator in an in-vitro schistosome binding/contractility study with no PK parameters. |
| popPK | Tietz_1989 | irrelevant | 0 | 0 | This is a receptor binding study in rat brain; flunitrazepam is only a radioligand, with no PK parameters. |
| popPK | Vale_1997 | irrelevant | 0 | 0 | In-vitro receptor binding study; flunitrazepam is only a radioligand, no PK parameters. |
| popPK | Verscheijden_2021 | irrelevant | 0 | 0 | This is a PBPK/PD study of morphine (and M6G), not flunitrazepam; flunitrazepam does not appear as the subject drug. |
| popPK | Wafford_1993 | irrelevant | 0 | 0 | In vitro electrophysiology study of receptor pharmacodynamics, no pharmacokinetic disposition parameters for flunitrazepam. |
| popPK | Wang_1998 | irrelevant | 0 | 0 | no_text gate: only 113 chars of text extracted (&lt; 400) |
| popPK | Williamson_1998 | irrelevant | 0 | 0 | Electrophysiology study of GABA receptors; flunitrazepam is only a pharmacological tool with no PK parameters. |
| popPK | Wong_1994 | irrelevant | 0 | 0 | In-vitro receptor binding study; flunitrazepam is only a radioligand, no PK parameters for flunitrazepam. |
| PGx | Youdim_2008 | not_relevant | 0 | 0 | Paper reports CYP inhibition IC50 assay methodology for flunitrazepam as an inhibitor, with no gene variant/genotype effects on PK/PD parameters. |
| popPK | de_1987 | irrelevant | 0 | 0 | In-vitro receptor binding study, no pharmacokinetic disposition parameters for flunitrazepam. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 20:40 UTC</sub>
