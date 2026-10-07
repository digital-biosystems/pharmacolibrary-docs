<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D11A&quot;,&quot;href&quot;:&quot;atc/D11A.md&quot;},{&quot;label&quot;:&quot;oxymetazoline&quot;}]"></div>

# oxymetazoline

- **generic name:** oxymetazoline
- **ATC codes:** `D11AX27`, `R01AA05`, `R01AB07`, `S01GA04`
- **DrugBank:** [DB00935](https://go.drugbank.com/drugs/DB00935) · **PubChem:** [CID 4636](https://pubchem.ncbi.nlm.nih.gov/compound/4636)
- **molar mass:** 260.3746 g/mol (C16H24N2O) — DrugBank
- **groups:** approved, investigational

## About

Oxymetazoline is a topical decongestant used for nasal congestion from rhinitis or nasopharyngitis, eye redness in conjunctivitis, and the skin condition rosacea. It is widely available over the counter as nasal sprays, eye drops, and skin creams, and is also an approved dermatological treatment.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q417813](https://www.wikidata.org/wiki/Q417813) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:45 | 7:33 | 0/1/0 | 5/0/1 | 0/0/0 | 224,884/10,553 | einfracz / qwen3.8-27b | 2 | 1/0 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Cacek_2017_reference](drugs/drug_oxymetazoline/Oxymetazoline_Cacek2017_reference.md) | — | 1-compartment (no model) | 0 | Cacek AT et al., Population Pharmacokinetics of an Intra…, Journal of clinical pharmac… (2017) | [10.1002/jcph.799](https://doi.org/10.1002/jcph.799) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span> | [Colucci_1998_evoked_tritium_outflow](drugs/drug_oxymetazoline/pd_Colucci_1998_evoked_tritium_outflow.md) | evoked tritium outflow ← oxymetazoline · direct sigmoid Emax (Hill) effect | — | Colucci R et al., Effects of imidazoline derivatives on c…, Naunyn-Schmiedeberg's archi… (1998) | [10.1007/pl00005225](https://doi.org/10.1007/pl00005225) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span> | [Colucci_1998_twitch_responses](drugs/drug_oxymetazoline/pd_Colucci_1998_twitch_responses.md) | twitch responses ← oxymetazoline · direct sigmoid Emax (Hill) effect | — | Colucci R et al., Effects of imidazoline derivatives on c…, Naunyn-Schmiedeberg's archi… (1998) | [10.1007/pl00005225](https://doi.org/10.1007/pl00005225) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Manoharan_2016_PNIF](drugs/drug_oxymetazoline/pd_Manoharan_2016_PNIF.md) | peak nasal inspiratory flow ← oxymetazoline · stimulation effect | — | Manoharan A et al., Effects of the inverse alpha-agonist do…, Clinical and experimental a… (2016) | [10.1111/cea.12700](https://doi.org/10.1111/cea.12700) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span> | [Pratt_1987_melatonin](drugs/drug_oxymetazoline/pd_Pratt_1987_melatonin.md) | melatonin release ← Oxymetazoline · direct sigmoid Emax (Hill) effect | — | Pratt BL et al., Alpha-2 adrenergic regulation of melato…, The Journal of neuroscience… (1987) | [10.1523/JNEUROSCI.07-11-03665.1987](https://doi.org/10.1523/JNEUROSCI.07-11-03665.1987) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Shujaa_2011_gastric_motor_activity](drugs/drug_oxymetazoline/pd_Shujaa_2011_gastric_motor_activity.md) | gastric motor activity ← oxymetazoline · direct linear effect | — | Shujaa N et al., α(2)-adrenoceptor agonist-induced inhib…, Neurochemistry international (2011) | [10.1016/j.neuint.2011.02.011](https://doi.org/10.1016/j.neuint.2011.02.011) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span> | [Wikberg-Matsson_2001_isometric_tension](drugs/drug_oxymetazoline/pd_Wikberg_Matsson_2001_isometric_tension.md) | isometric tension ← oxymetazoline · direct sigmoid Emax (Hill) effect | — | Wikberg-Matsson A et al., Potent alpha(2A)-adrenoceptor-mediated…, Investigative ophthalmology… (2001) | — |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.50).">in vitro</span> | [Raiteri_1992_evoked_overflow_of_tritium](drugs/drug_oxymetazoline/pd_Raiteri_1992_evoked_overflow_of_tritium.md) | evoked overflow of tritium ← oxymetazoline · direct Emax (saturable) effect | — | Raiteri M et al., Subclassification of release-regulating…, British journal of pharmaco… (1992) | [10.1111/j.1476-5381.1992.tb13421.x](https://doi.org/10.1111/j.1476-5381.1992.tb13421.x) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=oxymetazoline) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | kidney | `UGT1A9` substrate | DrugBank actor |
| metabolism | liver | `CYP2C19` substrate, `UGT1A9` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ADRA1A (partial agonist), ADRA1B (target), ADRA1D (target), ADRA2A (partial agonist), ADRA2A (target), ADRA2B (target), ADRA2C (target), HTR1A (target), HTR1B (target), HTR1D (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 141 matched, 67 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Cacek_2017.pdf` | Cacek AT et al., Population Pharmacokinetics of an Intra…, Journal of clinical pharmac… (2017) | popPK | 10 | [10.1002/jcph.799](https://doi.org/10.1002/jcph.799) | [27436060](https://pubmed.ncbi.nlm.nih.gov/27436060) | The paper explicitly reports quantitative population PK parameters (ka, CL, V, Q) for oxymetazoline in healthy volunteers. |
| `Cartabuke_2019.pdf` | Cartabuke RS et al., Hemodynamic and pharmacokinetic analysi…, The Laryngoscope (2019) | popPK | 5 | [10.1002/lary.27760](https://doi.org/10.1002/lary.27760) | [30786035](https://pubmed.ncbi.nlm.nih.gov/30786035) | The study reports population PK parameters including relative bioavailability and absorption half-life for oxymetazoline in children, providing quantitative disposition data for the subject drug. |

<sub>queue written 2026-10-07T08:43:57.884747+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alberts_1992 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of presynaptic adrenoceptors in guinea-pig urethra, not a pharmacokinetic study of oxymetazoline. |
| popPK | Brown_1979 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological characterization of adrenoceptors in rat ganglia and contains no pharmacokinetic parameters for oxymetazoline. |
| popPK | Cartabuke_2019 | relevant | 5 | 4 | The study reports population PK parameters including relative bioavailability and absorption half-life for oxymetazoline in children, providing quantitative disposition data for the subject drug. |
| popPK | Colucci_1998 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of cholinergic motility in guinea-pig ileum and does not report any pharmacokinetic disposition parameters for oxymetazoline. |
| popPK | Forster_1992 | irrelevant | 0 | 0 | This is an in-vitro pharmacodynamics study of vascular responsiveness using oxymetazoline as a probe agonist, not a pharmacokinetic study of the drug's disposition. |
| popPK | Gerhardt_1990 | irrelevant | 0 | 0 | The paper is a pharmacological binding study of p-[125I]iodoclonidine, and oxymetazoline is only used as a comparator ligand in competition experiments. |
| popPK | Holmberg_1998 | irrelevant | 0 | 0 | The paper is an in vitro pharmacological study of alpha2B-adrenoceptor signaling mechanisms and does not report pharmacokinetic parameters for oxymetazoline. |
| popPK | Ishikawa_1996 | irrelevant | 0 | 0 | The study is an in vitro organ bath pharmacology study characterizing adrenoceptors, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Kaessner_2012 | irrelevant | 0 | 0 | The study analyzes the pharmacokinetics of fentanyl, with oxymetazoline mentioned only as a co-administered excipient/covariate in the intranasal spray formulation. |
| popPK | Kurko_2014 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological analysis of receptor signaling pathways and does not report pharmacokinetic disposition parameters (CL, V, t1/2, etc.). |
| PGx | Mahajan_2011 | not_relevant | 0 | 0 | The paper describes in vitro metabolism and bioactivation of oxymetazoline by CYP2C19, but it does not report pharmacogenomic effects (gene variants) on PK or PD parameters in humans. |
| popPK | McPherson_1982 | irrelevant | 0 | 0 | The study is a mechanistic receptor binding and functional assay study, not a pharmacokinetic study, and does not report disposition parameters for oxymetazoline. |
| popPK | Newman-Tancredi_1998 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological analysis of receptor binding and G-protein activation, containing no pharmacokinetic parameters such as clearance or volume. |
| popPK | Odagaki_1993 | irrelevant | 0 | 0 | The study is a pharmacological investigation of GTPase activity in platelet membranes where oxymetazoline is used only as an antagonist in a rank order of potency, with no pharmacokinetic parameters reported. |
| popPK | Parsley_1999 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological characterization of alpha2-adrenoceptors using oxymetazoline as a ligand, reporting affinity (pEC50) rather than pharmacokinetic disposition parameters. |
| popPK | Pauwels_2000 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological analysis of receptor agonist/antagonist interactions and does not report pharmacokinetic disposition parameters for oxymetazoline. |
| popPK | Pratt_1987 | irrelevant | 0 | 0 | The paper is a receptor pharmacology study identifying alpha-2 adrenergic receptors in chick pineal cell cultures, not a pharmacokinetic study; oxymetazoline is used only as a ligand to determine EC50. |
| popPK | Raiteri_1992 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological characterization of alpha 2-autoreceptors in human brain cortex and does not report pharmacokinetic disposition parameters for oxymetazoline. |
| popPK | Sharif_1990 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological characterization of adrenoceptors where oxymetazoline is used as a comparator antagonist, not a pharmacokinetic study. |
| popPK | Shujaa_2011 | irrelevant | 0 | 0 | The study is an in vitro pharmacological investigation of receptor subtypes in mouse gastric tissue, not a pharmacokinetic study, and oxymetazoline is used as a tool compound rather than the subject of PK analysis. |
| popPK | Thorin_1998 | irrelevant | 0 | 0 | The study is an in vitro vascular physiology experiment where oxymetazoline is used as a pharmacological tool to test endothelial function, not a pharmacokinetic study. |
| popPK | Trendelenburg_1994 | irrelevant | 0 | 0 | This is an in-vitro neuropharmacological study in rabbit brain slices measuring dopamine release and receptor antagonist potency, not a pharmacokinetic study reporting disposition parameters for oxymetazoline. |
| popPK | Trendelenburg_1996 | irrelevant | 0 | 0 | The study is an in vitro pharmacological investigation of receptor subtypes using oxymetazoline as a probe, containing no pharmacokinetic disposition parameters. |
| popPK | Trendelenburg_1997 | irrelevant | 0 | 0 | This is a receptor pharmacology study using oxymetazoline as a probe ligand to characterize alpha2-adrenoceptor subtypes, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Umland_2001 | irrelevant | 0 | 0 | This is an in-vitro receptor pharmacology study determining affinity and efficacy, not a pharmacokinetic study reporting disposition parameters for oxymetazoline. |
| popPK | Venkataraman_1996 | irrelevant | 0 | 0 | The study is a molecular pharmacology investigation of alpha-2D adrenergic receptors in bovine retina, not a pharmacokinetic study of oxymetazoline. |
| popPK | Vázquez_2006 | irrelevant | 0 | 0 | This is an in-vitro pharmacological study characterizing receptor binding and cell proliferation, not a pharmacokinetic study of oxymetazoline. |
| popPK | Wan_1988 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study on adrenoceptor effects in bovine adrenal chromaffin cells, not a pharmacokinetic study. |
| popPK | Weinshank_1990 | irrelevant | 0 | 0 | This is a molecular pharmacology study characterizing a receptor, not a pharmacokinetic study, and oxymetazoline is only used as a ligand. |
| popPK | Wikberg-Matsson_2001 | irrelevant | 0 | 0 | This is an in-vitro functional pharmacology study measuring vasoconstrictive potency (EC50) in porcine tissue, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Wurch_1999 | irrelevant | 0 | 0 | This is an in-vitro receptor pharmacology study investigating G-protein coupling and agonist efficacy, not a pharmacokinetic study reporting disposition parameters for oxymetazoline. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 08:43 UTC</sub>
