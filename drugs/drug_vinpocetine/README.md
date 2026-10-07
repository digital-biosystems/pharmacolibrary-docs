<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06B&quot;,&quot;href&quot;:&quot;atc/N06B.md&quot;},{&quot;label&quot;:&quot;vinpocetine&quot;}]"></div>

# vinpocetine

- **generic name:** vinpocetine
- **ATC codes:** `N06BX18`
- **DrugBank:** [DB12131](https://go.drugbank.com/drugs/DB12131) · **PubChem:** [CID 443955](https://pubchem.ncbi.nlm.nih.gov/compound/443955)
- **molar mass:** 350.462 g/mol (C22H26N2O2) — DrugBank
- **groups:** investigational

## About

Vinpocetine is a nootropic vasodilator that has been used for vascular dementia. It is classified as investigational and is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q420288](https://www.wikidata.org/wiki/Q420288) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| vinpocetine | parent | 350.462 | C22H26N2O2 | DrugBank | [443955](https://pubchem.ncbi.nlm.nih.gov/compound/443955) | Petric_2023, Vereczkey_1979, Vereczkey_1987, Vlase_2005 |
| apovincaminic acid (AVA) (apovincaminic acid) | metabolite | 322.408 | C20H22N2O2 | PubChem | [160154](https://pubchem.ncbi.nlm.nih.gov/compound/160154) | Petric_2023, Vereczkey_1987, Vlase_2005 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:45 | 2:27 | 0/2/2 | 3/0/0 | 0/0/0 | 141,417/11,694 | ollama / glm-5.3-flash | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q290, Q69 — no SI value to build fr…</sub><br><sub>route_to: `human_review`</sub> | [Petric_2023_reference](drugs/drug_vinpocetine/Vinpocetine_Petric2023_reference.md) | — | 1-compartment (no model) | 9 | Petric Z et al., Clinical Pharmacology of Vinpocetine: P…, Pharmaceutics (2023) | [10.3390/pharmaceutics15102502](https://doi.org/10.3390/pharmaceutics15102502) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Vereczkey_1987_reference](drugs/drug_vinpocetine/Vinpocetine_Vereczkey1987_reference.md) | — | parent + metabolite (no model) | 3 | Vereczkey L et al., Pharmacokinetics of apovincaminic acid…, Polish journal of pharmacol… (1987) | — |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Vereczkey_1979_reference](drugs/drug_vinpocetine/Vinpocetine_Vereczkey1979_reference.md) | — | 1-compartment (no model) | 4 | Vereczkey L et al., Pharmacokinetics of vinpocetine in huma…, Arzneimittel-Forschung (1979) | — |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Vlase_2005_reference](drugs/drug_vinpocetine/Vinpocetine_Vlase2005_reference.md) | — | 1-compartment (no model) | 2 | Vlase L et al., Pharmacokinetics and comparative bioava…, Arzneimittel-Forschung (2005) | [10.1055/s-0031-1296915](https://doi.org/10.1055/s-0031-1296915) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Kaneko_1991_NMDA_response](drugs/drug_vinpocetine/pd_Kaneko_1991_NMDA_response.md) | NMDA (with glycine)-evoked current response of Xenopus oocytes injected with rodent brain poly(A)+ mRNA; [3H]MK-801 binding to brain membranes ← vinpocetine · inhibition effect | — | Kaneko S et al., Effects of several cerebroprotective dr…, European journal of pharmac… (1991) | [10.1016/0922-4106(91)90086-w](https://doi.org/10.1016/0922-4106(91)90086-w) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Manda_2015_CYP2D6](drugs/drug_vinpocetine/pd_Manda_2015_CYP2D6.md) | CYP2D6 inhibition (recombinant enzyme, AMMC substrate) ← vinpocetine · inhibition effect | — | Manda VK et al., Studies on Pharmacokinetic Drug Interac…, Medicines (Basel, Switzerla… (2015) | [10.3390/medicines2020093](https://doi.org/10.3390/medicines2020093) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Manda_2015_CYP2D6_HLM](drugs/drug_vinpocetine/pd_Manda_2015_CYP2D6_HLM.md) | CYP2D6 inhibition in HLM (dextromethorphan metabolism) ← vinpocetine · inhibition effect | — | Manda VK et al., Studies on Pharmacokinetic Drug Interac…, Medicines (Basel, Switzerla… (2015) | [10.3390/medicines2020093](https://doi.org/10.3390/medicines2020093) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Manda_2015_CYP3A4](drugs/drug_vinpocetine/pd_Manda_2015_CYP3A4.md) | CYP3A4 inhibition (recombinant enzyme, BFC substrate) ← vinpocetine · inhibition effect | — | Manda VK et al., Studies on Pharmacokinetic Drug Interac…, Medicines (Basel, Switzerla… (2015) | [10.3390/medicines2020093](https://doi.org/10.3390/medicines2020093) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Manda_2015_CYP3A4_HLM](drugs/drug_vinpocetine/pd_Manda_2015_CYP3A4_HLM.md) | CYP3A4 inhibition in HLM (testosterone 6β-hydroxylation) ← vinpocetine · inhibition effect | — | Manda VK et al., Studies on Pharmacokinetic Drug Interac…, Medicines (Basel, Switzerla… (2015) | [10.3390/medicines2020093](https://doi.org/10.3390/medicines2020093) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Manda_2015_P_gp](drugs/drug_vinpocetine/pd_Manda_2015_P_gp.md) | P-gp inhibition (calcein-AM uptake in hMDR1-MDCKII cells) ← vinpocetine · inhibition effect | — | Manda VK et al., Studies on Pharmacokinetic Drug Interac…, Medicines (Basel, Switzerla… (2015) | [10.3390/medicines2020093](https://doi.org/10.3390/medicines2020093) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Wu_2001_I_K_Ca](drugs/drug_vinpocetine/pd_Wu_2001_I_K_Ca.md) | Ca2+-activated K+ current amplitude ← vinpocetine · direct Emax (saturable) effect | — | Wu SN et al., Vinpocetine-induced stimulation of calc…, Biochemical pharmacology (2001) | [10.1016/s0006-2952(01)00553-6](https://doi.org/10.1016/s0006-2952(01)00553-6) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=vinpocetine) page (add drugs there; the set becomes a link).

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

- **PubMed hits:** 14 matched, 14 returned
- **screened:** 6  ·  **relevant:** 6
- **records:** 4  ·  extracted 0  ·  needs_review 2  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Vereczkey_1979.pdf` | Vereczkey L et al., Pharmacokinetics of vinpocetine in huma…, Arzneimittel-Forschung (1979) | popPK | 10 | not captured | [582791](https://pubmed.ncbi.nlm.nih.gov/582791) | Human volunteer PK study reporting t1/2 alpha/beta, Vdss, clearance, and bioavailability values directly in the abstract. |
| `Yao_1994.pdf` | Yao JH et al., [Pharmacokinetics and disposition of vi…, Yao xue xue bao = Acta phar… (1994) | popPK | 10 | not captured | [8042515](https://pubmed.ncbi.nlm.nih.gov/8042515) | Rat PK study with numeric disposition parameters (t1/2, Vd, bioavailability) directly reported in the abstract. |
| `Vereczkey_1987.pdf` | Vereczkey L et al., Pharmacokinetics of apovincaminic acid…, Polish journal of pharmacol… (1987) | popPK | 9 | not captured | [3432163](https://pubmed.ncbi.nlm.nih.gov/3432163) | PK of vinpocetine's main metabolite AVA after vinpocetine dosing with numeric CL, V, half-lives reported in abstract; some values (V of vinpocetine) only relative. |
| `Ma_2020.pdf` | Ma Q et al., Effect of different doses of borneol on…, Xenobiotica; the fate of fo… (2020) | popPK | 7 | [10.1080/00498254.2019.1658139](https://doi.org/10.1080/00498254.2019.1658139) | [31424307](https://pubmed.ncbi.nlm.nih.gov/31424307) | Rat PK study of vinpocetine with NCA parameters, but only bioavailability/DTI values appear in the abstract; full CL, t½, etc. likely in tables/figures not provided. |
| `Vlase_2005.pdf` | Vlase L et al., Pharmacokinetics and comparative bioava…, Arzneimittel-Forschung (2005) | popPK | 7 | [10.1055/s-0031-1296915](https://doi.org/10.1055/s-0031-1296915) | [16366040](https://pubmed.ncbi.nlm.nih.gov/16366040) | Human bioequivalence study modeling vinpocetine's metabolite apovincaminic acid with first-order kinetics; Cmax, AUC, and Tmax values are present but core disposition parameters (ka, k, t½) are only described as "determined" without numbers. |

<sub>queue written 2026-10-07T00:43:26.839224+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Barbier_1995 | irrelevant | 0 | 0 | In-vitro pharmacology study of PDE inhibitors in cat gastric fundus; vinpocetine is a tool compound with no PK parameters reported. |
| popPK | Gonçalves_2009 | irrelevant | 0 | 0 | In-vitro pharmacology study of dioclein with vinpocetine only as a comparator PDE1 inhibitor; no PK parameters for vinpocetine. |
| popPK | Izzo_1998 | irrelevant | 0 | 0 | In-vitro pharmacology study in guinea-pig ileum; vinpocetine is only a PDE inhibitor tool drug with no PK parameters. |
| popPK | Kaneko_1991 | irrelevant | 0 | 0 | In-vitro pharmacology study of NMDA channel effects; no PK disposition parameters for vinpocetine. |
| popPK | Manda_2015 | irrelevant | 1 | 1 | In-vitro study of vinpocetine's effects on CYPs, P-gp and PXR; no PK disposition parameters for vinpocetine itself (only cited bioavailability 6% and Cmax 60 ng/mL from another paper). |
| popPK | Marley_1992 | irrelevant | 0 | 0 | Vinpocetine is only used as an in-vitro PDE inhibitor tool; no pharmacokinetic parameters are reported. |
| popPK | Tomkinson_1996 | irrelevant | 0 | 0 | In-vitro pharmacology study of PDE inhibitors on ileum contraction; vinpocetine is a tool compound, no PK parameters. |
| popPK | Wu_2001 | irrelevant | 0 | 0 | In-vitro electrophysiology study of ion channels, no pharmacokinetic parameters for vinpocetine. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 00:43 UTC</sub>
