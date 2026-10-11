<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V03A&quot;,&quot;href&quot;:&quot;atc/V03A.md&quot;},{&quot;label&quot;:&quot;protamine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Protamine_Butterworth2002_reference&quot;,&quot;label&quot;:&quot;Butterworth_2002_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_protamine/Protamine_Butterworth2002_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# protamine

- **generic name:** protamine
- **ATC codes:** `V03AB14`
- **DrugBank:** [DB13700](https://go.drugbank.com/drugs/DB13700) · **PubChem:** not captured
- **groups:** approved, investigational, withdrawn

## About

Protamine is an antidote used to reverse the blood-thinning effect of heparin, for example after heart surgery or when heparin causes excessive bleeding. It remains in use today, mainly in hospital settings such as operating theatres and dialysis units.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5449573](https://www.wikidata.org/wiki/Q5449573) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:29 | 4:15 | 1/1/0 | 2/2/0 | 0/0/0 | 175,099/9,696 | ollama / glm-5.3-flash | 5 | 5/0 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Butterworth_2002_reference](drugs/drug_protamine/Protamine_Butterworth2002_reference.md) | ▶ model + simulator | 1-compartment, IV | 4 | Butterworth J et al., The pharmacokinetics and cardiovascular…, Anesthesia and analgesia (2002) | [10.1097/00000539-200203000-00008](https://doi.org/10.1097/00000539-200203000-00008) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Lanoiselée_2026_reference](drugs/drug_protamine/Protamine_Lanoisele2026_reference.md) | — | general linear (no model) | 2 | Lanoiselée J et al., Optimising protamine dosing for heparin…, British journal of anaesthe… (2026) | [10.1016/j.bja.2025.11.057](https://doi.org/10.1016/j.bja.2025.11.057) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Lanoiselée_2026_ACT](drugs/drug_protamine/pd_Lanoisel_e_2026_ACT.md) | activated clotting time ← unfractionated heparin (anti-Xa activity) · direct sigmoid Emax (Hill) effect | — | Lanoiselée J et al., Optimising protamine dosing for heparin…, British journal of anaesthe… (2026) | [10.1016/j.bja.2025.11.057](https://doi.org/10.1016/j.bja.2025.11.057) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Moreira-Ludewig_1992_lysozyme_release](drugs/drug_protamine/pd_Moreira_Ludewig_1992_lysozyme_release.md) | lysozyme release from human neutrophils (rhC5a-induced) ← protamine · direct sigmoid Emax (Hill) effect | — | Moreira-Ludewig R et al., A rapid microtiter plate method for the…, Journal of pharmacological… (1992) | [10.1016/1056-8719(92)90027-x](https://doi.org/10.1016/1056-8719(92)90027-x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Orescanin-Dusić_2009_calcium_induced_rhythmic_contractions_of_isolated_rat_uterus_relaxation](drugs/drug_protamine/pd_Orescanin_Dusi_2009_calcium_induced_rhythmic_contractions_of.md) | calcium-induced rhythmic contractions of isolated rat uterus (relaxation) ← protamine sulphate · direct Emax (saturable) effect | — | Orescanin-Dusić Z et al., Effects of protamine sulphate on sponta…, General physiology and biop… (2009) | — |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Orescanin-Dusić_2009_spontaneous_rhythmic_contractions_of_isolated_rat_uterus_relaxation](drugs/drug_protamine/pd_Orescanin_Dusi_2009_spontaneous_rhythmic_contractions_of_iso.md) | spontaneous rhythmic contractions of isolated rat uterus (relaxation) ← protamine sulphate · direct Emax (saturable) effect | — | Orescanin-Dusić Z et al., Effects of protamine sulphate on sponta…, General physiology and biop… (2009) | — |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Rüdiger_1999_Ca2_i](drugs/drug_protamine/pd_R_diger_1999_Ca2_i.md) | cytosolic calcium activity ([Ca2+]i) in podocytes ← protamine sulfate · direct Emax (saturable) effect | — | Rüdiger F et al., Polycations induce calcium signaling in…, Kidney international (1999) | [10.1046/j.1523-1755.1999.00729.x](https://doi.org/10.1046/j.1523-1755.1999.00729.x) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 39 matched, 20 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Butterworth_2002.pdf` | Butterworth J et al., The pharmacokinetics and cardiovascular…, Anesthesia and analgesia (2002) | popPK | 10 | [10.1097/00000539-200203000-00008](https://doi.org/10.1097/00000539-200203000-00008) | [11867368](https://pubmed.ncbi.nlm.nih.gov/11867368) | Human volunteer PK study of protamine with numeric Vss, CL, and t1/2 reported directly in the abstract. |

<sub>queue written 2026-10-07T19:25:59.127432+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Al-Sallami_2016 | irrelevant | 0 | 0 | The subject drug is heparin; protamine appears only as a titration assay reagent, not as a drug with PK parameters. |
| popPK | Bellvé_1992 | irrelevant | 0 | 0 | This is a cell biology study of sperm nuclear protamines, not a pharmacokinetic study of the drug protamine. |
| popPK | Chang_2025 | irrelevant | 0 | 0 | The subject drug is insulin (NPH insulin merely contains protamine as a complexing excipient); no protamine PK parameters are reported. |
| popPK | Jia_2015 | irrelevant | 0 | 0 | This is a population PK study of unfractionated heparin; protamine is only the neutralizing co-agent, with no protamine disposition parameters reported. |
| popPK | Kulesh_2022 | irrelevant | 0 | 0 | The subject drug is insulin aspart; protamine appears only as a formulation component of the insulin suspension, with no protamine disposition parameters reported. |
| popPK | Miles_2021 | irrelevant | 2 | 1 | This is a clinical trial of protamine dosing guided by a heparin PK model; no protamine disposition parameters (CL, V, half-life) for protamine itself are reported. |
| popPK | Moreira-Ludewig_1992 | irrelevant | 0 | 0 | Protamine is only used as an in-vitro inhibitor of C5a-induced lysozyme release; no PK disposition parameters are reported. |
| popPK | Morris_2007 | irrelevant | 2 | 0 | This is a perfusion simulator paper; protamine is only one of many simulated drugs with a three-compartment model, and no numeric PK parameter values are provided. |
| popPK | Orescanin-Dusić_2009 | irrelevant | 0 | 0 | In-vitro pharmacodynamic study of protamine on rat uterine contractions; no PK disposition parameters reported. |
| popPK | Raner_2024 | irrelevant | 1 | 0 | This is a meta-analysis of heparin/protamine dosing strategies for CPB outcomes; no protamine PK parameters (CL, V, half-life, compartmental model) are reported, only dose ratios and clinical outcomes. |
| popPK | Rüdiger_1999 | irrelevant | 0 | 0 | In vitro mechanistic study of calcium signaling in cultured podocytes; no PK disposition parameters for protamine. |
| popPK | Saville_1993 | irrelevant | 0 | 0 | In-vitro biochemical study of insulin receptor phosphorylation; protamine is only a reagent, with no PK parameters. |
| popPK | Tallant_1984 | irrelevant | 0 | 0 | This is an in-vitro enzyme biochemistry study where protamine is merely a substrate, with no pharmacokinetic parameters. |
| popPK | Tham_2017 | irrelevant | 0 | 0 | This is a population PK study of insulin formulations; protamine appears only as a formulation excipient (NPH, lispro protamine suspension), not as the subject drug with its own disposition parameters. |
| popPK | Vespe_2024 | irrelevant | 0 | 0 | Clinical dosing/outcomes study of protamine in cardiac surgery with no PK disposition parameters (CL, V, half-life, or model) reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 19:26 UTC</sub>
