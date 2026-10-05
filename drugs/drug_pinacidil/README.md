<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02D&quot;,&quot;href&quot;:&quot;atc/C02D.md&quot;},{&quot;label&quot;:&quot;pinacidil&quot;}]"></div>

# pinacidil

- **generic name:** pinacidil
- **ATC codes:** `C02DG01`, `C02LX01`
- **DrugBank:** [DB06762](https://go.drugbank.com/drugs/DB06762) · **PubChem:** not captured
- **molar mass:** 245.33 g/mol (C13H19N5) — DrugBank
- **groups:** approved

## About

Pinacidil is an antihypertensive vasodilator used to lower high blood pressure. It is classed as an approved drug, but it does not appear to be an established, widely marketed medicine today.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q821869](https://www.wikidata.org/wiki/Q821869) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-30 07:12 | 1:28 | 0/1/0 | 0/0/0 | 0/0/0 | 2,324/1,510 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rabbit</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Nielsen_1989_reference](drugs/drug_pinacidil/Pinacidil_Nielsen1989_reference.md) | — | 1-compartment (no model) | 0 | Nielsen CB et al., Pinacidil uptake and effects in the iso…, Pharmacology & toxicology (1989) | [10.1111/j.1600-0773.1989.tb00592.x](https://doi.org/10.1111/j.1600-0773.1989.tb00592.x) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=pinacidil) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 92 matched, 19 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Girard_1993.pdf` | Girard P et al., Pharmacodynamic model of the haemodynam…, European journal of clinica… (1993) | popPK | 8 | [10.1007/BF00315477](https://doi.org/10.1007/BF00315477) | [8453963](https://pubmed.ncbi.nlm.nih.gov/8453963) | The study reports a PK-PD model for pinacidil but the evidence only provides pharmacodynamic parameters (EC50, Emax, n) and model structure, lacking specific numeric values for PK parameters like clearance or volume. |
| `Nielsen_1989.pdf` | Nielsen CB et al., Pinacidil uptake and effects in the iso…, Pharmacology & toxicology (1989) | popPK | 8 | [10.1111/j.1600-0773.1989.tb00592.x](https://doi.org/10.1111/j.1600-0773.1989.tb00592.x) | [2755905](https://pubmed.ncbi.nlm.nih.gov/2755905) | The study reports quantitative compartmental pharmacokinetic parameters (half-times, compartment distribution percentages) for pinacidil in an isolated rabbit heart model. |
| `Bellissant_1994.pdf` | Bellissant E et al., Pharmacokinetic-pharmacodynamic modelin…, Fundamental & clinical phar… (1994) | pd | 5 | [10.1111/j.1472-8206.1994.tb00823.x](https://doi.org/10.1111/j.1472-8206.1994.tb00823.x) | [7875638](https://www.ncbi.nlm.nih.gov/pubmed/7875638) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Wanstall_1992.pdf` | Wanstall JC et al., Responses to vasodilator drugs on pulmo…, British journal of pharmaco… (1992) | pd | 4 | [10.1111/j.1476-5381.1992.tb14227.x](https://doi.org/10.1111/j.1476-5381.1992.tb14227.x) | [1596677](https://www.ncbi.nlm.nih.gov/pubmed/1596677) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-09-30T07:11:52.968258+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Ayesh_1989 | not_relevant | 2 | 5 | The paper reports a lack of correlation between pinacidil metabolism and specific oxidative polymorphisms, concluding that the variability is due to P-450 isozymes rather than the tested genes. |
| popPK | Bellissant_1994 | irrelevant | 0 | 0 | no_text gate: only 161 chars of text extracted (&lt; 400) |
| PGx | Bessadok_2011 | not_relevant | 0 | 0 | The paper investigates the interaction of pinacidil analogs with P-glycoprotein in vitro but does not report pharmacogenomic effects on PK or PD parameters in humans. |
| popPK | Gando_2023 | irrelevant | 0 | 0 | The paper is a mechanistic study of a new channel opener (CL-705G) where pinacidil is used only as a comparator for potency (EC50), with no pharmacokinetic parameters reported. |
| popPK | Girard_1993 | relevant | 8 | 2 | The study reports a PK-PD model for pinacidil but the evidence only provides pharmacodynamic parameters (EC50, Emax, n) and model structure, lacking specific numeric values for PK parameters like clearance or volume. |
| popPK | Kopustinskiene_2004 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of mitochondrial potassium flux where pinacidil is used only as a comparator agent, with no pharmacokinetic parameters reported. |
| PD | Kopustinskiene_2004 | not_relevant | 1 | 0 | The paper reports a single-point effect for pinacidil (0.08%/s at 50 microM) but does not provide a dose-response curve, EC50, or other numeric PD parameters for pinacidil; the EC50 reported is for levosimendan. |
| popPK | Nielsen-Kudsk_1991 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of smooth muscle relaxation and does not report any pharmacokinetic parameters for pinacidil. |
| PGx | Nnorom_2014 | not_relevant | 0 | 0 | The paper investigates the physiological role of potassium channels in cerebral dilation in neonatal pigs and does not report any pharmacogenomic effects on the PK or PD of pinacidil. |
| popPK | Reimann_2000 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on ion channel kinetics in Xenopus oocytes, not a pharmacokinetic study reporting disposition parameters for pinacidil. |
| popPK | Ryman_1993 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vascular reactivity and does not report any pharmacokinetic parameters for pinacidil. |
| PGx | Shaheen_1986 | not_relevant | 0 | 0 | The study explicitly concludes that pinacidil's metabolism and clearance are independent of debrisoquin phenotype, reporting no pharmacogenomic effect. |
| PGx | Ueda_2004 | not_relevant | 0 | 0 | The paper investigates the effect of hypothermia and rewarming rates on cerebrovascular responsiveness to pinacidil, not the effect of genetic variants on pinacidil pharmacokinetics or pharmacodynamics. |
| popPK | Wanstall_1992 | irrelevant | 0 | 0 | no_text gate: only 96 chars of text extracted (&lt; 400) |
| PD | Wanstall_1992 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text, data, or numeric PD parameters required to assess the relationship. |
| popPK | Wanstall_1994 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vasorelaxant effects and does not report pharmacokinetic parameters for pinacidil. |
| popPK | Yeung_2007 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological profiling of pinacidil on cardiac myocytes and does not report any pharmacokinetic parameters. |
| PGx | Zhang_2002 | not_relevant | 0 | 0 | The paper describes the metabolic mechanism of pinacidil by CYP3A4 in vitro but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-28 02:46 UTC</sub>
