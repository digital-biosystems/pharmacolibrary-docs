<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G02A&quot;,&quot;href&quot;:&quot;atc/G02A.md&quot;},{&quot;label&quot;:&quot;oxytocin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Oxytocin_De1995_reference&quot;,&quot;label&quot;:&quot;De_1995_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_oxytocin/Oxytocin_De1995_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Oxytocin_Monks2023_reference&quot;,&quot;label&quot;:&quot;Monks_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_oxytocin/Oxytocin_Monks2023_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Oxytocin_Nielsen2017_reference&quot;,&quot;label&quot;:&quot;Nielsen_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_oxytocin/Oxytocin_Nielsen2017_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# oxytocin

- **generic name:** oxytocin
- **ATC codes:** `G02AC01`, `H01BB02`
- **DrugBank:** [DB00107](https://go.drugbank.com/drugs/DB00107) · **PubChem:** not captured
- **groups:** approved, investigational, vet_approved

## About

Oxytocin is a peptide hormone used as a uterotonic drug to induce or support labour and manage bleeding after childbirth. It is widely used in human medicine, appears on the WHO essential medicines list, and is also approved for veterinary use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q169960](https://www.wikidata.org/wiki/Q169960) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| oxytocin | parent | 1007.19 | C43H66N12O12S2 | PubChem | [439302](https://pubchem.ncbi.nlm.nih.gov/compound/439302) | De_1995, Monks_2023, Nielsen_2017 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:18 | 1:44 | 3/0/0 | 0/0/0 | 0/0/0 | 141,435/5,551 | einfracz / qwen3.8-27b | 5 | 1/4 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [De_1995_reference](drugs/drug_oxytocin/Oxytocin_De1995_reference.md) | ▶ model + simulator | 1-compartment, IV | 6 | De Groot AN et al., Bioavailability and pharmacokinetics of…, The Journal of pharmacy and… (1995) | [10.1111/j.2042-7158.1995.tb06716.x](https://doi.org/10.1111/j.2042-7158.1995.tb06716.x) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Monks_2023_reference](drugs/drug_oxytocin/Oxytocin_Monks2023_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Monks DT et al., A study of the pharmacokinetics and pha…, Anaesthesia (2023) | [10.1111/anae.16109](https://doi.org/10.1111/anae.16109) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Nielsen_2017_reference](drugs/drug_oxytocin/Oxytocin_Nielsen2017_reference.md) | ▶ model + simulator | 1-compartment, IV | 5 | Nielsen EI et al., Population Pharmacokinetic Analysis of…, Journal of clinical pharmac… (2017) | [10.1002/jcph.961](https://doi.org/10.1002/jcph.961) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=oxytocin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | mammary gland | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | placenta | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | skeletal muscle | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | testis | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: AGER (binder), AVPR1A (target), AVPR1B (target), AVPR2 (target), LNPEP (substrate), OXT (binder), OXTR (target), PREP (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 205 matched, 20 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 3  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `De_1995.pdf` | De Groot AN et al., Bioavailability and pharmacokinetics of…, The Journal of pharmacy and… (1995) | popPK | 10 | [10.1111/j.2042-7158.1995.tb06716.x](https://doi.org/10.1111/j.2042-7158.1995.tb06716.x) | [8568623](https://pubmed.ncbi.nlm.nih.gov/8568623) | The abstract reports specific quantitative pharmacokinetic parameters (clearance, volume, half-lives) for oxytocin in human subjects. |
| `Monks_2023.pdf` | Monks DT et al., A study of the pharmacokinetics and pha…, Anaesthesia (2023) | popPK | 10 | [10.1111/anae.16109](https://doi.org/10.1111/anae.16109) | [37594215](https://pubmed.ncbi.nlm.nih.gov/37594215) | The study reports quantitative PK parameters (Vd = 156.1 L, CL = 83 ml/s) for oxytocin in a one-compartment model. |
| `Nielsen_2017.pdf` | Nielsen EI et al., Population Pharmacokinetic Analysis of…, Journal of clinical pharmac… (2017) | popPK | 10 | [10.1002/jcph.961](https://doi.org/10.1002/jcph.961) | [28679021](https://pubmed.ncbi.nlm.nih.gov/28679021) | The abstract reports specific quantitative PK parameters (CL 27 L/h, Vss 15 L, t1/2 1.2 h) for oxytocin in humans. |
| `Shafer_2025.pdf` | Shafer SL et al., Plasma pharmacokinetics of intravenous…, British journal of anaesthe… (2025) | popPK | 10 | [10.1016/j.bja.2024.12.046](https://doi.org/10.1016/j.bja.2024.12.046) | [40121179](https://pubmed.ncbi.nlm.nih.gov/40121179) | The paper is a definitive population PK study of oxytocin in humans, but the evidence provided contains only model descriptions and qualitative metrics without the specific numeric parameter values (CL, V, Q, etc.). |

<sub>queue written 2026-10-07T08:17:44.990365+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Araujo_2025 | irrelevant | 0 | 0 | The paper is a neurophysiological study on oxytocinergic signaling in the respiratory center, not a pharmacokinetic study of oxytocin disposition. |
| popPK | Asif_2023 | irrelevant | 0 | 0 | The study investigates the mechanism of action of mirabegron on oxytocin-contracted myometrium (pharmacodynamics) and does not report pharmacokinetic parameters (CL, V, t1/2) for oxytocin. |
| popPK | Atila_2025 | irrelevant | 1 | 0 | The study is a biomarker validation measuring endogenous oxytocin release after MDMA stimulation, not a pharmacokinetic study of exogenous oxytocin with disposition parameters like clearance or volume. |
| popPK | Beard_2018 | irrelevant | 0 | 0 | The paper focuses on the structure-activity relationships, binding affinity, and stability of oxytocin analogs in vitro, without reporting any pharmacokinetic disposition parameters. |
| popPK | Bradley_2019 | irrelevant | 0 | 0 | The study investigates behavioral effects (eye gaze) of oxytocin in schizophrenia and does not report pharmacokinetic parameters such as clearance or volume of distribution. |
| popPK | Bradley_2021 | irrelevant | 0 | 0 | The study is a clinical trial assessing behavioral effects (mentalizing) of oxytocin, not a pharmacokinetic study, and does not report any PK parameters like clearance or volume. |
| popPK | Cheng_2018 | irrelevant | 0 | 0 | Oxytocin is used only as a tool to induce the dysmenorrhea model in rats, not as the subject drug for PK characterization. |
| popPK | Engstrøm_1998 | irrelevant | 0 | 0 | The study investigates in vitro receptor binding and uterotonic activity of carbetocin (an oxytocin analogue) and its metabolites, reporting no in vivo pharmacokinetic parameters (CL, V, t1/2) for oxytocin. |
| popPK | Hauser_2023 | irrelevant | 0 | 0 | The study is a mechanistic/receptor cloning study on tick inotocin (an insect orthologue of oxytocin) and does not report pharmacokinetic parameters (CL, V, t1/2) for oxytocin. |
| popPK | Kacprzyk_2026 | irrelevant | 0 | 0 | The study measures oxytocin concentrations as a biomarker of welfare in horses but does not report pharmacokinetic parameters (CL, V, etc.). |
| popPK | Nikaj_2025 | irrelevant | 0 | 0 | The study investigates HPA axis responses to hypertonic saline and arginine in patients with AVP deficiency, reporting ACTH and cortisol levels rather than pharmacokinetic parameters for oxytocin. |
| popPK | Pitt_2004 | irrelevant | 0 | 0 | The paper reports in-vitro pharmacological screening of non-peptide oxytocin agonists and does not contain pharmacokinetic parameters for oxytocin itself. |
| popPK | Shafer_2025 | relevant | 10 | 0 | The paper is a definitive population PK study of oxytocin in humans, but the evidence provided contains only model descriptions and qualitative metrics without the specific numeric parameter values (CL, V, Q, etc.). |
| popPK | Witczak_2023 | irrelevant | 0 | 0 | The study investigates the behavioral and physiological effects of oxytocin on titi monkey social bonds, not its pharmacokinetic disposition parameters. |
| popPK | Wiśniewski_2014 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters (clearance) for synthetic oxytocin receptor analogues (agonists), not for oxytocin itself. |
| popPK | Zurfluh_2024 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of receptor signaling inhibition, not a pharmacokinetic study, and reports no disposition parameters for oxytocin. |
| popPK | da_2024 | irrelevant | 0 | 0 | The study investigates the pharmacological mechanism of (-)-carvone using oxytocin as an agonist/probe in in-vitro and in-vivo spasmolysis models, not the pharmacokinetic parameters of oxytocin itself. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 08:17 UTC</sub>
