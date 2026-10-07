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

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 04:14 | 1:32 | 0/0/0 | 2/1/0 | 0/0/0 | 202,389/6,121 | einfracz / qwen3.8-27b | 20 | 6/0 | 6/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Grasshoff_2006_mean_firing_rate](drugs/drug_enflurane/pd_Grasshoff_2006_mean_firing_rate.md) | mean firing rate ← enflurane · direct sigmoid Emax (Hill) effect | — | Grasshoff C et al., Effects of isoflurane and enflurane on…, British journal of anaesthe… (2006) | [10.1093/bja/ael239](https://doi.org/10.1093/bja/ael239) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Martin_1991_3H_MK_801](drugs/drug_enflurane/pd_Martin_1991_3H_MK_801.md) | [3H]MK-801 binding (glutamate-stimulated) ← enflurane · direct sigmoid Emax (Hill) effect | — | Martin DC et al., Volatile anesthetics and NMDA receptors…, Neuroscience letters (1991) | [10.1016/0304-3940(91)90436-w](https://doi.org/10.1016/0304-3940(91)90436-w) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Wakamori_1991_ICl](drugs/drug_enflurane/pd_Wakamori_1991_ICl.md) | GABA-induced chloride current ← enflurane · direct sigmoid Emax (Hill) effect | — | Wakamori M et al., Effects of two volatile anesthetics and…, Journal of neurophysiology (1991) | [10.1152/jn.1991.66.6.2014](https://doi.org/10.1152/jn.1991.66.6.2014) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=enflurane) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | lung | <sub>named in DrugBank's ADME text</sub> | prose |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | liver | `CYP2E1` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ATP2A1 (inhibitor), ATP2A1 (stimulator), ATP2C1 (inhibitor), CACNG1 (activator), CACNG1 (inhibitor), GABRA1 (potentiator), GLRA1 (potentiator), GRIN1 (target), KCND1 (activator), KCND1 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 55 matched, 51 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

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

---
<sub>Generated by `docs.py` (scholarv2)</sub>
