<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05B&quot;,&quot;href&quot;:&quot;atc/N05B.md&quot;},{&quot;label&quot;:&quot;clobazam&quot;}]"></div>

# clobazam

- **generic name:** clobazam
- **ATC codes:** `N05BA09`
- **DrugBank:** [DB00349](https://go.drugbank.com/drugs/DB00349) · **PubChem:** [CID 2789](https://pubchem.ncbi.nlm.nih.gov/compound/2789)
- **molar mass:** 300.74 g/mol (C16H13ClN2O2) — DrugBank
- **groups:** approved, illicit, investigational

## About

Clobazam is a benzodiazepine used as an anticonvulsant to treat epilepsy, and also classed as an anxiolytic. It is an approved medicine, though as a benzodiazepine it carries a boxed warning and is a controlled substance.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q412164](https://www.wikidata.org/wiki/Q412164) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| clobazam | parent | 300.74 | C16H13ClN2O2 | DrugBank | [2789](https://pubchem.ncbi.nlm.nih.gov/compound/2789) | Tolbert_2019, Tuo_2025 |
| N-desmethylclobazam | metabolite | 286.715 | C15H11ClN2O2 | PubChem | [89657](https://pubchem.ncbi.nlm.nih.gov/compound/89657) | Tolbert_2019, Tuo_2025 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 22:27 | 3:42 | 0/5/1 | 5/0/0 | 0/0/0 | 154,572/13,441 | einfracz / qwen3.8-27b | 5 | 2/3 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q23 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Tolbert_2019_reference](drugs/drug_clobazam/Clobazam_Tolbert2019_reference.md) | — | parent + metabolite (no model) | 1 | Tolbert D et al., A Comprehensive Overview of the Clinica…, Journal of clinical pharmac… (2019) | [10.1002/jcph.1313](https://doi.org/10.1002/jcph.1313) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Klein_2019_reference](drugs/drug_clobazam/Clobazam_Klein2019_reference.md) | — | parent + metabolite (no model) | 0 | Klein P et al., Drug-drug interactions and pharmacodyna…, Epilepsy & behavior : E&B (2019) | [10.1016/j.yebeh.2019.106459](https://doi.org/10.1016/j.yebeh.2019.106459) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.167). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Tuo_2025_final_model_median](drugs/drug_clobazam/Clobazam_Tuo2025_final_model_median.md) | — | parent + metabolite (no model) | 4 | Tuo Y et al., Population Pharmacokinetics and Model-I…, Pharmaceutics (2025) | [10.3390/pharmaceutics17070813](https://doi.org/10.3390/pharmaceutics17070813) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.167). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Tuo_2025_im](drugs/drug_clobazam/Clobazam_Tuo2025_im.md) | — | parent + metabolite (no model) | 2 | Tuo Y et al., Population Pharmacokinetics and Model-I…, Pharmaceutics (2025) | [10.3390/pharmaceutics17070813](https://doi.org/10.3390/pharmaceutics17070813) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.167). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Tuo_2025_nm](drugs/drug_clobazam/Clobazam_Tuo2025_nm.md) | — | parent + metabolite (no model) | 2 | Tuo Y et al., Population Pharmacokinetics and Model-I…, Pharmaceutics (2025) | [10.3390/pharmaceutics17070813](https://doi.org/10.3390/pharmaceutics17070813) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.167). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Tuo_2025_pm](drugs/drug_clobazam/Clobazam_Tuo2025_pm.md) | — | parent + metabolite (no model) | 2 | Tuo Y et al., Population Pharmacokinetics and Model-I…, Pharmaceutics (2025) | [10.3390/pharmaceutics17070813](https://doi.org/10.3390/pharmaceutics17070813) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Danhof_1992_EEG](drugs/drug_clobazam/pd_Danhof_1992_EEG.md) | amplitudes in the 12-30 Hz frequency band of the EEG ← clobazam · direct sigmoid Emax (Hill) effect | — | Danhof M et al., Modelling of the pharmacodynamics and p…, International journal of cl… (1992) | — |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Hoogerkamp_1996_anticonvulsant_effect](drugs/drug_clobazam/pd_Hoogerkamp_1996_anticonvulsant_effect.md) | anticonvulsant effect ← clobazam · direct sigmoid Emax (Hill) effect | — | Hoogerkamp A et al., Pharmacokinetic/pharmacodynamic relatio…, The Journal of pharmacology… (1996) | — |
| <span class="pk-badge pk-badge--green">extracted</span> | [Klein_2019_seizure_probability](drugs/drug_clobazam/pd_Klein_2019_seizure_probability.md) | seizure probability ← clobazam · inhibition effect | — | Klein P et al., Drug-drug interactions and pharmacodyna…, Epilepsy & behavior : E&B (2019) | [10.1016/j.yebeh.2019.106459](https://doi.org/10.1016/j.yebeh.2019.106459) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Klein_2019_seizure_protection](drugs/drug_clobazam/pd_Klein_2019_seizure_protection.md) | seizure protection ← clobazam, N-clobazam · direct Emax (saturable) effect | — | Klein P et al., Drug-drug interactions and pharmacodyna…, Epilepsy & behavior : E&B (2019) | [10.1016/j.yebeh.2019.106459](https://doi.org/10.1016/j.yebeh.2019.106459) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Mandema_1991_amplitudes_in_the_11_5_to_30_Hz_frequency_range](drugs/drug_clobazam/pd_Mandema_1991_amplitudes_in_the_11_5_to_30_Hz_frequency_range.md) | amplitudes in the 11.5 to 30 Hz frequency range ← clobazam · direct sigmoid Emax (Hill) effect | — | Mandema JW et al., Pharmacokinetic-pharmacodynamic modelin…, The Journal of pharmacology… (1991) | — |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Visser_2003_EEG](drugs/drug_clobazam/pd_Visser_2003_EEG.md) | electroencephalogram effects ← clobazam · direct Emax (saturable) effect | — | Visser SA et al., Mechanism-based pharmacokinetic/pharmac…, The Journal of pharmacology… (2003) | [10.1124/jpet.102.042341](https://doi.org/10.1124/jpet.102.042341) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Klein_2019_somnolence](drugs/drug_clobazam/pd_Klein_2019_somnolence.md) | somnolence ← N-clobazam · stimulation effect | — | Klein P et al., Drug-drug interactions and pharmacodyna…, Epilepsy & behavior : E&B (2019) | [10.1016/j.yebeh.2019.106459](https://doi.org/10.1016/j.yebeh.2019.106459) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=clobazam).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| distribution | blood | `ALB` binder, `ORM1` binder | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2B6` substrate, `CYP2C19` substrate, `CYP2C8` substrate, `CYP2C9` inhibitor, `CYP2D6` inhibitor, `CYP3A4` inducer/substrate, `CYP3A5` substrate, `CYP3A7` substrate, `UGT1A1` upregulator, `UGT1A4` inhibitor, `UGT1A6` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/substrate, `CYP3A5` substrate, `UGT1A1` upregulator, `UGT1A6` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: CYP2C18 (substrate), GABRA1 (positive allosteric modulator), GABRA1 (target), GABRG3 (modulator), UGT2B4 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 33 matched, 20 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 6  ·  extracted 0  ·  needs_review 1  ·  rejected 5  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Klein_2019.pdf` | Klein P et al., Drug-drug interactions and pharmacodyna…, Epilepsy & behavior : E&B (2019) | popPK | 9 | [10.1016/j.yebeh.2019.106459](https://doi.org/10.1016/j.yebeh.2019.106459) | [31519475](https://pubmed.ncbi.nlm.nih.gov/31519475) | The paper describes a population pharmacokinetic model for clobazam and its metabolite in humans, with some quantitative parameters (EC50) in the abstract, but specific disposition parameters (CL, V, Q) are likely in the body or supplementary material not fully detailed here. |
| `Tolbert_2016.pdf` | Tolbert D et al., Drug-metabolism mechanism: Knowledge-ba…, Journal of clinical pharmac… (2016) | popPK | 7 | [10.1002/jcph.603](https://doi.org/10.1002/jcph.603) | [26224203](https://pubmed.ncbi.nlm.nih.gov/26224203) | The study reports a population pharmacokinetic model for clobazam in humans, but the specific numeric parameter values (CL, V, etc.) are not explicitly provided in the text, only percentage changes and model descriptions. |
| `Besson_2013.pdf` | Besson M et al., Antihyperalgesic effect of the GABA(A)…, Basic & clinical pharmacolo… (2013) | popPK | 6 | [10.1111/bcpt.12017](https://doi.org/10.1111/bcpt.12017) | [23006671](https://pubmed.ncbi.nlm.nih.gov/23006671) | The study describes a PK-PD model in mice and discusses linear kinetics, but the abstract provided lacks specific numeric values for clearance, volume, or rate constants. |
| `Danhof_1992.pdf` | Danhof M et al., Modelling of the pharmacodynamics and p…, International journal of cl… (1992) | popPK | 6 | not captured | [1490817](https://pubmed.ncbi.nlm.nih.gov/1490817) | The study focuses on pharmacodynamics (EEG effect) and PK/PD modeling, and the abstract does not provide any numeric PK parameters (CL, V, t1/2) for clobazam, only EC50 values. |
| `Visser_2003.pdf` | Visser SA et al., Mechanism-based pharmacokinetic/pharmac…, The Journal of pharmacology… (2003) | popPK | 5 | [10.1124/jpet.102.042341](https://doi.org/10.1124/jpet.102.042341) | [12490579](https://pubmed.ncbi.nlm.nih.gov/12490579) | The study focuses on pharmacodynamic modeling (EEG effects and receptor affinity) for a group of GABAA modulators including clobazam, rather than providing quantitative pharmacokinetic disposition parameters (CL, V, t1/2) for clobazam specifically. |

<sub>queue written 2026-10-14T22:24:28.029510+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Besson_2013 | relevant | 6 | 0 | The study describes a PK-PD model in mice and discusses linear kinetics, but the abstract provided lacks specific numeric values for clearance, volume, or rate constants. |
| popPK | Besson_2015 | irrelevant | 0 | 0 | The study is a pharmacodynamic evaluation of analgesic and sedative effects; although the title mentions a PK-PD study, the provided evidence contains no quantitative pharmacokinetic parameters (CL, V, t1/2, etc.) for clobazam. |
| popPK | Danhof_1992 | irrelevant | 6 | 0 | The study focuses on pharmacodynamics (EEG effect) and PK/PD modeling, and the abstract does not provide any numeric PK parameters (CL, V, t1/2) for clobazam, only EC50 values. |
| popPK | Falcão_2012 | irrelevant | 1 | 0 | The study focuses on the PK of eslicarbazepine, and clobazam is only mentioned as a co-administered drug whose clearance was unaffected, with no specific PK parameters reported for clobazam. |
| popPK | Giraud_2004 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic characterization of CYP450 enzymes mediating clobazam metabolism, reporting enzyme kinetic parameters (Km, Vmax, CLint) rather than systemic disposition parameters (CL, Vd, t1/2) for the drug in a subject. |
| popPK | Hoogerkamp_1996 | irrelevant | 2 | 0 | The study reports pharmacodynamic parameters (EC250, EC50) and receptor binding affinities for clobazam in rats, but does not provide quantitative pharmacokinetic disposition parameters such as clearance, volume of distribution, or half-life. |
| popPK | Li_2023 | irrelevant | 0 | 0 | The study investigates the hepatotoxicity of CBD using human HepaRG cells in vitro, and clobazam is mentioned only as a co-administered drug in clinical trials, not as the subject of any pharmacokinetic analysis. |
| popPK | Mandema_1991 | irrelevant | 3 | 1 | While the study involves clobazam PK in rats, it is a PK-PD study focused on EEG effects and receptor affinity (EC50, Emax), and no specific quantitative disposition parameters (CL, V, T1/2) for clobazam are reported in the provided evidence. |
| popPK | Saruwatari_2010 | irrelevant | 2 | 0 | The paper is a review of genetic polymorphisms and does not provide original quantitative pharmacokinetic parameter values for clobazam. |
| popPK | Tolbert_2016 | relevant | 7 | 2 | The study reports a population pharmacokinetic model for clobazam in humans, but the specific numeric parameter values (CL, V, etc.) are not explicitly provided in the text, only percentage changes and model descriptions. |
| popPK | Vashi_2023 | irrelevant | 0 | 0 | This is a pharmacokinetic study of cenobamate, where clobazam acts only as a concomitant drug affecting clearance, not as the subject of the PK analysis. |
| popPK | Visser_2003 | irrelevant | 5 | 1 | The study focuses on pharmacodynamic modeling (EEG effects and receptor affinity) for a group of GABAA modulators including clobazam, rather than providing quantitative pharmacokinetic disposition parameters (CL, V, t1/2) for clobazam specifically. |
| popPK | Walzer_2012 | irrelevant | 4 | 0 | The study reports relative changes in AUC/Cmax for drug interactions but does not provide absolute quantitative disposition parameters (CL, V, t1/2) for clobazam. |
| popPK | Yano_2019 | irrelevant | 2 | 0 | The paper is a review of pharmacometric studies by the authors; while it mentions clobazam PK/PD findings regarding CYP2C19, it does not report original quantitative PK parameter values (CL, V, etc.) for clobazam, referring only to general findings and figures not provided. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 22:24 UTC</sub>
