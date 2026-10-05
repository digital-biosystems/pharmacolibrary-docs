<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A06A&quot;,&quot;href&quot;:&quot;atc/A06A.md&quot;},{&quot;label&quot;:&quot;Calcium polycarbophil&quot;}]"></div>

# Calcium polycarbophil

- **generic name:** Calcium polycarbophil
- **ATC codes:** `A06AC08`
- **DrugBank:** [DB14684](https://go.drugbank.com/drugs/DB14684) · **PubChem:** not captured
- **groups:** approved

## About

**Description.** Calcium polycarbophil is a stool stabilizer. Based on its chemical structure, it is a synthetic polymer of polyacrylic acid cross-linked with divinyl glycol presenting a calcium atom as a counter-ion. Polycarbophil is used to treat constipation. This drug may also be used to help relieve the symptoms of irritable bowel syndrome or diarrhea.

Less gas and bloating compared to psyllium laxative products, but can cause heartburn, and belly cramps. It is insoluble in water, dilute acids, and dilute alkali. The material possesses exceptionally high water-binding capacity. is not absorbed, does not interfere with the activity of digestive enzymes or intestinal absorption, possesses satisfactory stability, is physiologically inert, and does not cause gastrointestinal irritation.

**Indication.** Polycarbophil is used to treat constipation and to help maintain regular bowel movements.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 15:05 | 1:26 | 0/0/0 | 0/0/0 | 0/0/0 | 47,562/1,710 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 1/3 | 4/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=calcium_polycarbophil) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | bile duct | <sub>“…Excreted in feces.…”</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 14 matched, 26 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Akpek_2009 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of azithromycin, with polycarbophil serving only as a formulation excipient, not as the subject drug. |
| popPK | Bhosale_2011 | irrelevant | 0 | 0 | The study focuses on the formulation of acyclovir nanoparticles where polycarbophil is used as an excipient, not as the subject drug for pharmacokinetic analysis. |
| popPK | Brown_1997 | irrelevant | 0 | 0 | The study assesses the physical spreading and retention of a polycarbophil gel formulation in the vagina using scintigraphy, not the systemic pharmacokinetic parameters (CL, V, etc.) of calcium polycarbophil. |
| popPK | Chiu_1998 | irrelevant | 0 | 0 | The study measures the pharmacokinetics of levothyroxine (LT4) to assess the effect of calcium polycarbophil as a co-administered agent, not the PK of calcium polycarbophil itself. |
| popPK | Eherer_1993 | irrelevant | 0 | 0 | The study evaluates the effect of calcium polycarbophil on stool consistency and viscosity in a diarrhea model, not its pharmacokinetic disposition parameters. |
| PD | Eherer_1993 | not_relevant | 0 | 0 | The study reports that calcium polycarbophil had no effect on fecal consistency or viscosity, and no numeric dose-response or concentration-effect parameters are provided for this drug. |
| popPK | Föger_2008 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of paclitaxel, using thiolated polycarbophil as a formulation excipient, not as the subject drug. |
| popPK | Garcia_2005 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of levodopa in rabbits, not calcium_polycarbophil. |
| popPK | García_2009 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of levodopa in rabbits, not calcium_polycarbophil. |
| popPK | Grabnar_2006 | irrelevant | 0 | 0 | The study focuses on pipemidic acid as the model drug, with polycarbophil acting only as a permeability enhancer, and does not report PK parameters for calcium_polycarbophil. |
| popPK | Huang_2016 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of betaxolol hydrochloride, with polycarbophil serving only as a formulation excipient, not the subject drug. |
| popPK | Nagarsenker_1999 | irrelevant | 0 | 0 | The study focuses on the ocular delivery of tropicamide, and polycarbophil is only used as a gel base/comparator, not as the subject drug for PK analysis. |
| popPK | Oktay_2020 | irrelevant | 0 | 0 | The study focuses on flurbiprofen nanosuspensions and uses polycarbophil only as a gel excipient, not as the subject drug for pharmacokinetic analysis. |
| popPK | Perez-Gonzalez_2026 | irrelevant | 0 | 0 | The study focuses on the biocompatibility and delivery of dexamethasone using polycarbophil as an excipient, not the pharmacokinetics of calcium polycarbophil. |
| popPK | Sakai_2019 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of azithromycin, levofloxacin, and ofloxacin in rabbits, where polycarbophil is merely an excipient in the formulation, not the subject drug. |
| popPK | Salinger_2019 | irrelevant | 0 | 0 | The paper is a review of topical ocular corticosteroids (specifically loteprednol etabonate) and mentions polycarbophil only as a formulation excipient, not as the subject drug for PK analysis. |
| popPK | Shah_2007 | irrelevant | 0 | 0 | The study is an in-vitro rheologic and mucociliary transport study of polycarbophil gels, not a pharmacokinetic study of calcium_polycarbophil. |
| popPK | Shen_2015 | irrelevant | 0 | 0 | The study investigates Cyclosporin A (CsA) as the subject drug, using polycarbophil only as a gelling agent/excipient, and does not report PK parameters for calcium_polycarbophil. |
| popPK | Singh_2018 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of felodipine, using polycarbophil only as a formulation excipient, not as the subject drug. |
| popPK | Toskes_1993 | irrelevant | 0 | 0 | The paper is a clinical efficacy study for irritable bowel syndrome and does not report any pharmacokinetic parameters for calcium polycarbophil. |
| PD | Toskes_1993 | not_relevant | 0 | 0 | The paper reports clinical efficacy outcomes (preference, symptom improvement) for a fixed dose compared to placebo, but contains no pharmacokinetic data, concentration-effect analysis, or numeric PD parameters. |
| popPK | Ugwoke_1999 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of apomorphine, using polycarbophil only as a formulation excipient, not as the subject drug. |
| popPK | Umamaheswari_2002 | irrelevant | 0 | 0 | The study focuses on the formulation and in vitro characterization of acetohydroxamic acid microspheres for H. pylori treatment, with no pharmacokinetic data for calcium polycarbophil. |
| popPK | Venkatesh_2020 | irrelevant | 0 | 0 | The study focuses on the formulation and efficacy of a methotrexate in situ gel, where polycarbophil is used only as an excipient, and no pharmacokinetic parameters for calcium polycarbophil are reported. |
| popPK | Vetter_2010 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of fondaparinux using polycarbophil as a delivery vehicle, not calcium_polycarbophil as the subject drug. |
| popPK | Wen_2021 | irrelevant | 0 | 0 | The study focuses on dexamethasone ocular delivery using polycarbophil as an excipient, not the pharmacokinetics of calcium_polycarbophil. |
| popPK | Zaghloul_2007 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ketoprofen, with polycarbophil serving only as a formulation excipient, not the subject drug. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
