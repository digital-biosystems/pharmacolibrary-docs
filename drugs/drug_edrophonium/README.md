<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V04C&quot;,&quot;href&quot;:&quot;atc/V04C.md&quot;},{&quot;label&quot;:&quot;edrophonium&quot;}]"></div>

# edrophonium

- **generic name:** edrophonium
- **ATC codes:** `V04CX07`
- **DrugBank:** [DB01010](https://go.drugbank.com/drugs/DB01010) · **PubChem:** [CID 3202](https://pubchem.ncbi.nlm.nih.gov/compound/3202)
- **molar mass:** 166.2401 g/mol (C10H16NO) — DrugBank
- **groups:** approved

## About

Edrophonium is a short-acting acetylcholinesterase inhibitor used as a diagnostic agent. It is classified under diagnostic agents in the ATC system and is approved, though it is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3177745](https://www.wikidata.org/wiki/Q3177745) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:29 | 0:20 | 0/0/0 | 0/3/0 | 0/0/0 | 20,944/2,064 | ollama / glm-5.3-flash | 1 | 1/0 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Tanito_2001_3H_NMS_binding_M2](drugs/drug_edrophonium/pd_Tanito_2001_3H_NMS_binding_M2.md) | Specific [3H]N-methylscopolamine binding to guinea pig atrial M2 receptors ← edrophonium · inhibition effect | — | Tanito Y et al., Interaction of edrophonium with muscari…, Anesthesiology (2001) | [10.1097/00000542-200105000-00019](https://doi.org/10.1097/00000542-200105000-00019) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Tanito_2001_3H_NMS_binding_M3](drugs/drug_edrophonium/pd_Tanito_2001_3H_NMS_binding_M3.md) | Specific [3H]N-methylscopolamine binding to guinea pig submandibular gland M3 receptors ← edrophonium · inhibition effect | — | Tanito Y et al., Interaction of edrophonium with muscari…, Anesthesiology (2001) | [10.1097/00000542-200105000-00019](https://doi.org/10.1097/00000542-200105000-00019) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span> | [Unadkat_1986_twitch_tension_of_the_anterior_tibialis_muscle](drugs/drug_edrophonium/pd_Unadkat_1986_twitch_tension_of_the_anterior_tibialis_muscle.md) | twitch tension of the anterior tibialis muscle ← edrophonium · delayed effect through an effect compartment | — | Unadkat JD et al., An integrated model for the interaction…, Journal of applied physiolo… (1986) | [10.1152/jappl.1986.61.4.1593](https://doi.org/10.1152/jappl.1986.61.4.1593) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Yamamoto_1996_HR](drugs/drug_edrophonium/pd_Yamamoto_1996_HR.md) | heart rate (bradycardiac response) ← edrophonium · delayed effect through an effect compartment | — | Yamamoto K et al., Toxicodynamic analysis of cardiac effec…, The Journal of pharmacy and… (1996) | [10.1111/j.2042-7158.1996.tb06006.x](https://doi.org/10.1111/j.2042-7158.1996.tb06006.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Yamamoto_1996_HR_2](drugs/drug_edrophonium/pd_Yamamoto_1996_HR_2.md) | heart rate (tachycardiac response) ← edrophonium · delayed effect through an effect compartment | — | Yamamoto K et al., Toxicodynamic analysis of cardiac effec…, The Journal of pharmacy and… (1996) | [10.1111/j.2042-7158.1996.tb06006.x](https://doi.org/10.1111/j.2042-7158.1996.tb06006.x) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=edrophonium) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | blood | `BCHE` inhibitor | DrugBank actor |
| metabolism | liver | `BCHE` inhibitor | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| — | blood | `ACHE` inhibitor | DrugBank actor |
| — | neuromuscular junction | `ACHE` inhibitor | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Morris_1981.pdf` | Morris RB et al., Pharmacokinetics of edrophonium in anep…, British journal of anaesthe… (1981) | popPK | 8 | [10.1093/bja/53.12.1311](https://doi.org/10.1093/bja/53.12.1311) | [7032560](https://pubmed.ncbi.nlm.nih.gov/7032560) | Human PK study of edrophonium with clearance and half-life reported, but the abstract gives only relative changes, not the actual numeric parameter values. |
| `Hennis_1984.pdf` | Hennis PJ et al., Metabolites of neostigmine and pyridost…, Anesthesiology (1984) | popPK | 7 | [10.1097/00000542-198411000-00010](https://doi.org/10.1097/00000542-198411000-00010) | [6149707](https://pubmed.ncbi.nlm.nih.gov/6149707) | Edrophonium PK (three-compartment model, CL, Vdss, half-lives) was determined in dogs, but the abstract only summarizes values qualitatively without numeric parameter values. |
| `Unadkat_1986.pdf` | Unadkat JD et al., An integrated model for the interaction…, Journal of applied physiolo… (1986) | popPK | 6 | [10.1152/jappl.1986.61.4.1593](https://doi.org/10.1152/jappl.1986.61.4.1593) | [3781972](https://pubmed.ncbi.nlm.nih.gov/3781972) | Edrophonium arterial concentrations were measured in anesthetized dogs and modeled, but no numeric PK parameter values (CL, V, etc.) appear in the evidence. |

<sub>queue written 2026-10-07T21:29:27.598629+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Back_1974 | relevant | 9 | 4 | A compartmental PK study of [14C]-edrophonium in rats with model parameters (rate constants, half-lives, Vc) reported in Tables 1–2, but the table values are largely truncated/not readable in the evidence provided. |
| popPK | Baker_1986 | irrelevant | 0 | 0 | Edrophonium is only used as a co-administered cholinesterase inhibitor in a receptor-binding study; no PK parameters for it are reported. |
| popPK | Dreyer_1978 | irrelevant | 0 | 0 | Frog neuromuscular junction ionophoresis study; edrophonium is only an AChE inhibitor tool, no PK parameters. |
| popPK | Hennis_1984 | relevant | 7 | 3 | Edrophonium PK (three-compartment model, CL, Vdss, half-lives) was determined in dogs, but the abstract only summarizes values qualitatively without numeric parameter values. |
| popPK | Jaklitsch_1990 | irrelevant | 3 | 0 | A simulation study of neuromuscular blockade; edrophonium is one of many modeled agents and no numeric PK parameter values for edrophonium appear in the evidence. |
| popPK | Lenz_1984 | irrelevant | 0 | 0 | In-vitro enzyme kinetics study of AChE inhibition; edrophonium is only an inhibitor probe, no PK parameters. |
| popPK | Mills_1999 | irrelevant | 0 | 0 | The pharmacokinetic model and parameters (CL, V1) describe rapacuronium, not edrophonium, which is only used as a reversal agent. |
| popPK | Morris_1981 | relevant | 8 | 3 | Human PK study of edrophonium with clearance and half-life reported, but the abstract gives only relative changes, not the actual numeric parameter values. |
| popPK | Tanito_2001 | irrelevant | 0 | 0 | In vitro receptor pharmacology study of edrophonium's muscarinic antagonism; no pharmacokinetic disposition parameters. |
| popPK | Unadkat_1986 | relevant | 6 | 2 | Edrophonium arterial concentrations were measured in anesthetized dogs and modeled, but no numeric PK parameter values (CL, V, etc.) appear in the evidence. |
| popPK | Yamamoto_1996 | irrelevant | 2 | 1 | This is a toxicodynamic (PD) study in rats using an effect-compartment model for heart-rate effects, not a PK study reporting edrophonium disposition parameters; no numeric PK values are present. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
