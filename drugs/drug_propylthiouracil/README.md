<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;H03B&quot;,&quot;href&quot;:&quot;atc/H03B.md&quot;},{&quot;label&quot;:&quot;propylthiouracil&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Propylthiouracil_Gwka2018_reference&quot;,&quot;label&quot;:&quot;G\u0142\u00f3wka_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_propylthiouracil/Propylthiouracil_Gwka2018_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# propylthiouracil

- **generic name:** propylthiouracil
- **ATC codes:** `H03BA02`
- **DrugBank:** [DB00550](https://go.drugbank.com/drugs/DB00550) · **PubChem:** [CID 657298](https://pubchem.ncbi.nlm.nih.gov/compound/657298)
- **molar mass:** 170.232 g/mol (C7H10N2OS) — DrugBank
- **groups:** approved

## About

Propylthiouracil is an antithyroid medicine used to treat hyperthyroidism, goiter, and thyroid crisis. It remains an approved antithyroid drug, though it carries a boxed warning, meaning its use requires careful monitoring.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q377342](https://www.wikidata.org/wiki/Q377342) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| propylthiouracil | parent | 170.232 | C7H10N2OS | DrugBank | [657298](https://pubchem.ncbi.nlm.nih.gov/compound/657298) | Główka_2018, Okuno_1983 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:48 | 1:17 | 1/1/0 | 1/0/0 | 0/0/0 | 78,227/8,236 | einfracz / qwen3.8-27b | 1 | 1/0 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Główka_2018_reference](drugs/drug_propylthiouracil/Propylthiouracil_Gwka2018_reference.md) | ▶ model + simulator | 1-compartment, oral | 6 | Główka FK et al., Bioavailability of propylthiouracil fro…, Die Pharmazie (2018) | [10.1691/ph.2018.8552](https://doi.org/10.1691/ph.2018.8552) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Okuno_1983_reference](drugs/drug_propylthiouracil/Propylthiouracil_Okuno1983_reference.md) | — | 1-compartment (no model) | 1 | Okuno A et al., Pharmacokinetics of propylthiouracil in…, Pediatric pharmacology (New… (1983) | — |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span> | [Soto_2018_taste_aversion](drugs/drug_propylthiouracil/pd_Soto_2018_taste_aversion.md) | taste aversion ← propylthiouracil · model not identified | — | Soto J et al., Rats can predict aversiveness of Active…, European journal of pharmac… (2018) | [10.1016/j.ejpb.2018.09.027](https://doi.org/10.1016/j.ejpb.2018.09.027) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=propylthiouracil) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | lung | `CYP1A1` inducer | DrugBank actor |
| metabolism | small intestine | `CYP1A1` inducer | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: DBH (inhibitor), DIO1 (inhibitor), MPO (inhibitor), TPO (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 18 matched, 18 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Okuno_1983.pdf` | Okuno A et al., Pharmacokinetics of propylthiouracil in…, Pediatric pharmacology (New… (1983) | popPK | 10 | not captured | [6689066](https://pubmed.ncbi.nlm.nih.gov/6689066) | Reports pharmacokinetics of propylthiouracil in humans with specific quantitative parameters such as half-life, peak concentrations, and model fit, although clearance and volume of distribution values are not explicitly listed in the evidence. |
| `Kampmann_1979.pdf` | Kampmann JP et al., Kinetics of propylthiouracil in the eld…, Acta medica Scandinavica. S… (1979) | popPK | 9 | [10.1111/j.0954-6820.1979.tb00727.x](https://doi.org/10.1111/j.0954-6820.1979.tb00727.x) | [284719](https://pubmed.ncbi.nlm.nih.gov/284719) | The study reports quantitative PK parameters for propylthiouracil, but the specific numeric values are not present in the provided text. |
| `Ringhand_1980.pdf` | Ringhand HP et al., Pharmacokinetics of propylthiouracil up…, International journal of cl… (1980) | popPK | 8 | not captured | [7203724](https://pubmed.ncbi.nlm.nih.gov/7203724) | The study describes the population pharmacokinetic modeling of propylthiouracil in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| `Cooper_1983.pdf` | Cooper DS et al., Propylthiouracil (PTU) pharmacology in…, Endocrinology (1983) | popPK | 6 | [10.1210/endo-113-3-921](https://doi.org/10.1210/endo-113-3-921) | [6872961](https://pubmed.ncbi.nlm.nih.gov/6872961) | The study reports quantitative PK parameters (half-lives and a two-compartment model description) for propylthiouracil in rats, but specific values for clearance and volume are not provided. |

<sub>queue written 2026-10-07T09:47:50.802016+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Dimitriadis_1989 | irrelevant | 0 | 0 | The study investigates the effects of hypothyroidism on glycolysis and glycogen synthesis in rat muscle, using propylthiouracil only to induce hypothyroidism, not to measure its pharmacokinetic parameters. |
| popPK | Dunkelmann_2007 | irrelevant | 0 | 0 | The study focuses on radioiodine kinetics in the thyroid and thiamazole (methimazole), with propylthiouracil mentioned only as a different antithyroid drug likely requiring discontinuation, without providing PK parameters for propylthiouracil. |
| popPK | Goswami_1986 | irrelevant | 0 | 0 | The study investigates the enzymatic mechanism of iodothyronine 5'-deiodinase inhibition by propylthiouracil in brown adipose tissue, not the pharmacokinetic disposition parameters (clearance, volume, half-life) of the drug. |
| popPK | Goswami_1987 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of thyroid hormone deiodination where propylthiouracil is used only as an inhibitor, with no PK parameters for propylthiouracil reported. |
| popPK | Grieve_1999 | irrelevant | 0 | 0 | The study investigates vascular physiology and nitric oxide production in rats using PTU as a treatment, reporting no pharmacokinetic parameters (CL, V, etc.). |
| popPK | Hawthorn_1988 | irrelevant | 0 | 0 | The study investigates receptor binding and functional responses in cardiac tissue, not the pharmacokinetic disposition of propylthiouracil. |
| popPK | Hays_1979 | irrelevant | 0 | 0 | The study investigates the kinetics of thyroid trapping (uptake of pertechnetate/iodine) and the effect of PTU on this process, not the systemic pharmacokinetics (disposition parameters) of PTU itself. |
| popPK | Kaiserman_1995 | irrelevant | 0 | 0 | The study analyzes the pharmacokinetics of thyroid hormones (T4, T3, rT3, Tg) in children with thyroxine intoxication, using propylthiouracil only as a co-administered therapeutic agent without reporting its own quantitative disposition parameters. |
| popPK | Kampmann_1979 | relevant | 9 | 2 | The study reports quantitative PK parameters for propylthiouracil, but the specific numeric values are not present in the provided text. |
| popPK | Leonard_2016 | irrelevant | 1 | 0 | The paper focuses on PBPK/PD modeling for risk assessment and margin of exposure, and does not report specific quantitative PK parameter values (CL, V, ka) for propylthiouracil in the provided evidence. |
| popPK | Mortimer_1997 | irrelevant | 2 | 5 | The study reports placental transfer clearances (maternal-fetal transfer) rather than systemic disposition parameters (CL, Vd, Ka) or a population PK model for the drug. |
| popPK | Pintor_1996 | irrelevant | 0 | 0 | The study uses propylthiouracil as a tool to induce hypothyroidism in rats to study receptor pharmacology, but does not report pharmacokinetic parameters for propylthiouracil itself. |
| popPK | Ringhand_1980 | relevant | 8 | 0 | The study describes the population pharmacokinetic modeling of propylthiouracil in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| popPK | Soto_2018 | irrelevant | 0 | 0 | The paper investigates taste aversion of 6-n-propylthiouracil (a distinct chemical entity) in rats and humans, reporting IC50/EC50 values for bitterness rather than pharmacokinetic parameters for the drug propylthiouracil. |
| popPK | van_2013 | irrelevant | 0 | 0 | The study is a developmental toxicology investigation of propylthiouracil in Xenopus embryos, reporting on morphological defects and gene expression, but contains no pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 09:47 UTC</sub>
