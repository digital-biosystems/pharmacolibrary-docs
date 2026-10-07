<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;protriptyline&quot;}]"></div>

# protriptyline

- **generic name:** protriptyline
- **ATC codes:** `N06AA11`
- **DrugBank:** [DB00344](https://go.drugbank.com/drugs/DB00344) · **PubChem:** [CID 4976](https://pubchem.ncbi.nlm.nih.gov/compound/4976)
- **molar mass:** 263.3767 g/mol (C19H21N) — DrugBank
- **groups:** approved

## About

Protriptyline is a tricyclic antidepressant used to treat depression, including neurotic disorders. It is an approved medicine, though it is not widely used today and is mainly reserved for cases where other antidepressants are unsuitable.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q408432](https://www.wikidata.org/wiki/Q408432) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:42 | 0:54 | 0/0/1 | 4/0/0 | 0/0/0 | 35,386/2,920 | ollama / glm-5.3-flash | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.667). The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Ziegler_1978_reference](drugs/drug_protriptyline/Protriptyline_Ziegler1978_reference.md) | — | 1-compartment (no model) | 2 | Ziegler VE et al., Protriptyline kinetics, Clinical pharmacology and t… (1978) | [10.1002/cpt1978235580](https://doi.org/10.1002/cpt1978235580) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [An_2020_Kv_current_inhibition](drugs/drug_protriptyline/pd_An_2020_Kv_current_inhibition.md) | Kv current inhibition ← protriptyline · direct sigmoid Emax (Hill) effect | — | An JR et al., Protriptyline, a tricyclic antidepressa…, Acta biochimica et biophysi… (2020) | [10.1093/abbs/gmz159](https://doi.org/10.1093/abbs/gmz159) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Huang_1996_K_contraction](drugs/drug_protriptyline/pd_Huang_1996_K_contraction.md) | Inhibition of high K+ (60 mM)-induced contraction in rat isolated aorta ← protriptyline · inhibition effect | — | Huang Y, Inhibitory effect of noradrenaline upta…, British journal of pharmaco… (1996) | [10.1111/j.1476-5381.1996.tb15223.x](https://doi.org/10.1111/j.1476-5381.1996.tb15223.x) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Huang_1996_NA_contraction](drugs/drug_protriptyline/pd_Huang_1996_NA_contraction.md) | Inhibition of contractile response to noradrenaline (3 microM NA) in rat isolated aorta ← protriptyline · inhibition effect | — | Huang Y, Inhibitory effect of noradrenaline upta…, British journal of pharmaco… (1996) | [10.1111/j.1476-5381.1996.tb15223.x](https://doi.org/10.1111/j.1476-5381.1996.tb15223.x) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rat</span> | [Huang_1997_high_K_6_x_10_2_M_induced_sustained_contraction](drugs/drug_protriptyline/pd_Huang_1997_high_K_6_x_10_2_M_induced_sustained_contraction.md) | high K+ (6 x 10(-2) M)-induced sustained contraction ← protriptyline · inhibition effect | — | Huang Y, Inhibition of contractions by tricyclic…, European journal of pharmac… (1997) | [10.1016/s0014-2999(97)89676-8](https://doi.org/10.1016/s0014-2999(97)89676-8) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Jo_2008_HERG_block](drugs/drug_protriptyline/pd_Jo_2008_HERG_block.md) | HERG current block (Xenopus oocytes, tail current) ← protriptyline · inhibition effect | — | Jo SH et al., Protriptyline block of the human ether-…, Life sciences (2008) | [10.1016/j.lfs.2007.12.004](https://doi.org/10.1016/j.lfs.2007.12.004) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Jo_2008_HERG_block_2](drugs/drug_protriptyline/pd_Jo_2008_HERG_block_2.md) | HERG current block (HEK293 cells, 36 degrees C) ← protriptyline · inhibition effect | — | Jo SH et al., Protriptyline block of the human ether-…, Life sciences (2008) | [10.1016/j.lfs.2007.12.004](https://doi.org/10.1016/j.lfs.2007.12.004) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=protriptyline) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| — | brain | `SLC6A4` inhibitor | DrugBank actor |
| — | platelet | `SLC6A4` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: SLC6A2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 30 matched, 30 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ziegler_1978.pdf` | Ziegler VE et al., Protriptyline kinetics, Clinical pharmacology and t… (1978) | popPK | 10 | [10.1002/cpt1978235580](https://doi.org/10.1002/cpt1978235580) | [639433](https://pubmed.ncbi.nlm.nih.gov/639433) | Human single-dose PK study reporting half-life, volume of distribution, and first-pass estimates directly in the abstract. |
| `Moody_1977.pdf` | Moody JP et al., Pharmacokinetic aspects of protriptylin…, European journal of clinica… (1977) | popPK | 6 | [10.1007/BF00561788](https://doi.org/10.1007/BF00561788) | [832658](https://pubmed.ncbi.nlm.nih.gov/832658) | Human single-dose study reporting half-life range (54–198 h) and qualitative volume of distribution, but no numeric V/CL values are given. |

<sub>queue written 2026-10-06T23:42:29.422986+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Amsterdam_1980 | irrelevant | 2 | 0 | A review of tricyclic antidepressant PK with no original quantitative protriptyline parameters reported. |
| popPK | An_2020 | irrelevant | 0 | 0 | In-vitro electrophysiology study of Kv channel inhibition; no pharmacokinetic disposition parameters for protriptyline are reported. |
| popPK | Anderson_1981 | irrelevant | 0 | 0 | This is a bretylium pharmacokinetic study; protriptyline is only mentioned as a co-administered treatment for orthostatic hypotension, with no PK parameters for it. |
| popPK | Chen_2004 | irrelevant | 0 | 0 | Pharmacodynamic spinal anesthesia study in rats; protriptyline is only one of several tested drugs, with no PK parameters reported. |
| PD | Chen_2004 | not_relevant | 3 | 1 | The paper reports qualitative comparisons of spinal anesthetic effects and mentions dose-response studies for other drugs (amitriptyline, bupivacaine, lidocaine), but provides no numeric PD parameters or extractable concentration-effect data for protriptyline. |
| popPK | Daws_1998 | irrelevant | 0 | 0 | Protriptyline is only used as a NET inhibitor probe in a rat chronoamperometry study of serotonin clearance; no PK disposition parameters for protriptyline are reported. |
| popPK | Frazer_1998 | irrelevant | 0 | 0 | Protriptyline is only a co-administered probe drug; the "clearance" measured is serotonin's, not protriptyline's PK parameters. |
| popPK | Furlanut_1990 | irrelevant | 3 | 1 | A review of TCA kinetics in the elderly with no numeric protriptyline parameter values present in the evidence. |
| PD | Huang_1995 | not_relevant | 0 | 0 | The paper investigates the mechanism of 4-aminopyridine-induced contractions; protriptyline is used only as a qualitative tool to block noradrenaline uptake, with no dose-response or PD parameters reported for it. |
| popPK | Huang_1996 | irrelevant | 0 | 0 | In-vitro pharmacology study of protriptyline's effects on rat aortic contraction; no PK disposition parameters reported. |
| popPK | Johnson-Davis_2012 | irrelevant | 0 | 0 | This is an analytical method paper for TCA quantification, not a pharmacokinetic study reporting disposition parameters for protriptyline. |
| popPK | Liu_2013 | irrelevant | 0 | 0 | This is a pharmacodynamic efficacy study in mice with no PK parameters for protriptyline. |
| popPK | Makhay_1999 | irrelevant | 0 | 0 | Behavioral drug-discrimination study in rats with no PK parameters for protriptyline. |
| PD | Makhay_1999 | not_relevant | 2 | 1 | The paper reports a qualitative behavioral observation that high doses of protriptyline partially substituted for clenbuterol, but it does not provide numeric dose-response parameters, concentration-effect data, or a fitted PD model for protriptyline. |
| popPK | Menargues_1990 | irrelevant | 0 | 0 | Pharmacodynamic receptor study in rats; protriptyline is only one of several drugs tested, with no PK parameters reported. |
| popPK | Risch_1979 | irrelevant | 1 | 0 | A review of plasma level–efficacy relationships for tricyclic antidepressants with no quantitative PK parameters for protriptyline reported. |
| popPK | Rudorfer_1999 | irrelevant | 2 | 1 | Review article with only a passing half-life mention for protriptyline; no quantitative disposition parameters reported. |
| PD | Rüdeberg_1986 | not_relevant | 1 | 2 | The paper focuses on the pharmacological profile of fluperlapine; protriptyline is only mentioned as a tool in a release assay, and no exposure-response or dose-response relationship with numeric PD parameters is reported for protriptyline. |
| PD | Sudoh_2003 | not_relevant | 2 | 1 | The paper reports qualitative efficacy (complete vs. incomplete blockade) at a single concentration for protriptyline and mentions in vitro IC50 values for other drugs, but provides no numeric PD parameters or dose-response curve for protriptyline. |
| popPK | Viala_1980 | irrelevant | 2 | 0 | A review/discussion of antidepressant pharmacokinetics with no numeric PK parameters for protriptyline in the evidence. |
| popPK | van_1975 | irrelevant | 0 | 0 | Pharmacodynamic interaction study in anaesthetized cats with no PK parameters or numeric disposition values for protriptyline. |
| PD | van_1975 | not_relevant | 3 | 1 | The paper describes a qualitative parallel shift in the dose-response curve for protriptyline antagonizing clonidine but does not provide numeric PD parameters or extractable concentration-effect data. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 23:42 UTC</sub>
