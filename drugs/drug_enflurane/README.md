<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N01A&quot;,&quot;href&quot;:&quot;atc/N01A.md&quot;},{&quot;label&quot;:&quot;enflurane&quot;}]"></div>

# enflurane

- **generic name:** enflurane
- **ATC codes:** `N01AB04`
- **DrugBank:** [DB00228](https://go.drugbank.com/drugs/DB00228) · **PubChem:** [CID 3226](https://pubchem.ncbi.nlm.nih.gov/compound/3226)
- **molar mass:** 184.492 g/mol (C3H2ClF5O) — DrugBank
- **groups:** approved, vet_approved, withdrawn

## About

Enflurane is a halogenated inhalational anaesthetic that was used to produce general anaesthesia, and has also been used in status asthmaticus. It has been withdrawn from use, having been largely replaced by newer anaesthetics.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q416740](https://www.wikidata.org/wiki/Q416740) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Grasshoff_2006_mean_firing_rate](drugs/drug_enflurane/pd_Grasshoff_2006_mean_firing_rate.md) | mean firing rate ← enflurane · direct sigmoid Emax (Hill) effect | — | Grasshoff C et al., Effects of isoflurane and enflurane on…, British journal of anaesthe… (2006) | [10.1093/bja/ael239](https://doi.org/10.1093/bja/ael239) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Martin_1991_3H_MK_801](drugs/drug_enflurane/pd_Martin_1991_3H_MK_801.md) | [3H]MK-801 binding (glutamate-stimulated) ← enflurane · direct sigmoid Emax (Hill) effect | — | Martin DC et al., Volatile anesthetics and NMDA receptors…, Neuroscience letters (1991) | [10.1016/0304-3940(91)90436-w](https://doi.org/10.1016/0304-3940(91)90436-w) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Wakamori_1991_ICl](drugs/drug_enflurane/pd_Wakamori_1991_ICl.md) | GABA-induced chloride current ← enflurane · direct sigmoid Emax (Hill) effect | — | Wakamori M et al., Effects of two volatile anesthetics and…, Journal of neurophysiology (1991) | [10.1152/jn.1991.66.6.2014](https://doi.org/10.1152/jn.1991.66.6.2014) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=enflurane).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | lung | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | liver | `CYP2E1` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ATP2A1 (inhibitor), ATP2A1 (stimulator), ATP2C1 (inhibitor), CACNG1 (activator), CACNG1 (inhibitor), GABRA1 (potentiator), GLRA1 (potentiator), GRIN1 (target), KCND1 (activator), KCND1 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 04:14 | 1:32 | 0/0/0 | 2/1/0 | 0/0/0 | 202,389/6,121 | einfracz / qwen3.8-27b | 20 | 6/0 | 6/0 | 0 |

## Coverage

- **PubMed hits:** 55 matched, 51 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Carpenter_1986.pdf` | Carpenter RL et al., Pharmacokinetics of inhaled anesthetics…, Anesthesia and analgesia (1986) | popPK | 9 | not captured | [3706798](https://pubmed.ncbi.nlm.nih.gov/3706798) | The study fits multi-exponential compartmental models to enflurane washout data in humans and interprets compartments in terms of tissue perfusion/solubility (PK parameters), but the specific numeric values (time constants, volumes, clearances) are not explicitly listed in the provided abstract/text. |

<sub>queue written 2026-10-07T04:13:46.616420+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Akata_1995 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study on vascular smooth muscle contractility, not a pharmacokinetic study, and reports no disposition parameters for enflurane. |
| popPK | Antkowiak_1997 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of neuronal firing rates, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Antkowiak_1999 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of anesthetic mechanisms (GABA(A) receptor effects) and does not report quantitative pharmacokinetic parameters (CL, V, t1/2) for enflurane. |
| popPK | Aronstam_1994 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of NMDA receptor inhibition, not a pharmacokinetic study reporting disposition parameters for enflurane. |
| popPK | Boer_1996 | irrelevant | 0 | 0 | The study focuses on the pulmonary pharmacokinetics of sufentanil, with enflurane serving only as a background anesthetic agent and not the subject of PK modeling. |
| popPK | Borghese_2012 | irrelevant | 0 | 0 | The study focuses on the mechanism of action (glycine receptor mutations) and anesthetic potency (MAC) of isoflurane and enflurane, not their quantitative population pharmacokinetic parameters. |
| popPK | Carpenter_1986 | relevant | 9 | 4 | The study fits multi-exponential compartmental models to enflurane washout data in humans and interprets compartments in terms of tissue perfusion/solubility (PK parameters), but the specific numeric values (time constants, volumes, clearances) are not explicitly listed in the provided abstract/text. |
| popPK | Dale_1986 | irrelevant | 0 | 0 | This is an in vitro mechanistic study on drug binding and displacement by volatile anesthetics, not a pharmacokinetic study reporting disposition parameters (CL, V, t1/2) for enflurane. |
| popPK | Downie_1996 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of glycine receptors where enflurane is used as a modulator/comparator agent, rather than a pharmacokinetic study measuring disposition parameters. |
| popPK | Forman_1998 | irrelevant | 0 | 0 | The study reports mechanistic binding constants (IC50, Kd) for enflurane, not pharmacokinetic disposition parameters like clearance or volume of distribution. |
| popPK | Garnett_1980 | irrelevant | 0 | 0 | Enflurane is used only as an anesthetic agent to facilitate the study of dopa transport in monkeys, not as the subject drug for pharmacokinetic analysis. |
| popPK | Gepts_1987 | irrelevant | 1 | 0 | The study investigates the pharmacokinetics of meptazinol, with enflurane serving only as a co-administered anesthetic agent, not as the subject drug. |
| popPK | Ghoneim_1978 | irrelevant | 1 | 0 | The study reports pharmacokinetic parameters for thiopentone, using enflurane only as a co-administered anesthetic agent without measuring its own PK. |
| popPK | Grasshoff_2006 | irrelevant | 0 | 0 | The paper reports in-vitro pharmacodynamic data (EC50 for neuronal depression) rather than population pharmacokinetic parameters like clearance or volume of distribution. |
| popPK | Guo_2014 | irrelevant | 0 | 0 | The study focuses on anesthetic potency (ED50/EC50) and mechanism, not pharmacokinetic disposition parameters. |
| popPK | Hall_1988_2 | irrelevant | 1 | 0 | The study reports pharmacokinetic parameters for the subject drug midazolam, while enflurane is used only as a background anesthetic agent. |
| popPK | Harris_1993 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro investigation of anesthetic effects on GABA-A receptor binding and does not report any pharmacokinetic parameters for enflurane. |
| popPK | Jaklitsch_1990_2 | irrelevant | 0 | 0 | The study is a simulation of neuromuscular blockade pharmacodynamics, where enflurane is merely a concomitant anesthetic agent, not the subject of PK parameter extraction. |
| popPK | Jenkins_1996 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological analysis of the effect of enflurane on 5-HT3 receptors in mouse cells, not a pharmacokinetic study measuring disposition parameters. |
| popPK | Kinefuchi_1987 | irrelevant | 0 | 0 | The study reports respiratory impedance parameters (R, C, L) for a mechanical lung model, not pharmacokinetic disposition parameters (CL, V, t1/2) for the drug enflurane. |
| popPK | Kinefuchi_1988 | irrelevant | 0 | 0 | The study investigates airway dynamics and resistance, not pharmacokinetic parameters like clearance or volume. |
| popPK | LaBella_1995 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic analysis of cytochrome P450 inhibition and does not report quantitative pharmacokinetic parameters (CL, V, etc.) for enflurane. |
| popPK | Lin_1992 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on GABA receptor potentiation in Xenopus oocytes and does not report pharmacokinetic parameters for enflurane. |
| popPK | Liu_1995 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of propofol, and enflurane is only mentioned as a comparator drug for sensitivity differences, not the subject of PK analysis. |
| popPK | Martin_1991 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of enflurane's effect on NMDA receptor binding, containing no pharmacokinetic disposition parameters. |
| popPK | Martin_1995 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological assay examining the mechanism of action of enflurane on NMDA receptors, reporting binding data and IC50s rather than pharmacokinetic disposition parameters like clearance or volume. |
| popPK | Mascia_1996 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of enflurane's effect on glycine receptors in Xenopus oocytes, reporting potentiation percentages and concentrations rather than pharmacokinetic parameters like clearance or volume. |
| popPK | McKenzie_1989 | irrelevant | 0 | 0 | This study measures EC50 (potency) in Daphnia magna and does not report pharmacokinetic parameters such as clearance, volume, or half-life for enflurane. |
| popPK | Murat_1988 | irrelevant | 0 | 0 | The study is a mechanistic investigation of anesthetic effects on cardiac contractile proteins (calcium sensitivity), not a pharmacokinetic study. |
| popPK | Murphy_1981 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for morphine in patients anesthetized with enflurane; enflurane is only the background anesthetic agent, not the subject drug. |
| popPK | Nishi_1998 | irrelevant | 0 | 0 | The study measures the pharmacokinetics of indocyanine green (ICG) as a probe drug for liver function; enflurane is used only as an anesthetic to assess its effect on ICG clearance, not as the subject drug. |
| popPK | Nishikawa_2003 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of GABA receptor pharmacology, not a pharmacokinetic study reporting disposition parameters for enflurane. |
| popPK | Nomura_1992 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of vecuronium bromide, with enflurane used only as a concomitant anesthetic agent. |
| popPK | Nonaka_1992 | irrelevant | 0 | 0 | The study focuses on fentanyl pharmacokinetics, with enflurane only mentioned as a co-administered anesthetic agent without quantitative PK data. |
| popPK | Quinlan_1998 | irrelevant | 0 | 0 | The study investigates anesthetic sensitivity (EC50 for loss of righting reflex) in knockout mice, which is a pharmacodynamic/mechanism study rather than a pharmacokinetic study reporting clearance, volume, or half-life. |
| popPK | Sato_1991 | irrelevant | 0 | 0 | This is a hemodynamic study measuring cardiac output and contractility in dogs, reporting no pharmacokinetic parameters (CL, V, t1/2, etc.) for enflurane. |
| popPK | Schmitt_1991 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of midazolam, with enflurane used only as a background anesthetic agent. |
| popPK | Schwieger_1991_2 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ketamine in dogs, using enflurane only as a background anesthetic agent to define endpoints, rather than as the subject of the PK analysis. |
| popPK | Tagliente_1992 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of anesthetic effects on guinea pig trachea, reporting no pharmacokinetic disposition parameters for enflurane. |
| popPK | Tauzin-Fin_1991 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of propofol, with enflurane used only as a background anesthetic agent at a fixed concentration. |
| popPK | Ueda_1990 | irrelevant | 3 | 0 | The paper discusses a compartmental model for enflurane but provides no specific numeric parameter values (CL, V, Q, ka, half-life) in the evidence. |
| popPK | Voss_2006 | irrelevant | 0 | 0 | The study investigates electrophysiological effects (seizure propensity) of volatile anesthetics in sheep, not pharmacokinetic disposition parameters. |
| popPK | Wakamori_1991 | irrelevant | 0 | 0 | The study examines the pharmacodynamic effects of enflurane on neuronal membrane currents in an in-vitro model, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Xue_1996 | irrelevant | 1 | 0 | The study measures the pharmacokinetics of pancuronium while enflurane is administered as a co-anesthetic (comparator), not the pharmacokinetics of enflurane itself. |
| popPK | Xue_1996_2 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of pancuronium bromide, with enflurane serving only as the background anesthetic agent. |
| popPK | Xue_1997 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for vecuronium, while enflurane is only mentioned as a co-administered anesthetic agent. |
| popPK | Xue_1998 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for vecuronium, with enflurane used only as a background anesthetic agent. |
| popPK | Yamakura_2001 | irrelevant | 0 | 0 | The paper describes in vitro electrophysiological effects of enflurane on potassium channels in Xenopus oocytes and contains no pharmacokinetic parameters. |
| popPK | Zhang_2003 | irrelevant | 0 | 0 | The paper is an in-vitro isothermal titration calorimetry study measuring binding thermodynamics (Kd, enthalpy) of enflurane to a synthetic protein, not pharmacokinetic disposition parameters (CL, V, t1/2). |
| popPK | Zhou_2012 | irrelevant | 0 | 0 | The study is a mechanistic/in-vitro investigation using Paramecium to assess anesthetic effects, not a pharmacokinetic study reporting quantitative disposition parameters for enflurane. |
| popPK | Zhou_2012_2 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study investigating the interaction of enflurane with calmodulin, not a pharmacokinetic study reporting disposition parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
