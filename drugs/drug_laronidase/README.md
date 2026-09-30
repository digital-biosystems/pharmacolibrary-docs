<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;laronidase&quot;}]"></div>

# laronidase

- **generic name:** laronidase
- **ATC codes:** `A16AB05`
- **DrugBank:** [DB00090](https://go.drugbank.com/drugs/DB00090) · **PubChem:** not captured
- **groups:** approved, investigational

## About

**Description.** Human recombinant alpha-L-iduronidase, 628 residues (mature form), produced by recombinant DNAtechnology in a Chinese hamster ovary cell line. Laronidase is a glycoprotein with a molecular weight of approximately 83 kD. The predicted amino acid sequence of the recombinant form, as well as the nucleotide sequence that encodes it, are identical to a polymorphic form of human a-L-iduronidase. It contains 6 N-linked oligosaccharide modification sites.

**Indication.** For the treatment of mucopolysaccharidosis

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-27 11:44 | 10:02 | 0/0/0 | 1/0/0 | 0/0/0 | 37,103/2,865 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | [Qi_2019_uCS](drugs/drug_laronidase/pd_Qi_2019_uCS.md) | urinary chondroitin sulfate ← vestronidase alfa · direct Emax (saturable) effect | — | Qi Y et al., Pharmacokinetic and Pharmacodynamic Mod…, Clinical pharmacokinetics (2019) | [10.1007/s40262-018-0721-y](https://doi.org/10.1007/s40262-018-0721-y) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | [Qi_2019_uDS](drugs/drug_laronidase/pd_Qi_2019_uDS.md) | urinary dermatan sulfate ← vestronidase alfa · direct Emax (saturable) effect | — | Qi Y et al., Pharmacokinetic and Pharmacodynamic Mod…, Clinical pharmacokinetics (2019) | [10.1007/s40262-018-0721-y](https://doi.org/10.1007/s40262-018-0721-y) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=laronidase) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: Iduronic acid (other/unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 16 matched, 15 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Baldo_2015 | irrelevant | 0 | 0 | The paper is a review of approved enzymes and their mechanisms/adverse effects, containing no original pharmacokinetic data or quantitative disposition parameters for laronidase. |
| popPK | Giugliani_2009 | irrelevant | 1 | 0 | The paper is a dose-optimization trial focusing on pharmacodynamic endpoints (GAG excretion, liver volume) and safety, with no quantitative pharmacokinetic parameters (CL, V, t1/2) reported for laronidase. |
| PD | Giugliani_2009 | not_relevant | 3 | 1 | The paper reports a dose-optimization trial comparing different dosing regimens but only provides qualitative conclusions (e.g., "no significant differences," "near-maximal reductions") without reporting specific numeric PD parameters (like Emax, EC50) or detailed concentration-effect curves in the provided text. |
| popPK | Giugliani_2017 | irrelevant | 0 | 0 | The paper is a clinical trial focused on immune tolerance induction and anti-drug antibody titers, reporting no pharmacokinetic parameters (CL, V, t1/2) for laronidase. |
| popPK | Harmatz_2024 | irrelevant | 0 | 0 | The study evaluates lepunafusp alfa (JR-171), not laronidase, which is only mentioned as a comparator for efficacy. |
| popPK | He_2013 | irrelevant | 0 | 0 | The paper focuses on the production and glycosylation of recombinant alpha-L-iduronidase (IDUA) in Arabidopsis seeds, not the pharmacokinetics of laronidase. |
| PD | He_2013 | not_relevant | 0 | 0 | The paper focuses on the production, glycosylation, and enzymatic kinetics of recombinant IDUA in Arabidopsis seeds, containing no pharmacokinetic or pharmacodynamic data for laronidase in vivo. |
| PGx | Jameson_2013 | not_relevant | 0 | 0 | The paper is a clinical trial evaluating the efficacy and safety of laronidase in MPS I patients and does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Jameson_2013_2 | not_relevant | 0 | 0 | The paper is a clinical trial evaluating the efficacy and safety of laronidase in MPS I patients and does not report any pharmacogenomic analysis or gene-variant effects on PK/PD parameters. |
| PGx | Jameson_2016 | not_relevant | 0 | 0 | The paper is a Cochrane review evaluating the clinical efficacy and safety of laronidase in MPS I patients, but it does not report any pharmacogenomic effects (gene variants) on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Jameson_2019 | not_relevant | 0 | 0 | The paper is a clinical trial review of laronidase efficacy and safety in MPS I, reporting no pharmacogenomic analysis or gene-variant specific PK/PD effects. |
| popPK | Mayer_2015 | irrelevant | 2 | 0 | The study focuses on the formulation and biodistribution of laronidase nanocapsules rather than reporting quantitative population pharmacokinetic parameters (CL, V, Q, ka) for the drug itself. |
| popPK | Pardridge_2018 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of valanafusp alpha, with laronidase serving only as a comparator for which no specific quantitative parameters are reported in the evidence. |
| popPK | Qi_2019 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for vestronidase alfa, not laronidase. |
| popPK | Wraith_2007 | irrelevant | 2 | 0 | The paper is a clinical efficacy/safety study that mentions pharmacokinetics in the objective but provides no quantitative PK parameter values (CL, V, t1/2) in the evidence. |
| popPK | Xue_2016 | irrelevant | 0 | 0 | The paper is a meta-analysis focusing on the relationship between anti-drug antibodies and pharmacodynamic/clinical outcomes, not a pharmacokinetic study reporting quantitative disposition parameters for laronidase. |
| PD | Xue_2016 | not_relevant | 3 | 1 | The paper is a meta-analysis reporting qualitative inverse relationships between antibody levels and GAG reduction, but it does not provide a formal PK/PD model or specific numeric PD parameters (e.g., Emax, EC50) for laronidase exposure. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
