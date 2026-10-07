<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V03A&quot;,&quot;href&quot;:&quot;atc/V03A.md&quot;},{&quot;label&quot;:&quot;flumazenil&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Flumazenil_Cha2024_reference&quot;,&quot;label&quot;:&quot;Cha_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_flumazenil/Flumazenil_Cha2024_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Flumazenil_Chen2025_reference&quot;,&quot;label&quot;:&quot;Chen_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_flumazenil/Flumazenil_Chen2025_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# flumazenil

- **generic name:** flumazenil
- **ATC codes:** `V03AB25`
- **DrugBank:** [DB01205](https://go.drugbank.com/drugs/DB01205) · **PubChem:** [CID 3373](https://pubchem.ncbi.nlm.nih.gov/compound/3373)
- **molar mass:** 303.2884 g/mol (C15H14FN3O3) — DrugBank
- **groups:** approved, investigational

## About

Flumazenil is an antidote used to reverse the effects of benzodiazepine overdose or sedation. It is an approved medicine used in hospital settings, mainly in emergency and anaesthesia care, and carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q421920](https://www.wikidata.org/wiki/Q421920) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| flumazenil | parent | 303.288 | C15H14FN3O3 | DrugBank | [3373](https://pubchem.ncbi.nlm.nih.gov/compound/3373) | Jones_1993, van_2005 |
| 11C-flumazenil | metabolite | 303.293 | C15H14FN3O3 | PubChem | [449752](https://pubchem.ncbi.nlm.nih.gov/compound/449752) | van_2005 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:37 | 28:27 | 2/1/2 | 4/1/0 | 0/0/0 | 1,256,774/57,057 | ollama / glm-5.3-flash | 45 | 9/29 | 43/2 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Cha_2024_reference](drugs/drug_flumazenil/Flumazenil_Cha2024_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 | Cha HJ et al., Development of a Web Application for Si…, Pharmaceutics (2024) | [10.3390/pharmaceutics16050689](https://doi.org/10.3390/pharmaceutics16050689) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Chen_2025_reference](drugs/drug_flumazenil/Flumazenil_Chen2025_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 | Chen J et al., Population pharmacokinetic analysis of…, Frontiers in pharmacology (2025) | [10.3389/fphar.2025.1526266](https://doi.org/10.3389/fphar.2025.1526266) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — volume from this paper; review-gap-filled from other p…</sub><br><sub>route_to: `human_review`</sub> | [Jones_1993_reference](drugs/drug_flumazenil/Flumazenil_Jones1993_reference.md) | — | 1-compartment (no model) | 6 | Jones RD et al., Pharmacokinetics of flumazenil and mida…, British journal of anaesthe… (1993) | [10.1093/bja/70.3.286](https://doi.org/10.1093/bja/70.3.286) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [van_2005_reference](drugs/drug_flumazenil/Flumazenil_van2005_reference.md) | — | 1-compartment (no model) | 5 | van Rij CM et al., Population plasma pharmacokinetics of 1…, British journal of clinical… (2005) | [10.1111/j.1365-2125.2005.02487.x](https://doi.org/10.1111/j.1365-2125.2005.02487.x) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Flores-Pérez_2023_reference](drugs/drug_flumazenil/Flumazenil_FloresPrez2023_reference.md) | — | 2-compartment (no model) | 4 | Flores-Pérez C et al., Pharmacokinetic-Pharmacodynamic Modelin…, Pharmaceutics (2023) | [10.3390/pharmaceutics15112565](https://doi.org/10.3390/pharmaceutics15112565) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Danhof_1992_EEG_amplitude](drugs/drug_flumazenil/pd_Danhof_1992_EEG_amplitude.md) | amplitude in the 12-30 Hz frequency band of the EEG ← flumazenil · direct sigmoid Emax (Hill) effect | — | Danhof M et al., Modelling of the pharmacodynamics and p…, International journal of cl… (1992) | — |
| <span class="pk-badge pk-badge--green">extracted</span> | [Fiset_1995_EEG_effect](drugs/drug_flumazenil/pd_Fiset_1995_EEG_effect.md) | midazolam electroencephalographic effect (reversal of sedation) ← flumazenil · delayed effect through an effect compartment | — | Fiset P et al., Pharmacodynamic modeling of the electro…, Clinical pharmacology and t… (1995) | [10.1016/0009-9236(95)90177-9](https://doi.org/10.1016/0009-9236(95)90177-9) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Kuver_2016_GABA_gated_current](drugs/drug_flumazenil/pd_Kuver_2016_GABA_gated_current.md) | GABA (10 μM)-gated current in recombinant α4β2δ GABAA receptors in presence of 100 nM THP ← flumazenil · inhibition effect | — | Kuver A et al., Flumazenil decreases surface expression…, Brain research bulletin (2016) | [10.1016/j.brainresbull.2015.11.015](https://doi.org/10.1016/j.brainresbull.2015.11.015) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (bird), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">bird</span> | [Pedder_1987_Specific_binding_of_3H_diazepam_to_whole_homogenate_fractions_from_cerebral_hemispheres](drugs/drug_flumazenil/pd_Pedder_1987_Specific_binding_of_3H_diazepam_to_whole_homogen.md) | Specific binding of [3H]diazepam to whole homogenate fractions from cerebral hemispheres ← Ro 15-1788 (flumazenil) · inhibition effect | — | Pedder SC et al., Benzodiazepine antagonist Ro 15-1788 (f…, Brain research (1987) | [10.1016/0006-8993(87)91203-0](https://doi.org/10.1016/0006-8993(87)91203-0) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Breimer_1991_TNW12_30](drugs/drug_flumazenil/pd_Breimer_1991_TNW12_30.md) | total number of waves between 12 and 30 Hz (aperiodic EEG analysis) ← midazolam (effect antagonised competitively by flumazenil) · direct sigmoid Emax (Hill) effect | — | Breimer LT et al., Pharmacokinetic-pharmacodynamic modelli…, Clinical pharmacokinetics (1991) | [10.2165/00003088-199120060-00006](https://doi.org/10.2165/00003088-199120060-00006) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=flumazenil) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: GABRA1 (positive allosteric modulator), GABRA1 (target), GABRA2 (allosteric modulator), GABRA3 (allosteric modulator), GABRA5 (target), GABRG2 (target), GABRG3 (allosteric modulator), TSPO (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 415 matched, 149 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 5  ·  extracted 2  ·  needs_review 2  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Jones_1993.pdf` | Jones RD et al., Pharmacokinetics of flumazenil and mida…, British journal of anaesthe… (1993) | popPK | 10 | [10.1093/bja/70.3.286](https://doi.org/10.1093/bja/70.3.286) | [8471371](https://pubmed.ncbi.nlm.nih.gov/8471371) | Full PK parameters for flumazenil (t½, CL, Vss) are reported directly in the abstract. |
| `Rousseau-Blass_2021.pdf` | Rousseau-Blass F et al., A Pharmacokinetic-Pharmacodynamic Study…, Journal of the American Ass… (2021) | popPK | 10 | [10.30802/AALAS-JAALAS-20-000084](https://doi.org/10.30802/AALAS-JAALAS-20-000084) | [33673881](https://pubmed.ncbi.nlm.nih.gov/33673881) | PK study of flumazenil in rabbits with numeric CL, Vd, and half-life reported directly in the abstract. |
| `van_2005.pdf` | van Rij CM et al., Population plasma pharmacokinetics of 1…, British journal of clinical… (2005) | popPK | 10 | [10.1111/j.1365-2125.2005.02487.x](https://doi.org/10.1111/j.1365-2125.2005.02487.x) | [16236037](https://pubmed.ncbi.nlm.nih.gov/16236037) | Population PK (NONMEM two-compartment) of 11C-flumazenil in 51 patients with full numeric CL, V1, V2, Q values reported in the abstract. |
| `Liefaard_2005.pdf` | Liefaard LC et al., Population pharmacokinetic analysis for…, Molecular imaging and biolo… (2005) | popPK | 7 | [10.1007/s11307-005-0022-3](https://doi.org/10.1007/s11307-005-0022-3) | [16328648](https://pubmed.ncbi.nlm.nih.gov/16328648) | Population PK model of [C-11]flumazenil in rats with binding parameters reported, but disposition parameter values (CL, V) are not shown in the evidence. |
| `Koeppe_1991.pdf` | Koeppe RA et al., Compartmental analysis of [11C]flumazen…, Journal of cerebral blood f… (1991) | popPK | 6 | [10.1038/jcbfm.1991.130](https://doi.org/10.1038/jcbfm.1991.130) | [1651944](https://pubmed.ncbi.nlm.nih.gov/1651944) | PET compartmental modeling of [11C]flumazenil kinetics in human brain, but numeric parameter values (K1, DV) are not present in the evidence. |

<sub>queue written 2026-10-07T19:22:41.117233+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abi-Dargham_1994 | irrelevant | 2 | 1 | Flumazenil is only used as a receptor-saturating blocking dose in an iomazenil SPECT study; no flumazenil PK parameters are reported. |
| popPK | Achilli_2026 | irrelevant | 0 | 0 | Computational spiking neural network study of GABAergic modulation; flumazenil mentioned only as a PET tracer, no PK parameters. |
| PGx | Alammary_2026 | not_relevant | 3 | 2 | Flumazenil response (EEG change) is described clinically in ABAT-deficiency patients, but no gene-variant effect on a PK or PD parameter is quantified. |
| popPK | Alba-Betancourt_2019 | irrelevant | 0 | 0 | Flumazenil is only used as a mechanistic pretreatment agent; no PK parameters for flumazenil are reported. |
| popPK | Arias_2020 | irrelevant | 0 | 0 | Flumazenil is only used as a pharmacological probe (benzodiazepine-insensitive sedation); no PK parameters for flumazenil are reported. |
| popPK | Artaiz_1995 | irrelevant | 0 | 0 | Flumazenil is only mentioned as a sensitivity probe in a pharmacology study of VA21B7; no PK parameters for flumazenil are reported. |
| popPK | Assié_1993 | irrelevant | 0 | 0 | Flumazenil is only used as a benzodiazepine antagonist to probe F 2692's mechanism; no PK parameters for flumazenil are reported. |
| popPK | Atack_2010 | irrelevant | 0 | 0 | Flumazenil is only used as a radiolabeled binding tracer/probe for TPA023 occupancy; no flumazenil PK parameters are reported. |
| popPK | Atack_2010_2 | irrelevant | 0 | 0 | Flumazenil is only used as a PET tracer; the paper concerns alpha5IA with no flumazenil PK parameters reported. |
| popPK | Beffinger_2025 | irrelevant | 0 | 0 | This is a study of IL-12Fc fusion cytokine PK in glioblastoma mice; flumazenil is not mentioned at all. |
| popPK | Breimer_1991 | irrelevant | 3 | 2 | Flumazenil is used as a co-administered antagonist/probe in a PK-PD interaction study; no disposition parameters (CL, V, half-life with volume) for flumazenil itself are reported, only target steady-state concentrations and PD interaction values. |
| popPK | Bukanova_2021 | irrelevant | 0 | 0 | Flumazenil is only used as a pharmacological tool (benzodiazepine-site antagonist) in electrophysiology; no PK parameters for flumazenil are reported. |
| popPK | Catalani_2021 | irrelevant | 0 | 0 | This is a QSAR/docking study of designer benzodiazepines' receptor activity; flumazenil is only mentioned as an antagonist and no PK parameters are reported. |
| popPK | Cha_2024 | irrelevant | 0 | 0 | This is a population PK study of zolpidem, not flumazenil; flumazenil is only mentioned as a potential antidote with no PK parameters for it. |
| popPK | Chen_2025 | irrelevant | 0 | 0 | This is a population-PK study of remimazolam, not flumazenil; flumazenil is only mentioned as an antagonist, so no flumazenil parameters are reported. |
| popPK | Cheng_2012 | irrelevant | 0 | 0 | This is an in-vitro electrophysiology study of melatonin on GABA currents; flumazenil is only used as a blocking agent, with no PK parameters. |
| popPK | Colussi_2011 | irrelevant | 0 | 0 | This is an in-vitro vascular reactivity study of midazolam on mouse aortic rings; flumazenil is only used as a receptor antagonist tool, with no PK parameters for flumazenil. |
| popPK | Concas_1998 | irrelevant | 0 | 0 | Flumazenil is only used as a benzodiazepine antagonist tool in in vitro binding/feeding assays; no PK parameters for flumazenil are reported. |
| popPK | Daher_2024 | irrelevant | 0 | 0 | The paper concerns basmisanil, a different drug; flumazenil is not the subject and no PK parameter values are present. |
| popPK | Danhof_1992 | irrelevant | 3 | 1 | This is a PK/PD abstract focused on pharmacodynamics (EEG Emax models); flumazenil is one of several studied drugs but no numeric PK parameters (CL, V, half-life) are reported, and any values would be in the full paper not this evidence. |
| popPK | Danhof_1993 | irrelevant | 3 | 1 | Review of PK/PD methodology; flumazenil mentioned only as a competitive antagonist example, with no numeric PK parameters and values not in evidence. |
| popPK | Delforge_1997 | irrelevant | 3 | 2 | PET receptor-binding modeling study of 11C-flumazenil in human brain; no disposition PK parameters (CL, V, half-life) reported, and no numeric values present in the evidence. |
| popPK | Fiset_1995 | irrelevant | 3 | 3 | This is a pharmacodynamic (EEG) study of flumazenil's antagonism of midazolam; only equilibration half-life (ke0) and EC50 are reported, not disposition parameters (CL, V, compartmental model) for flumazenil. |
| popPK | Flores-Pérez_2023 | irrelevant | 0 | 0 | This is a population PK-PD study of midazolam, not flumazenil; flumazenil is only mentioned as a toxicity antidote. |
| popPK | Frey_1991 | irrelevant | 3 | 2 | PET receptor-binding study of [11C]flumazenil in human brain; no numeric disposition PK parameters (CL, V, half-life) appear in the evidence. |
| popPK | Friston_1997 | irrelevant | 2 | 1 | PET tracer kinetic modeling of 11C-flumazenil displacement with no numeric PK parameter values reported (k2 changes only inferred, values not given). |
| popPK | Gao_2026 | irrelevant | 0 | 0 | This is an RCT protocol about remimazolam vs dexmedetomidine sedation; flumazenil is only mentioned as a reversal agent and no PK parameters for flumazenil are reported. |
| PGx | Garrett_1998 | not_relevant | 2 | 2 | Flumazenil is only used as a diazepam antagonist; no gene variant effect on flumazenil PK/PD is reported. |
| popPK | Giffard_2008 | irrelevant | 2 | 1 | This is a PET imaging study of 11C-flumazenil receptor binding (tracer for neuronal loss), not a pharmacokinetic study reporting disposition parameters; no numeric PK values are present. |
| popPK | Granger_1995 | irrelevant | 0 | 0 | In-vitro electrophysiology study of carbamazepine/phenytoin on GABAA receptors; flumazenil is only a benzodiazepine-site antagonist control, with no PK parameters. |
| popPK | Granger_2005 | irrelevant | 0 | 0 | Flumazenil is only used as a pharmacological tool to rule out benzodiazepine-site action; no PK parameters for flumazenil are reported. |
| popPK | Groundwater_2015 | irrelevant | 0 | 0 | Electrophysiology study of resveratrol/viniferin on GABAA receptors; flumazenil is only used as a benzodiazepine antagonist probe, with no PK parameters for flumazenil. |
| popPK | Guerguer_2026 | irrelevant | 0 | 0 | This is a meta-analysis of remimazolam vs sevoflurane perioperative outcomes; flumazenil is only mentioned as a reversal agent, with no PK parameters for flumazenil. |
| popPK | Guo_2009 | irrelevant | 2 | 1 | Flumazenil appears only as a PET radioligand example with a %COV binding-potential metric, not disposition PK parameters (CL/V/half-life); no numeric PK values for flumazenil are given. |
| popPK | Hoffmann_2016 | irrelevant | 0 | 0 | In-vitro electrophysiology study of glabridin on GABAA receptors; flumazenil is only a pharmacological tool, no PK parameters. |
| popPK | Holthoff_1991 | irrelevant | 3 | 2 | PET tracer-kinetic model of [11C]flumazenil in brain (K1, DV) rather than systemic disposition PK; no numeric parameter values appear in the evidence. |
| popPK | Holthoff_1993 | irrelevant | 3 | 1 | PET receptor imaging study using [11C]flumazenil as a tracer; no disposition PK parameters (CL, V, half-life) for flumazenil itself are reported. |
| popPK | Hoogerkamp_1996 | irrelevant | 2 | 1 | Flumazenil is only an antagonist probe in a PD study of benzodiazepines in rats; no flumazenil disposition parameters (CL, V, half-life) are reported. |
| popPK | Hugel_2012 | irrelevant | 0 | 0 | In vitro electrophysiology study of GABA(A) receptor buffering; flumazenil is only a pharmacological tool with no PK parameters. |
| popPK | Ihmsen_2004 | irrelevant | 0 | 0 | Study concerns midazolam and Ro 48-6791, not flumazenil; no flumazenil PK parameters present. |
| popPK | Karim_2011 | irrelevant | 0 | 0 | Flumazenil is only used as an insensitivity control for a different drug (a flavonoid); no PK parameters for flumazenil are reported. |
| popPK | Kessler_2020 | irrelevant | 0 | 0 | This is a PET receptor-binding study (flumazenil as imaging tracer) with only rmANOVA statistics; no PK disposition parameters are reported. |
| popPK | Klumpers_2008 | irrelevant | 3 | 2 | This is a PET tracer modeling study of [11C]flumazenil binding (VT, BPND), not a pharmacokinetic study reporting disposition parameters (CL, V, half-life) for flumazenil as a drug. |
| popPK | Klumpers_2012 | irrelevant | 2 | 2 | This is a PET tracer ([11C]flumazenil) imaging study of receptor binding parameters (VT, BPND), not a pharmacokinetic study reporting disposition parameters (CL, V, half-life) for flumazenil as a drug. |
| popPK | Koeppe_1991 | relevant | 6 | 3 | PET compartmental modeling of [11C]flumazenil kinetics in human brain, but numeric parameter values (K1, DV) are not present in the evidence. |
| popPK | Koeppe_2001 | irrelevant | 1 | 1 | This is a PET imaging study using [11C]flumazenil as a receptor-binding radiotracer, not a pharmacokinetic study of flumazenil drug disposition; no CL/V/compartmental PK parameters for flumazenil are reported. |
| popPK | Koole_2023 | irrelevant | 0 | 0 | The study is a population PKPD analysis of padsevonil (SV2A occupancy/EC50), with flumazenil mentioned only as a comparator PET tracer; no flumazenil disposition parameters are reported. |
| popPK | Kågedal_2015 | irrelevant | 0 | 0 | PET receptor occupancy study of AZD3783 and [(11)C]-AZ10419369; flumazenil is not involved and no disposition parameters for it are reported. |
| PGx | Langsteger_2016 | not_relevant | 0 | 0 | Abstract mentions only 18F-flumazenil production; no gene variant effect on PK/PD reported. |
| popPK | Lawn_2022 | irrelevant | 0 | 0 | This is a neuroimaging study of propofol; flumazenil appears only as a PET tracer ligand for GABA-A receptor mapping, with no PK parameters. |
| popPK | Lawn_2023 | irrelevant | 0 | 0 | This is a neuroimaging study of propofol's effects on brain networks; flumazenil is not the subject drug and no PK parameters are reported. |
| popPK | Lees_1998 | irrelevant | 0 | 0 | Flumazenil is only used as a benzodiazepine antagonist probe in vitro; no PK parameters for flumazenil are reported. |
| popPK | Liang_2026 | irrelevant | 0 | 0 | The paper models remimazolam (PopPK/PBPK); flumazenil appears only as a co-administered reversal agent in one study arm, with no flumazenil PK parameters reported. |
| popPK | Liefaard_2005 | relevant | 7 | 4 | Population PK model of [C-11]flumazenil in rats with binding parameters reported, but disposition parameter values (CL, V) are not shown in the evidence. |
| popPK | Lin_2017 | irrelevant | 1 | 1 | Flumazenil is used only as a blocking/pretreatment agent; the PK parameters (VT, K1) are for the radiotracer [11C]ADO, not for flumazenil itself. |
| popPK | Liu_2021 | irrelevant | 0 | 0 | This is a study protocol for remimazolam (not flumazenil) PK; flumazenil is only mentioned as a midazolam antagonist, with no flumazenil parameter values. |
| popPK | Lloyd_1990 | irrelevant | 0 | 0 | In-vitro receptor binding study of hypnotics; flumazenil is only an antagonist tool, no PK parameters. |
| popPK | Lopes_2018 | irrelevant | 3 | 2 | PET tracer kinetic modeling study of [11C]flumazenil binding in rat brain; reports V_T/BP_ND imaging parameters, not disposition PK (CL, V, half-life) of flumazenil as a drug, and numeric regional values are largely in tables/figures not fully provided. |
| popPK | Mandema_1991 | irrelevant | 0 | 0 | Flumazenil appears only as a radioligand for receptor binding assays; the PK/PD model concerns flunitrazepam, midazolam, oxazepam and clobazam, not flumazenil. |
| PGx | Mattner_2021 | not_relevant | 0 | 0 | Flumazenil appears only as a blocking control for TSPO binding specificity; no gene variant effect on flumazenil PK/PD is reported. |
| popPK | McGrath_2020 | irrelevant | 0 | 0 | Flumazenil is only used as a benzodiazepine receptor antagonist tool in electrophysiology and zebrafish anesthesia studies; no PK parameters for flumazenil are reported. |
| popPK | Mian_2024 | irrelevant | 0 | 0 | This is a medicinal chemistry/antiparasitic efficacy study of meclonazepam analogs; flumazenil is not the subject and no PK parameters are reported. |
| popPK | Millet_1995 | irrelevant | 3 | 2 | PET receptor-binding imaging study using [11C]flumazenil as a radioligand; kinetic parameters describe brain receptor binding, not systemic disposition, and no numeric PK values appear in the evidence. |
| popPK | Millet_1996 | irrelevant | 3 | 2 | PET receptor-binding imaging study of [11C]flumazenil kinetics, not a disposition PK study; no numeric CL/V values present in the evidence. |
| popPK | Millet_2000 | irrelevant | 2 | 1 | Flumazenil is only a PET receptor-binding tracer; no disposition PK parameters (CL, V, half-life) for flumazenil are reported, only binding parameters. |
| popPK | Mourik_2008 | irrelevant | 3 | 2 | PET imaging tracer-kinetics study of [11C]flumazenil reporting imaging parameters (VT, K1, AUC ratios), not disposition PK (CL/V/compartmental model) of flumazenil as a drug; numeric values are mostly ratios, not full parameters. |
| popPK | Muglia_2020 | irrelevant | 0 | 0 | Flumazenil is only used as a PET radiotracer to measure GABA_A receptor occupancy of padsevonil; no PK parameters for flumazenil itself are reported. |
| popPK | Mullally_2014 | irrelevant | 0 | 0 | Flumazenil is used only as a receptor antagonist probe in a pharmacodynamic study of a plant extract; no PK parameters for flumazenil are reported. |
| popPK | Myers_2012 | irrelevant | 2 | 2 | This is a PET receptor-binding study of [11C]Ro15-4513/[11C]flumazenil brain kinetics (VT, occupancy), not a disposition PK study of flumazenil with CL/V/compartment parameters; tracer kinetic values present are for Ro15-4513, not flumazenil disposition. |
| PGx | Nasrallah_2013 | not_relevant | 0 | 0 | Text only mentions radiolabeled flumazenil as a PET ligand; no gene variant or PK/PD effect reported. |
| popPK | Nieman_2020 | irrelevant | 0 | 0 | Flumazenil is used only as a GABAAR antagonist tool in vitro; no PK parameters for flumazenil are reported. |
| popPK | Obara_2022 | irrelevant | 2 | 1 | Editorial commentary on remimazolam PK-PD; flumazenil is only a co-administered antagonist with no quantitative flumazenil PK parameters reported. |
| popPK | Odano_2009 | irrelevant | 3 | 2 | PET receptor-binding kinetics of radiolabeled flumazenil in brain, not disposition PK (CL/V) of flumazenil; no numeric parameter values present in evidence. |
| PGx | Olkkola_2008 | not_relevant | 2 | 3 | Review chapter mentions CYP metabolism of flumazenil but reports no gene variant/genotype effect on any PK or PD parameter. |
| popPK | Pawlak_2021 | irrelevant | 0 | 0 | This is a surgical technique paper on manual hernia reduction; flumazenil is only mentioned as a benzodiazepine reversal agent with a dosing recommendation, no PK parameters. |
| popPK | Pearl_2009 | irrelevant | 1 | 1 | Flumazenil is used only as a PET tracer measuring receptor binding potential (BP_ND), not disposition PK parameters like CL, V, or a population-PK model. |
| popPK | Prieto_2015 | irrelevant | 0 | 0 | PET image reconstruction optimization study; flumazenil is only a radiotracer in phantoms, no PK parameters. |
| popPK | Pu_2025 | irrelevant | 0 | 0 | This is an ENPP1 inhibitor (ISM5939) drug-discovery study; flumazenil is not mentioned and no flumazenil PK parameters appear. |
| popPK | Python_1993 | irrelevant | 0 | 0 | Flumazenil is only mentioned as a central-type benzodiazepine comparator in an in vitro adrenal cell study; no PK parameters reported. |
| popPK | Rajarao_2007 | irrelevant | 0 | 0 | Flumazenil is only used as a pharmacological antagonist in behavioral assays; no PK parameters for it are reported. |
| popPK | Ratcliffe_1995 | irrelevant | 0 | 0 | In-vitro phototoxicity study of ALA/PPIX in rat pancreatoma cells; flumazenil is only a comparator ligand with EC50 shifts, no PK parameters. |
| PGx | Ronda-Roca_2025 | not_relevant | 2 | 2 | Mentions smoking/CYP1A2 affecting imepitoin half-life, but no gene variant effect on flumazenil PK/PD parameters is reported. |
| popPK | Sakiyama_2006 | irrelevant | 2 | 2 | This is a receptor-binding kinetic study in mouse brain using [3H]flumazenil as a radioligand, not a pharmacokinetic disposition study; no CL/V/compartmental PK parameters for flumazenil are reported. |
| popPK | Salmi_2004 | irrelevant | 2 | 3 | PET receptor-binding study using 11C-flumazenil as a tracer; reports distribution volumes in brain, not disposition PK parameters (CL, V, half-life) for flumazenil. |
| popPK | Sanabria-Bohórquez_2001 | irrelevant | 3 | 2 | PET receptor-binding study using [11C]flumazenil as tracer; no disposition PK parameters (CL, V, half-life) reported, and no numeric model parameter values appear in the evidence. |
| popPK | Sanna_1999 | irrelevant | 0 | 0 | This is a pharmacodynamic/receptor-binding study of etizolam; flumazenil appears only as an antagonist with no PK parameters reported. |
| PGx | Savaryn_2022 | not_relevant | 0 | 0 | In vitro CYP3A4 induction study with no gene variant/genotype/phenotype effect on flumazenil PK/PD parameters. |
| popPK | Schmid_1996 | irrelevant | 0 | 0 | In-vitro rat synaptosome pharmacology study; flumazenil is only a receptor antagonist tool, no PK parameters. |
| popPK | Singhuber_2011 | irrelevant | 0 | 0 | Flumazenil is only used as a receptor antagonist probe in an in vitro electrophysiology study; no PK parameters for flumazenil are reported. |
| PGx | Stanford_1999 | not_relevant | 0 | 0 | Case report of postoperative delirium with no pharmacogenomic effect on flumazenil PK/PD parameters. |
| popPK | Syafni_2022 | irrelevant | 0 | 0 | Natural products chemistry study of GABAA receptor modulators; flumazenil is only used as a benzodiazepine-site antagonist probe, with no PK parameters reported. |
| popPK | Thomas_1997 | irrelevant | 0 | 0 | Flumazenil is only used as a benzodiazepine antagonist in in-vitro receptor binding/electrophysiology; no PK parameters for flumazenil are reported. |
| PGx | Tournier_2011 | not_relevant | 2 | 3 | In vitro transporter substrate screening in transfected cell lines; no gene variant/genotype effect on flumazenil PK/PD parameters in patients. |
| popPK | Trailovic_2011 | irrelevant | 0 | 0 | Flumazenil is only used as a pharmacodynamic antagonist in an ivermectin toxicity study in rats; no PK parameters (CL, V, half-life, model) for flumazenil are reported. |
| popPK | Van_2008 | irrelevant | 0 | 0 | Flumazenil is only used as a PET radioligand tracer; the study drug is TPA023B and no flumazenil disposition parameters are reported. |
| PGx | Wright_2011 | not_relevant | 0 | 0 | Flumazenil given in one case without any reported PK/PD effect of ABCB1-1Δ genotype; no pharmacogenomic effect on flumazenil parameters. |
| popPK | Wu_2002 | irrelevant | 1 | 1 | Flumazenil is only a PET tracer probe in a neuroreceptor imaging simulation; no disposition PK parameters (CL, V, t½) for flumazenil are reported. |
| PGx | Yaqub_2006 | not_relevant | 0 | 0 | Paper evaluates PET optimization algorithms/weighting for flumazenil tracer kinetics; no gene variant or pharmacogenomic effect on PK/PD parameters. |
| popPK | Zelmanoff_2025 | irrelevant | 0 | 0 | This is an oxytocin neuroscience study in mouse pups with no flumazenil PK data or parameters. |
| popPK | Zhang_2025 | irrelevant | 0 | 0 | This is a study protocol for remimazolam vs propofol; flumazenil is only mentioned as a reversal agent, and the PK values cited are for remimazolam/midazolam, not flumazenil. |
| PGx | Zhang_2025_2 | not_relevant | 0 | 0 | The paper concerns remimazolam pharmacogenetics (CES1 G143E); flumazenil is only mentioned as an antagonist with no gene-variant effect on its PK/PD reported. |
| popPK | Zhang_2026 | irrelevant | 0 | 0 | Flumazenil is only mentioned as a standby reversal agent; no PK parameters for flumazenil are reported. |
| popPK | Zheng_1996 | irrelevant | 0 | 0 | In-vitro neuronal culture study of GABA(A) receptor expression with no pharmacokinetic parameters for flumazenil. |
| PGx | Zhou_2026 | not_relevant | 2 | 5 | The CES1 G143E variant affects remimazolam metabolism/clearance, not any pharmacokinetic or pharmacodynamic parameter of flumazenil itself. |
| popPK | van_2021 | irrelevant | 0 | 0 | This is a midazolam (and its metabolites) population PK study; flumazenil is only mentioned as a reversal agent, with no flumazenil PK parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 19:22 UTC</sub>
